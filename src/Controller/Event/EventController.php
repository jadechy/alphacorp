<?php

namespace App\Controller\Event;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\EntityManagerInterface;

use App\Repository\EventRepository;
use App\Entity\Event;
use App\Form\EventType;
use App\Service\FileUploader;

#[Route('/event')]
class EventController extends AbstractController
{
    #[Route('/', name: 'all_event')]
    public function allEvent(EventRepository $eventRepository): Response
    {
        return $this->render('event/all.html.twig', [
            'events' => $eventRepository->findAll(),
        ]);
    }

    #[Route('/{id}/single', name: 'single_event')]
    public function singleEvent(int $id, EventRepository $eventRepository, Event $event): Response
    {
        $user = $this->getUser();
        $isParticipating = $user && $event->getParticipants()->contains($user);

        return $this->render('event/event.html.twig', [
            'event' => $event,
            'isParticipating' => $isParticipating,
        ]);
    }

    #[Route('/author', name: 'author_event')]
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

    #[Route('/new', name: 'app_event_new', methods: ['GET', 'POST'])]
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

            $event->setAuthor($user);

            $imageFile = $form->get('imageFile')->getData();
            $fileName = $fileUploader->upload($imageFile);
            $event->setImage($fileName);

            $entityManager->persist($event);
            $entityManager->flush();

            return $this->redirectToRoute('author_event', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('event/new.html.twig', [
            'event' => $event,
            'form' => $form,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_event_edit', methods: ['GET', 'POST'])]
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

                $fileName = $fileUploader->upload($imageFile);
                $event->setImage($fileName);
            }

            $entityManager->flush();

            return $this->redirectToRoute('author_event', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('event/edit.html.twig', [
            'event' => $event,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_event_delete', methods: ['POST'])]
    public function delete(Request $request, Event $event, EntityManagerInterface $entityManager, FileUploader $fileUploader): Response
    {
        if ($this->isCsrfTokenValid('delete'.$event->getId(), $request->getPayload()->getString('_token'))) {
            if ($event->getImage()) {
                $imagePath = $fileUploader->getTargetDirectory() . $event->getImage();
                if (file_exists($imagePath)) {
                    unlink($imagePath);
                }
            }
            $entityManager->remove($event);
            $entityManager->flush();
        }

        return $this->redirectToRoute('author_event', [], Response::HTTP_SEE_OTHER);
    }

    #[Route('/participate/{id}', name: 'participate_event')]
    public function participateEvent(int $id, EventRepository $eventRepository, Event $event, EntityManagerInterface $entityManager): Response
    {
        $user = $this->getUser();
        if (!$user) {
            throw $this->createAccessDeniedException('Vous devez être connecté pour répondre.');
        }

        if (!$event->getParticipants()->contains($user)) { 
            $event->addParticipant($user);
        }

        $entityManager->flush();
        
        return $this->redirectToRoute('single_event', ['id' => $event->getId()], Response::HTTP_SEE_OTHER);
    }

    #[Route('/unparticipate/{id}', name: 'unparticipate_event')]
    public function unparticipateEvent(int $id, EventRepository $eventRepository, Event $event, EntityManagerInterface $entityManager): Response
    {
        $user = $this->getUser();
        if (!$user) {
            throw $this->createAccessDeniedException('Vous devez être connecté pour effectuer cette action.');
        }

        if ($event->getParticipants()->contains($user)) {
            $event->removeParticipant($user);
            $entityManager->flush();
        }

        return $this->redirectToRoute('single_event', ['id' => $event->getId()], Response::HTTP_SEE_OTHER);
    }
}
