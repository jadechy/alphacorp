<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\File\UploadedFile;

use App\Entity\User;
use App\Entity\Event;
use App\Repository\EventRepository;
use App\Form\EventType;
use App\Service\FileUploader;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted('ROLE_USER')]
#[Route('/event', name: "app_event_")]
class EventController extends AbstractController
{
    #[Route('/', name: 'homepage')]
    public function allEvent(EventRepository $eventRepository): Response
    {
        /** @var User $user */
        $user = $this->getUser();
        $events =  $eventRepository->findAllExcludingUser($user);

        return $this->render('event/index.html.twig', [
            'events' => $events,
            "user" => $user
        ]);
    }

    #[Route('/{id}/show', name: 'show')]
    public function singleEvent(Event $event): Response
    {
        return $this->render('event/show.html.twig', [
            'event' => $event,
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

        return $this->render('event/author.html.twig', [
            'events' => $events,
        ]);
    }

    #[Route('/user_participate', name: 'user_participate')]
    public function userParticipateEvent(EventRepository $eventRepository): Response
    {
        $user = $this->getUser();
        if (!$user) {
            throw $this->createAccessDeniedException('Vous devez être connecté pour effectuer cette action.');
        }

        $events = $eventRepository->findEventsByParticipant($user);

        return $this->render('event/author.html.twig', [
            'events' => $events,
        ]);
    }

    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager, FileUploader $fileUploader): Response
    {
        $event = new Event();
        $form = $this->createForm(EventType::class, $event);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $user = $this->getUser();
            if (!$user) {
                throw $this->createAccessDeniedException('Vous devez être connecté pour créer un événement.');
            }

            /** @var User $user */
            $event->setAuthor($user);

            /** @var UploadedFile $imageFile */
            $imageFile = $form->get('imageFile')->getData();
            if ($imageFile) {
                $fileName = $fileUploader->upload($imageFile);
                $event->setImage($fileName);
            }

            $entityManager->persist($event);
            $entityManager->flush();

            return $this->redirectToRoute('app_event_author', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('event/new.html.twig', [
            'event' => $event,
            'form' => $form,
        ]);
    }

    #[Route('/{id}/edit', name: 'edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Event $event, EntityManagerInterface $entityManager, FileUploader $fileUploader): Response
    {
        $form = $this->createForm(EventType::class, $event);
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

            $entityManager->flush();

            return $this->redirectToRoute('app_event_author', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('event/edit.html.twig', [
            'event' => $event,
            'form' => $form,
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

        return $this->redirectToRoute('app_event_author', [], Response::HTTP_SEE_OTHER);
    }

    #[Route('/participate/{id}', name: 'participate')]
    public function participateEvent(Event $event, EntityManagerInterface $entityManager): Response
    {
        $user = $this->getUser();
        if (!$user) {
            throw $this->createAccessDeniedException('Vous devez être connecté pour répondre.');
        }

        /** @var User $user */
        if (!$event->isUserParticipating($user)) {
            $event->addParticipant($user);
        }
        $entityManager->persist($event);
        $entityManager->flush();

        return $this->redirectToRoute('app_event_show', ['id' => $event->getId()], Response::HTTP_SEE_OTHER);
    }

    #[Route('/unparticipate/{id}', name: 'unparticipate')]
    public function unparticipateEvent(Event $event, EntityManagerInterface $entityManager): Response
    {
        $user = $this->getUser();
        if (!$user) {
            throw $this->createAccessDeniedException('Vous devez être connecté pour effectuer cette action.');
        }

        /** @var User $user */
        if ($event->isUserParticipating($user)) {
            $event->removeParticipant($user);
            $entityManager->persist($event);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_event_show', ['id' => $event->getId()], Response::HTTP_SEE_OTHER);
    }
}
