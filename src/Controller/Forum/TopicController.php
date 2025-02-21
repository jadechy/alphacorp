<?php

namespace App\Controller\Forum;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response as HttpResponse;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\SecurityBundle\Security;

use App\Entity\User;
use App\Entity\Topic;
use App\Entity\Response;
use App\Form\ResponseType;
use App\Enum\ResponseStatusEnum;
use App\Enum\TopicStatusEnum;
use App\Form\TopicType;
use App\Repository\CategoryRepository;
use App\Repository\TopicRepository;
use App\Service\CategoryColorService;

#[Route('/forum', name: "app_forum_")]
class TopicController extends AbstractController
{
    #[Route('/', name: 'homepage', methods: ['GET'])]
    public function search(
        Request $request,
        TopicRepository $topicRepository,
        CategoryRepository $categoryRepository,
        CategoryColorService $categoryColorService
    ): HttpResponse {
        $keyword = $request->query->get('q', '');
        $categoryLabel = $request->query->get('category', '');
        $categories = $categoryRepository->findAll();

        $topics = [];
        if ($keyword || $categoryLabel) {
            $topics = $topicRepository->searchByFilters($keyword, $categoryLabel);
        } else {
            $topics = $topicRepository->findAll();
        }
        $selectedCategory = $categoryLabel
            ? $categoryRepository->findOneBy(["label" => $categoryLabel])
            : null;
        $colorsCategories = $categoryColorService->getCategoryColors();

        return $this->render('forum/index.html.twig', [
            'topics' => $topics,
            'keyword' => $keyword,
            'categories' => $categories,
            'category_selected' => $selectedCategory,
            'colorsCategories' => $colorsCategories,

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
            /** @var User $user */
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
            $this->addFlash('success', 'Réponse ajoutée, en attente de validation');

            return $this->redirectToRoute('app_forum_show', ['id' => $id], HttpResponse::HTTP_SEE_OTHER);
        }

        return $this->render('forum/show.html.twig', [
            'topic' => $topic,
            'form' => $form,
            "user" => $user
        ]);
    }

    #[IsGranted('ROLE_ALPHA')]
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function newTopic(Request $request, EntityManagerInterface $entityManager): HttpResponse
    {
        $topic = new Topic();
        $form = $this->createForm(TopicType::class, $topic);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $user = $this->getUser();
            if (!$user) {
                throw $this->createAccessDeniedException('Vous devez être connecté pour ajouter un topic.');
            }
            /** @var User $user */
            $topic->setAuthor($user);

            $topic->setStatus(TopicStatusEnum::WAITING);

            $topic->setCreatedAt(new \DateTimeImmutable());

            $entityManager->persist($topic);
            $entityManager->flush();
            $this->addFlash('success', 'Topic crée, en attende de validation');

            return $this->redirectToRoute('app_forum_homepage', [], HttpResponse::HTTP_SEE_OTHER);
        }

        return $this->render('forum/new.html.twig', [
            'topic' => $topic,
            'form' => $form,
        ]);
    }

    #[IsGranted('ROLE_ALPHA')]
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    #[Route('/edit/{id}', name: 'edit', methods: ['GET', 'POST'])]
    public function editTopic(string $id, Request $request, Topic $topic, EntityManagerInterface $entityManager, Security $security): HttpResponse
    {
        $form = $this->createForm(TopicType::class, $topic);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_forum_show', ["id" => $id], HttpResponse::HTTP_SEE_OTHER);
        }

        return $this->render('forum/edit.html.twig', [
            'topic' => $topic,
            'form' => $form,
        ]);
    }

    #[IsGranted('ROLE_ALPHA')]
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    #[Route('/delete/{id}', name: 'delete', methods: ['POST'])]
    public function delete(Request $request, Topic $topic, EntityManagerInterface $entityManager): HttpResponse
    {
        if ($this->isCsrfTokenValid('delete' . $topic->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($topic);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_topic_user', [], HttpResponse::HTTP_SEE_OTHER);
    }

    #[IsGranted('ROLE_ALPHA')]
    #[Route('/user', name: 'author')]
    public function userTopic(TopicRepository $topicRepository, CategoryColorService $categoryColorService): HttpResponse
    {
        $user = $this->getUser();

        if (!$user) {
            throw $this->createAccessDeniedException('No user is logged in.');
        }

        $topics = $topicRepository->findBy(['author' => $user]);
        $colorsCategories = $categoryColorService->getCategoryColors();
        return $this->render('forum/author.html.twig', [
            'topics' => $topics,
            "colorsCategories" => $colorsCategories
        ]);
    }
}
