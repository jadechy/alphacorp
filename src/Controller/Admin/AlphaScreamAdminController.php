<?php

namespace App\Controller\Admin;

use App\Entity\User;
use App\Entity\AlphaScream;
use App\Form\AlphaScreamType;
use App\Repository\AlphaScreamRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/admin/scream', name: "admin_scream_")]
#[IsGranted('ROLE_ADMIN')]
final class AlphaScreamAdminController extends AbstractController
{
    #[Route(name: 'homepage', methods: ['GET'])]
    public function index(AlphaScreamRepository $alphaScreamRepository): Response
    {
        return $this->render('admin/alpha_scream/index.html.twig', [
            'alpha_screams' => $alphaScreamRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $alphaScream = new AlphaScream();
        $form = $this->createForm(AlphaScreamType::class, $alphaScream);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $alphaScream->setCreatedAt(new \DateTimeImmutable());
            /** @var User $user */
            $user = $this->getUser();
            $alphaScream->setAlpha($user);
            $alphaScream->setLevel();
            $entityManager->persist($alphaScream);
            $entityManager->flush();

            return $this->redirectToRoute('admin_scream_homepage', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('admin/alpha_scream/new.html.twig', [
            'alpha_scream' => $alphaScream,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'show', methods: ['GET'])]
    public function show(AlphaScream $alphaScream): Response
    {
        return $this->render('admin/alpha_scream/show.html.twig', [
            'alpha_scream' => $alphaScream,
        ]);
    }

    #[Route('/{id}/edit', name: 'edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, AlphaScream $alphaScream, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(AlphaScreamType::class, $alphaScream);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $alphaScream->setLevel();
            $entityManager->flush();

            return $this->redirectToRoute('admin_scream_homepage', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('admin/alpha_scream/edit.html.twig', [
            'alpha_scream' => $alphaScream,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'delete', methods: ['POST'])]
    public function delete(Request $request, AlphaScream $alphaScream, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete' . $alphaScream->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($alphaScream);
            $entityManager->flush();
        }

        return $this->redirectToRoute('admin_scream_homepage', [], Response::HTTP_SEE_OTHER);
    }
}
