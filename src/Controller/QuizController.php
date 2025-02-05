<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Security\Http\Attribute\IsGranted;

use App\Entity\Quiz;
use App\Entity\Question;
use App\Entity\Answer;
use App\Entity\User;
use App\Entity\UserAnswer;
use App\Repository\QuizRepository;
use App\Repository\QuestionRepository;
use App\Repository\AnswerRepository;
use App\Repository\UserAnswerRepository;

#[Route('/quiz', name: "app_quiz_")]
#[IsGranted('ROLE_ALPHA')]
class QuizController extends AbstractController
{
    #[Route('/', name: 'homepage')]
    public function listQuiz(QuizRepository $quizRepository): Response
    {
        $quizs = $quizRepository->findAll();

        return $this->render('quiz/index.html.twig', [
            'quizs' => $quizs,
        ]);
    }

    #[Route('/{id}', name: 'start')]
    public function startQuiz(Quiz $quiz, QuestionRepository $questionRepository): Response
    {
        /** @var User $user */
        $user = $this->getUser();

        if ($user->hasAnsweredQuiz($quiz)) {
            return $this->redirectToRoute('app_quiz_results', ['id' => $quiz->getId()]);
        }

        $firstQuestion = $questionRepository->findFirstQuestionByQuiz($quiz);

        return $this->redirectToRoute('app_quiz_question', [
            'id' => $quiz->getId(),
            'questionId' => $firstQuestion->getId(),
        ]);
    }

    #[Route('/{id}/question/{questionId}', name: 'question')]
    public function showQuestion(Quiz $quiz, int $questionId, EntityManagerInterface $entityManager, QuestionRepository $questionRepository): Response
    {
        $question = $questionRepository->find($questionId);

        if (!$question || $question->getQuiz() !== $quiz) {
            throw $this->createNotFoundException('Question not found or does not belong to the quiz.');
        }

        return $this->render('quiz/question.html.twig', [
            'quiz' => $quiz,
            'question' => $question,
            'reponses' => $question->getAnswers(),
        ]);
    }

    #[Route('/{id}/question/{questionId}/answer', name: 'answer', methods: ['POST'])]
    public function submitAnswer(
        Request $request,
        Quiz $quiz,
        int $questionId,
        EntityManagerInterface $entityManager,
        QuestionRepository $questionRepository,
        AnswerRepository $answerRepository
    ): Response {
        $question = $questionRepository->find($questionId);

        /** @var User $user */
        $user = $this->getUser();

        if (!$question || $question->getQuiz() !== $quiz) {
            throw $this->createNotFoundException('Question not found or does not belong to the quiz.');
        }

        $reponseId = $request->request->get('reponse');

        if (!$reponseId) {
            $this->addFlash('error', 'Une réponse est obligatoire');
            $this->redirectToRoute('app_quiz_question', [
                'id' => $quiz->getId(),
                'questionId' => $questionId,
            ]);
        }
        $reponse = $answerRepository->find($reponseId);

        if (!$reponse || $reponse->getQuestion() !== $question) {
            throw $this->createNotFoundException('Invalid response.');
        }

        $userReponse = new UserAnswer();
        $userReponse->setUser($user);
        $userReponse->setQuestion($question);
        $userReponse->setAnswer($reponse);

        $entityManager->persist($userReponse);
        $entityManager->flush();

        $nextQuestion = $questionRepository->findOneBy([
            'quiz' => $quiz,
            'id' => $questionId + 1
        ]);

        if ($nextQuestion) {
            return $this->redirectToRoute('app_quiz_question', [
                'id' => $quiz->getId(),
                'questionId' => $nextQuestion->getId(),
            ]);
        }

        return $this->redirectToRoute('app_quiz_finish', ['id' => $quiz->getId()]);
    }

    #[Route('/{id}/finish', name: 'finish')]
    public function finishQuiz(Quiz $quiz): Response
    {
        return $this->render('quiz/finish.html.twig', [
            'quiz' => $quiz,
        ]);
    }

    #[Route('/{id}/results', name: 'results')]
    public function results(
        Quiz $quiz,
        UserAnswerRepository $userAnswerRepository,
        EntityManagerInterface $entityManager,
        SessionInterface $session
    ): Response {
        /** @var User $user */
        $user = $this->getUser();

        $userResponses = $userAnswerRepository->findAllAnswerByUserAndQuiz($user, $quiz);

        $quizKey = 'quiz_' . $quiz->getId() . '_xp_added';

        $totalXpEarned = 0;

        /** @var array<UserAnswer> $userResponses */
        foreach ($userResponses as $userResponse) {
            /** @var Question $question */
            $question = $userResponse->getQuestion();
            $correctAnswer = $question->getCorrectAnswer();

            /** @var Answer $answer*/
            $answer = $userResponse->getAnswer();
            /** @var Answer $correctAnswer*/
            if ($answer->getId() === $correctAnswer->getId()) {
                $totalXpEarned += $question->getXp();
            }
        }

        if (!$session->get($quizKey, false)) {
            $user->setXp($user->getXp() + $totalXpEarned);

            $entityManager->persist($user);
            $entityManager->flush();

            $session->set($quizKey, true);
        }

        $correctAnswersCount = count(array_filter($userResponses, function ($userResponse) {
            /** @var Question $question */
            $question = $userResponse->getQuestion();
            /** @var Answer $answer */
            $answer = $userResponse->getAnswer();
            /** @var Answer $correctAnswer */
            $correctAnswer = $question->getCorrectAnswer();
            return $answer->getId() === $correctAnswer->getId();
        }));

        return $this->render('quiz/results.html.twig', [
            'quiz' => $quiz,
            'userResponses' => $userResponses,
            'correctAnswersCount' => $correctAnswersCount,
            'totalXpEarned' => $totalXpEarned
        ]);
    }
}
