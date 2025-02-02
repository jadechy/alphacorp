<?php

namespace App\Controller\Admin;

use App\Entity\Quiz;
use App\Entity\Question;
use App\Form\QuestionType;
use App\Repository\QuestionRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/admin/question', name: "admin_question_")]
#[IsGranted('ROLE_ADMIN')]
final class QuestionAdminController extends AbstractController
{
    #[Route('/{id}', name: 'show', methods: ['GET'])]
    public function show(Question $question): Response
    {
        return $this->render('admin/quiz/question/show.html.twig', [
            'question' => $question,
        ]);
    }
    #[Route('/new/{quiz}', name: 'new')]
    public function createQuestion(Request $request, EntityManagerInterface $entityManager, Quiz $quiz): Response
    {
        $questionNumber = $request->query->getInt('question', 1);

        $question = new Question();

        $form = $this->createForm(QuestionType::class, $question);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $question = $form->getData();

            $question->setQuiz($quiz);

            $correctAnswer = null;

            foreach ($question->getAnswers() as $index => $answer) {
                $isCorrect = $form->get('answers')->get($index)->get('isCorrect')->getData();

                if ($isCorrect) {
                    $correctAnswer = $answer;
                    break;
                }
            }

            if ($correctAnswer !== null) {
                $question->setCorrectAnswer($correctAnswer);
            }

            $entityManager->persist($question);
            $entityManager->flush();

            if ($request->get('add_new_question')) {
                return $this->redirectToRoute('admin_question_new', [
                    'quiz' => $quiz->getId(),
                    'question' => $questionNumber + 1
                ]);
            }

            return $this->redirectToRoute('admin_quiz_index');
        }

        return $this->render('admin/quiz/question/new.html.twig', [
            'form' => $form->createView(),
            'questionNumber' => $questionNumber
        ]);
    }

    #[Route('/{id}/edit', name: 'edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Question $question, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(QuestionType::class, $question);

        $correctAnswer = $question->getCorrectAnswer();

        foreach ($form->get('answers') as $answerField) {
            $answer = $answerField->getData();

            if ($correctAnswer && $answer === $correctAnswer) {
                $answerField->get('isCorrect')->setData(true);
            }
        }

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $correctAnswer = null;
            foreach ($question->getAnswers() as $index => $answer) {
                $isCorrect = $form->get('answers')->get($index)->get('isCorrect')->getData();

                if ($isCorrect) {
                    $correctAnswer = $answer;
                    break;
                }
            }

            if ($correctAnswer !== null) {
                $question->setCorrectAnswer($correctAnswer);
            }

            $entityManager->flush();

            $quiz = $question->getQuiz();

            return $this->redirectToRoute('admin_quiz_show', ['id' => $quiz->getId()], Response::HTTP_SEE_OTHER);
        }

        return $this->render('admin/quiz/question/edit.html.twig', [
            'question' => $question,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'delete', methods: ['POST'])]
    public function delete(Request $request, Question $question, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete' . $question->getId(), $request->getPayload()->getString('_token'))) {
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
            $entityManager->flush();
        }

        $quiz = $question->getQuiz();

        return $this->redirectToRoute('admin_quiz_show', ['id' => $quiz->getId()], Response::HTTP_SEE_OTHER);
    }
}
