<?php

namespace App\Controller\Admin;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;

use App\Entity\UserContest;
use App\Entity\Contest;
use App\Form\ContestType;
use App\Repository\ContestRepository;

#[Route('/admin/contest', name: "admin_contest_")]
#[IsGranted('ROLE_ADMIN')]
#[IsGranted('IS_AUTHENTICATED_FULLY')]
class ContestAdminController extends AbstractController
{
    #[Route('/', name: 'homepage')]
    public function allContest(PaginatorInterface $paginator, Request $request, ContestRepository $contestRepository): Response
    {
        $query = $contestRepository->findAll();
        $pagination = $paginator->paginate(
            $query,
            $request->query->getInt('page', 1),
            10
        );
        return $this->render('admin/contest/index.html.twig', [
            'pagination' => $pagination,
        ]);
    }

    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $contest = new Contest();
        $form = $this->createForm(ContestType::class, $contest);
        $form->handleRequest($request);
        /** @var User $user */
        $user = $this->getUser();
        if ($form->isSubmitted() && $form->isValid()) {
            $contest->setAuthor($user);

            $entityManager->persist($contest);
            $entityManager->flush();

            return $this->redirectToRoute('admin_contest_homepage', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('admin/contest/new.html.twig', [
            'contest' => $contest,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'show', methods: ['GET'])]
    public function show(Contest $contest, EntityManagerInterface $entityManager): Response
    {
        return $this->render('admin/contest/show.html.twig', [
            'contest' => $contest,
        ]);
    }

    #[Route('/{id}/edit', name: 'edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Contest $contest, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(ContestType::class, $contest);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('admin_contest_homepage', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('admin/contest/edit.html.twig', [
            'contest' => $contest,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'delete', methods: ['POST'])]
    public function delete(Request $request, Contest $contest, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete' . $contest->getId(), $request->getPayload()->getString('_token'))) {
            foreach ($contest->getUserContests() as $userContest) {
                $entityManager->remove($userContest);
            }

            $entityManager->remove($contest);
            $entityManager->flush();
        }

        return $this->redirectToRoute('admin_contest_homepage', [], Response::HTTP_SEE_OTHER);
    }

    #[Route('/user/{id}', name: 'user_delete', methods: ['POST'])]
    public function deleteUserContest(Request $request, UserContest $userContest, EntityManagerInterface $entityManager): Response
    {
        $contest = $userContest->getContest();

        if ($userContest && $this->isCsrfTokenValid('delete' . $userContest->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($userContest);
            $entityManager->flush();
        }
        $this->addFlash('success', 'Suppression effectué avec succès.');
        return $this->redirectToRoute('admin_contest_show', ["id" => $contest->getId()], Response::HTTP_SEE_OTHER);
    }

    #[Route('/user/success/{id}', name: 'user_success_edit', methods: ['POST'])]
    public function UpdateUserContestSuccess(Request $request, UserContest $userContest, EntityManagerInterface $entityManager): Response
    {
        $success = $request->request->get('success');
        $userContest->setSuccess($success);
        $entityManager->flush();


        $this->addFlash('success', 'Modification effectuée.');
        return $this->redirectToRoute('admin_contest_show', ["id" => $userContest->getContest()->getId()], Response::HTTP_SEE_OTHER);
    }
}
