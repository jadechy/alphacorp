<?php

namespace App\Controller\Admin;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\File\UploadedFile;

use App\Repository\EventRepository;
use App\Entity\Event;
use App\Entity\User;
use App\Form\EventType;
use App\Repository\UserRepository;
use App\Service\FileUploader;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted('ROLE_ADMIN')]
#[Route('/admin/event', name: "admin_event_")]
class EventAdminController extends AbstractController
{
    #[Route('/', name: 'homepage')]
    public function allEvent(PaginatorInterface $paginator, Request $request, EventRepository $eventRepository): Response
    {
        $query = $eventRepository->findAll();
        $pagination = $paginator->paginate(
            $query,
            $request->query->getInt('page', 1),
            10
        );
        return $this->render('admin/event/index.html.twig', [
            'pagination' => $pagination,
        ]);
    }

    #[Route('/{id}/show', name: 'show')]
    public function singleEvent(int $id, EventRepository $eventRepository, Event $event): Response
    {
        $user = $this->getUser();
        $isParticipating = $user && $event->getParticipants()->contains($user);

        return $this->render('admin/event/show.html.twig', [
            'event' => $event,
            'isParticipating' => $isParticipating,
        ]);
    }

    #[Route('/author', name: 'author')]
    public function authorEvent(EventRepository $eventRepository): Response
    {
        $user = $this->getUser();
        if (!$user) {
            throw $this->createAccessDeniedException('Vous devez être connecté pour effectuer cette action.');
        }

        $events = $eventRepository->findBy(['author' => $user]);

        return $this->render('admin/event/author.html.twig', [
            'events' => $events,
        ]);
    }

    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager, FileUploader $fileUploader): Response
    {
        $event = new Event();
        $form = $this->createForm(
            EventType::class,
            $event,
            ['is_admin' => true]
        );
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $user = $this->getUser();
            if (!$user) {
                throw $this->createAccessDeniedException('Vous devez être connecté pour créer un événement.');
            }

            /** @var UploadedFile $imageFile */
            $imageFile = $form->get('imageFile')->getData();
            $fileName = $fileUploader->upload($imageFile);
            $event->setImage($fileName);

            $entityManager->persist($event);
            $entityManager->flush();

            return $this->redirectToRoute('admin_event_homepage', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('admin/event/new.html.twig', [
            'event' => $event,
            'form' => $form,
        ]);
    }

    #[Route('/{id}/edit', name: 'edit', methods: ['GET', 'POST'])]
    public function edit(string $id, Request $request, Event $event, EntityManagerInterface $entityManager, FileUploader $fileUploader, UserRepository $userRepository): Response
    {
        /** @var User $user */
        $user = $this->getUser();
        $users = $userRepository->findAllAlpha($user->getId());
        $form = $this->createForm(
            EventType::class,
            $event,
            ['is_admin' => true, 'participants' => $userRepository->findAllAlpha($user->getId())]
        );
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $imageFile = $form->get('imageFile')->getData();

            if ($imageFile) {
                $oldImagePath = $event->getImage();
                if ($oldImagePath && file_exists($fileUploader->getTargetDirectory() . $oldImagePath)) {
                    unlink($fileUploader->getTargetDirectory() . $oldImagePath);
                }

                /** @var UploadedFile $imageFile */
                $fileName = $fileUploader->upload($imageFile);
                $event->setImage($fileName);
            }
            /** @var array<User> $selectedParticipants */
            $selectedParticipants = $form->get('participants')->getData();
            foreach ($selectedParticipants as $participant) {
                /** @var User $participant */
                $event->addParticipant($participant);
            }
            $entityManager->flush();

            return $this->redirectToRoute('admin_event_show', ["id" => $id], Response::HTTP_SEE_OTHER);
        }

        return $this->render('admin/event/edit.html.twig', [
            'event' => $event,
            'form' => $form,
            "users" => $users
        ]);
    }

    #[Route('/{id}', name: 'delete', methods: ['POST'])]
    public function delete(Request $request, Event $event, EntityManagerInterface $entityManager, FileUploader $fileUploader): Response
    {
        if ($this->isCsrfTokenValid('delete' . $event->getId(), $request->getPayload()->getString('_token'))) {
            if ($event->getImage()) {
                $imagePath = $fileUploader->getTargetDirectory() . $event->getImage();
                if (file_exists($imagePath)) {
                    unlink($imagePath);
                }
            }
            $entityManager->remove($event);
            $entityManager->flush();
        }

        return $this->redirectToRoute('admin_event_homepage', [], Response::HTTP_SEE_OTHER);
    }

    #[Route('/{eventId}/remove-participant/{participantId}', name: 'remove_participant', methods: ['DELETE'])]
    public function removeParticipant(string $eventId, string $participantId, EntityManagerInterface $entityManager, Request $request): Response
    {
        // Récupérer l'événement et le participant
        $event = $entityManager->getRepository(Event::class)->find($eventId);
        $participant = $entityManager->getRepository(User::class)->find($participantId);

        if ($event && $participant) {
            // Retirer le participant de l'événement
            $event->removeParticipant($participant);
            $entityManager->flush();

            // Si c'est une requête AJAX, renvoyer une réponse JSON
            if ($request->isXmlHttpRequest()) {
                return new JsonResponse(['status' => 'success']);
            }
        }

        // Rediriger pour les requêtes classiques
        return $this->redirectToRoute('app_event_show', ['id' => $eventId]);
    }
}
