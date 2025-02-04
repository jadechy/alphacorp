<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Core\Authorization\AuthorizationCheckerInterface;

use App\Entity\Contest;
use App\Entity\UserContest;
use App\Repository\ContestRepository;
use App\Repository\UserContestRepository;
use App\Service\FileUploader;

#[Route('/contest', name: "app_contest_")]
final class ContestController extends AbstractController
{
    #[Route('/', name: 'homepage')]
    public function listContest(ContestRepository $contestRepository, AuthorizationCheckerInterface $authChecker): Response
    {
        $contest = new Contest();

        $contests = $contestRepository->findAll();

        return $this->render('contest/index.html.twig', [
            'contests' => $contests,
            'contest' => $contest
        ]);
    }

    #[Route('/{id}/show', name: 'show')]
    public function singleContest(Contest $contest, AuthorizationCheckerInterface $authChecker, UserContestRepository $userContestRepository): Response
    {
        if (!$authChecker->isGranted('view', $contest)) {
            throw $this->createAccessDeniedException('Accès interdit');
        }

        /** @var User $user */
        $user = $this->getUser();

        $user_contest = new UserContest();
        $user_contest = $userContestRepository->findOneBy([
            'contest' => $contest,
            'user' => $user
        ]);
        $answerImage = $user->getAnswerForContest($contest);

        $canParticipate = $authChecker->isGranted('participate', $contest);

        return $this->render('contest/show.html.twig', [
            'contest' => $contest,
            'answerImage' => $answerImage,
            'can_participate' => $canParticipate,
            "user_contest" => $user_contest
        ]);
    }

    #[Route('/{id}/upload', name: 'upload_image', methods: ['POST'])]
    public function uploadImage(int $id, Request $request, EntityManagerInterface $entityManager, FileUploader $fileUploader): Response
    {
        $contest = $entityManager->getRepository(Contest::class)->find($id);

        if (!$contest) {
            throw $this->createNotFoundException('Défi non trouvé.');
        }

        $user = $this->getUser();
        if (!$user) {
            return new Response('Utilisateur non authentifié.', Response::HTTP_FORBIDDEN);
        }

        /** @var UploadedFile $imageFile */
        $imageFile = $request->files->get('image');

        if ($imageFile) {
            $fileName = $fileUploader->upload($imageFile);

            $userContest = new UserContest();
            $userContest->setUser($user);
            $userContest->setContest($contest);
            $userContest->setAnswer($fileName);
            $userContest->setSuccess(null);

            $entityManager->persist($userContest);
            $entityManager->flush();

            return $this->redirectToRoute('app_contest_show', ['id' => $contest->getId()]);
        }

        return new Response('Aucune image sélectionnée.', Response::HTTP_BAD_REQUEST);
    }

    #[Route('/{id}/edit', name: 'edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Contest $contest, EntityManagerInterface $entityManager, FileUploader $fileUploader, UserContestRepository $userContestRepository): Response
    {
        $user = $this->getUser();

        $userContest = $userContestRepository->findOneBy([
            'contest' => $contest,
            'user' => $user
        ]);

        if (!$user) {
            return new Response('Utilisateur non authentifié.', Response::HTTP_FORBIDDEN);
        }

        /** @var UploadedFile $imageFile */
        $imageFile = $request->files->get('image');

        if ($imageFile && $userContest) {
            $oldImagePath = $userContest->getAnswer();
            if ($oldImagePath && file_exists($fileUploader->getTargetDirectory() . $oldImagePath)) {
                unlink($fileUploader->getTargetDirectory() . $oldImagePath);
            }

            /** @var UploadedFile $imageFile */
            $fileName = $fileUploader->upload($imageFile);
            $userContest->setAnswer($fileName);

            $entityManager->flush();

            return $this->redirectToRoute('app_contest_show', ['id' => $contest->getId()]);
        }

        return new Response('Aucune image sélectionnée.', Response::HTTP_BAD_REQUEST);
    }
}
