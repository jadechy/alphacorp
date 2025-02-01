<?php

namespace App\Controller\Admin;

use App\Entity\Quiz;
use App\Form\QuizType;
use App\Repository\QuizRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/admin/quiz', name: "app_quiz_admin_")]
#[IsGranted('ROLE_ADMIN')]
final class QuizAdminController extends AbstractController
{
    #[Route(name: 'index', methods: ['GET'])]
    public function index(QuizRepository $quizRepository): Response
    {
        return $this->render('admin/quiz/index.html.twig', [
            'quizzes' => $quizRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {/** @var User $user */
        $user = $this->getUser();

        $quiz = new Quiz();
        $form = $this->createForm(QuizType::class, $quiz);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $quiz->setAuthor($user);

            $entityManager->persist($quiz);
            $entityManager->flush();

            return $this->redirectToRoute('app_question_admin_new', ['quiz' => $quiz->getId()]);
        }

        return $this->render('admin/quiz/new.html.twig', [
            'quiz' => $quiz,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'show', methods: ['GET'])]
    public function show(Quiz $quiz): Response
    {
        return $this->render('admin/quiz/show.html.twig', [
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

            return $this->redirectToRoute('app_quiz_admin_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('admin/quiz/edit.html.twig', [
            'quiz' => $quiz,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'delete', methods: ['POST'])]
    public function delete(Request $request, Quiz $quiz, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$quiz->getId(), $request->getPayload()->getString('_token'))) {
            foreach ($quiz->getQuestions() as $question) {

                if ($question->getCorrectAnswer()) {
                    $correctAnswer = $question->getCorrectAnswer();
                    $question->setCorrectAnswer(null);
                    $entityManager->flush(); 
    
                    $entityManager->remove($correctAnswer);
                }
    
                foreach ($question->getAnswers() as $answer) {
                    $entityManager->remove($answer);
                }

                foreach ($question->getUserAnswers() as $userAnswer) {
                    $entityManager->remove($userAnswer);
                }
                
                $entityManager->flush();

                $entityManager->remove($question);
            }
            $entityManager->flush();

            $entityManager->remove($quiz);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_quiz_admin_index', [], Response::HTTP_SEE_OTHER);
    }
}
