<?php

namespace App\Controller\Supervisor;

use App\Entity\Quiz;
use App\Form\QuizType;
use App\Repository\QuizRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/supervisor/quiz', name: "app_quiz_supervisor_")]
#[IsGranted('ROLE_SUPERVISOR')]
final class QuizController extends AbstractController
{
    #[Route(name: 'index', methods: ['GET'])]
    public function index(QuizRepository $quizRepository): Response
    {
        /** @var User $user */
        $user = $this->getUser();

        $quizzes = $quizRepository->findByAuthor($user);

        return $this->render('quiz/supervisor/index.html.twig', [
            'quizzes' => $quizzes,
        ]);
    }

    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        /** @var User $user */
        $user = $this->getUser();

        $quiz = new Quiz();
        $form = $this->createForm(QuizType::class, $quiz);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $quiz->setAuthor($user);

            $entityManager->persist($quiz);
            $entityManager->flush();

            return $this->redirectToRoute('app_question_supervisor_new', ['quiz' => $quiz->getId()]);
        }

        return $this->render('quiz/supervisor/new.html.twig', [
            'quiz' => $quiz,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'show', methods: ['GET'])]
    public function show(Quiz $quiz): Response
    {
        return $this->render('quiz/supervisor/show.html.twig', [
            'quiz' => $quiz,
        ]);
    }

    #[Route('/{id}/edit', name: 'edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Quiz $quiz, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(QuizType::class, $quiz);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_quiz_supervisor_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('quiz/supervisor/edit.html.twig', [
            'quiz' => $quiz,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'delete', methods: ['POST'])]
    public function delete(Request $request, Quiz $quiz, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$quiz->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($quiz);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_quiz_supervisor_index', [], Response::HTTP_SEE_OTHER);
    }
}
