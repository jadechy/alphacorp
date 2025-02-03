<?php

namespace App\Controller\Admin;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Http\Attribute\IsGranted;

use App\Entity\Rank;
use App\Form\RankType;
use App\Repository\RankRepository;

#[Route('/admin/rank', name: "admin_rank_")]
#[IsGranted('ROLE_ADMIN')]
class RankAdminController extends AbstractController
{
    #[Route(name: 'homepage', methods: ['GET'])]
    public function index(RankRepository $rankRepository): Response
    {
        return $this->render('admin/rank/index.html.twig', [
            'ranks' => $rankRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $rank = new Rank();
        $form = $this->createForm(RankType::class, $rank);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($rank);
            $entityManager->flush();

            return $this->redirectToRoute('admin_rank_homepage', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('admin/rank/new.html.twig', [
            'rank' => $rank,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'show', methods: ['GET'])]
    public function show(Rank $rank): Response
    {
        return $this->render('admin/rank/show.html.twig', [
            'rank' => $rank,
        ]);
    }

    #[Route('/{id}/edit', name: 'edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Rank $rank, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(RankType::class, $rank);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('admin_rank_homepage', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('admin/rank/edit.html.twig', [
            'rank' => $rank,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'delete', methods: ['POST'])]
    public function delete(Request $request, Rank $rank, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete' . $rank->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($rank);
            $entityManager->flush();
        }

        return $this->redirectToRoute('admin_rank_homepage', [], Response::HTTP_SEE_OTHER);
    }
}
