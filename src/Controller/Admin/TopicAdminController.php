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
use App\Form\Admin\TopicAdminType;
use Knp\Component\Pager\PaginatorInterface;

// #[IsGranted('ROLE_ADMIN')]
#[Route('/admin/topic', name: "admin_topic_")]
class TopicAdminController extends AbstractController
{
    #[Route('/', name: 'homepage')]
    public function adminTopic(TopicRepository $topicRepository, PaginatorInterface $paginator, Request $request): HttpResponse
    {
        $languages = [];
        $categories = [];
        $statuses = [];

        $query = $topicRepository->findAll();

        $pagination = $paginator->paginate(
            $query,
            $request->query->getInt('page', 1),
            10
        );
        foreach ($query as $topic) {
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
            'pagination' => $pagination,
            'languages' => $languages,
            'categories' => $categories,
            'statuses' => $statuses
        ]);
    }

    #[Route('/show/{id}', name: 'show')]
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

            return $this->redirectToRoute('admin_topic_homepage', ['id' => $id], HttpResponse::HTTP_SEE_OTHER);
        }

        return $this->render('admin/topic/show.html.twig', [
            'topic' => $topic,
            'form' => $form,
            "user" => $user
        ]);
    }

    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function newTopic(Request $request, EntityManagerInterface $entityManager): HttpResponse
    {
        $user = $this->getUser();
        if (!$user) {
            throw $this->createAccessDeniedException('Vous devez être connecté pour ajouter un topic.');
        }
        $topic = new Topic();
        $topic->setAuthor($user);

        $form = $this->createForm(TopicAdminType::class, $topic);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {


            $topic->setStatus(TopicStatusEnum::WAITING);

            $topic->setCreatedAt(new \DateTimeImmutable());

            $entityManager->persist($topic);
            $entityManager->flush();

            return $this->redirectToRoute('admin_topic_homepage', [], HttpResponse::HTTP_SEE_OTHER);
        }

        return $this->render('admin/topic/new.html.twig', [
            'topic' => $topic,
            'form' => $form,
        ]);
    }

    #[Route('/edit/{id}', name: 'edit', methods: ['GET', 'POST'])]
    public function editTopic(Request $request, Topic $topic, EntityManagerInterface $entityManager): HttpResponse
    {
        $form = $this->createForm(TopicAdminType::class, $topic);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($topic);
            $entityManager->flush();

            return $this->redirectToRoute('admin_topic_homepage', [], HttpResponse::HTTP_SEE_OTHER);
        }

        return $this->render('admin/topic/edit.html.twig', [
            'topic' => $topic,
            'form' => $form,
        ]);
    }

    #[Route('/delete/{id}', name: 'delete', methods: ['POST'])]
    public function delete(Request $request, Topic $topic, EntityManagerInterface $entityManager): HttpResponse
    {
        dump($topic);

        if ($this->isCsrfTokenValid('delete' . $topic->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($topic);
            $entityManager->flush();
        }

        return $this->redirectToRoute('admin_topic_homepage', [], HttpResponse::HTTP_SEE_OTHER);
    }

    #[IsGranted('ROLE_ADMIN')]
    #[Route('/status/{id}', name: 'change_status', methods: ['POST'])]
    public function changeStatus(Topic $topic, Request $request, EntityManagerInterface $entityManager): HttpResponse
    {
        $status = $request->request->get('status');

        if (!in_array($status, array_map(fn($enum) => $enum->value, TopicStatusEnum::cases()), true)) {
            throw $this->createNotFoundException('Statut non valide');
        }

        $topic->setStatus(TopicStatusEnum::from($status));

        $entityManager->flush();

        return $this->redirectToRoute('admin_topic_homepage', [], HttpResponse::HTTP_SEE_OTHER);
    }
}
