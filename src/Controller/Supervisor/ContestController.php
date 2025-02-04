<?php

namespace App\Controller\Supervisor;

use App\Entity\UserContest;
use App\Entity\Contest;
use App\Form\ContestType;
use App\Repository\ContestRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/supervisor/contest', name: "app_supervisor_contest_")]
#[IsGranted('ROLE_SUPERVISOR')]
class ContestController extends AbstractController
{
    #[Route('/', name: 'homepage')]
    public function listContest(ContestRepository $contestRepository): Response
    {
        /** @var User $user */
        $user = $this->getUser();

        $contests = $contestRepository->findByAuthor($user);

        return $this->render('contest/supervisor/index.html.twig', [
            'contests' => $contests,
        ]);
    }

    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        /** @var User $user */
        $user = $this->getUser();

        $contest = new Contest();
        $form = $this->createForm(ContestType::class, $contest);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $contest->setAuthor($user);

            $entityManager->persist($contest);
            $entityManager->flush();

            return $this->redirectToRoute('app_supervisor_contest_homepage', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('contest/supervisor/new.html.twig', [
            'contest' => $contest,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'show', methods: ['GET'])]
    public function show(Contest $contest,EntityManagerInterface $entityManager): Response
    {
        $userContests = $entityManager->getRepository(UserContest::class)->findBy(['contest' => $contest]);

        $validUserContests = [];
        $pendingUserContests = [];

        foreach ($userContests as $userContest) {
            if ($userContest->isSuccess() === true || $userContest->isSuccess() === false) {
                $validUserContests[] = $userContest;
            } elseif ($userContest->isSuccess() === null) {
                $pendingUserContests[] = $userContest;
            }
        }

        return $this->render('contest/supervisor/show.html.twig', [
            'contest' => $contest,
            'validUserContests' => $validUserContests,
            'pendingUserContests' => $pendingUserContests,
        ]);
    }

    #[Route('/{id}/edit', name: 'edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Contest $contest, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(ContestType::class, $contest);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_supervisor_contest_homepage', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('contest/supervisor/edit.html.twig', [
            'contest' => $contest,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'delete', methods: ['POST'])]
    public function delete(Request $request, Contest $contest, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$contest->getId(), $request->getPayload()->getString('_token'))) {
            foreach ($contest->getUserContests() as $userContest) {
                $entityManager->remove($userContest);
            }

            $entityManager->remove($contest);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_supervisor_contest_homepage', [], Response::HTTP_SEE_OTHER);
    }

    #[Route('/{id}/validate/{success}', name: 'validate', methods: ['POST'])]
    public function validateContest(UserContest $userContest, int $success, EntityManagerInterface $entityManager): Response
    {
        $user = $this->getUser();
        if ($user !== $userContest->getContest()->getAuthor()) {
            return $this->redirectToRoute('app_supervisor_contest_show', ['id' => $userContest->getContest()->getId()]);
        }

        $userContest->setSuccess($success);

        if ($success === 1) {
            $contest = $userContest->getContest();
            $xp = $contest->getXp();
            $user = $userContest->getUser();
    
            if ($xp) {
                $user->setXp($user->getXp() + $xp);
            }
        }

        $entityManager->flush();

        return $this->redirectToRoute('app_supervisor_contest_show', ['id' => $userContest->getContest()->getId()]);
    }

}
