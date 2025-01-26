<?php

namespace App\Controller\Admin;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response as HttpResponse;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Http\Attribute\IsGranted;

use App\Repository\TopicRepository;
use App\Entity\Topic;
use App\Entity\Response;
use App\Form\ResponseType;
use App\Enum\ResponseStatusEnum;
use App\Enum\TopicStatusEnum;
use App\Form\TopicType;
use Symfony\Bundle\SecurityBundle\Security;

#[IsGranted('ROLE_ADMIN')]
#[Route('/admin/topic', name: "admin_topic_")]
class TopicAdminController extends AbstractController
{
    #[Route('/', name: 'home')]
    public function adminTopic(TopicRepository $topicRepository): HttpResponse
    {
        $languages = [];
        $categories = [];
        $statuses = [];

        $topics = $topicRepository->findAll();

        foreach ($topics as $topic) {
            $language = $topic->getLanguage();

            if ($language && !in_array($language, $languages, true)) {
                $languages[] = $language;
            }

            $category = $topic->getCategory();

            if ($category && !in_array($category, $categories, true)) {
                $categories[] = $category;
            }

            $status = $topic->getStatus();

            if ($status && !in_array($status, $statuses, true)) {
                $statuses[] = $status;
            }
        }

        return $this->render('admin/topic/index.html.twig', [
            'topics' => $topics,
            'languages' => $languages,
            'categories' => $categories,
            'statuses' => $statuses
        ]);
    }

    #[Route('/topic/{id}', name: 'single')]
    public function topic(string $id, Request $request, Topic $topic, EntityManagerInterface $entityManager): HttpResponse
    {
        $response = new Response();
        $form = $this->createForm(ResponseType::class, $response);
        $form->handleRequest($request);

        $user = $this->getUser();
        if ($form->isSubmitted() && $form->isValid()) {
            if (!$user) {
                throw $this->createAccessDeniedException('Vous devez être connecté pour répondre.');
            }
            $response->setAuthor($user);

            $response->setTopic($topic);

            $response->setCreatedAt(new \DateTimeImmutable());

            if (in_array('ROLE_ADMIN', $user->getRoles(), true)) {
                $response->setStatus(ResponseStatusEnum::VALIDATED);
            } else {
                $response->setStatus(ResponseStatusEnum::WAITING);
            }

            $entityManager->persist($response);
            $entityManager->flush();

            return $this->redirectToRoute('admin_topic_home', ['id' => $id], HttpResponse::HTTP_SEE_OTHER);
        }

        return $this->render('admin/topic/show.html.twig', [
            'topic' => $topic,
            'form' => $form,
            "user" => $user
        ]);
    }

    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function newTopic(Request $request, EntityManagerInterface $entityManager, Security $security): HttpResponse
    {
        $topic = new Topic();
        $form = $this->createForm(TopicType::class, $topic);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $user = $this->getUser();
            if (!$user) {
                throw $this->createAccessDeniedException('Vous devez être connecté pour ajouter un topic.');
            }
            $topic->setAuthor($user);

            $topic->setStatus(TopicStatusEnum::WAITING);

            $topic->setCreatedAt(new \DateTimeImmutable());

            $entityManager->persist($topic);
            $entityManager->flush();

            return $this->redirectToRoute('admin_topic_user', [], HttpResponse::HTTP_SEE_OTHER);
        }

        return $this->render('admin/topic/new.html.twig', [
            'topic' => $topic,
            'form' => $form,
        ]);
    }

    #[Route('/edit/{id}', name: 'edit', methods: ['GET', 'POST'])]
    public function editTopic(Request $request, Topic $topic, EntityManagerInterface $entityManager, Security $security): HttpResponse
    {
        $form = $this->createForm(TopicType::class, $topic);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('admin_topic_search', [], HttpResponse::HTTP_SEE_OTHER);
        }

        return $this->render('admin/topic/edit.html.twig', [
            'topic' => $topic,
            'form' => $form,
        ]);
    }

    #[Route('/delete/{id}', name: 'delete', methods: ['POST'])]
    public function delete(Request $request, Topic $topic, EntityManagerInterface $entityManager): HttpResponse
    {
        if ($this->isCsrfTokenValid('delete' . $topic->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($topic);
            $entityManager->flush();
        }

        return $this->redirectToRoute('admin_topic_user', [], HttpResponse::HTTP_SEE_OTHER);
    }
}
