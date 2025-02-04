<?php

namespace App\Controller\Supervisor;

use App\Entity\Academy;
use App\Form\AcademyType;
use App\Repository\AcademyRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/supervisor/academy', name: "app_supervisor_academy_")]
#[IsGranted('ROLE_SUPERVISOR')]
class AcademyController extends AbstractController
{
    #[Route('/', name: 'index', methods: ['GET'])]
    public function index(AcademyRepository $academyRepository): Response
    {
        /** @var User $user */
        $user = $this->getUser();

        $academies = $academyRepository->findByAuthor($user);

        return $this->render('academy/supervisor/index.html.twig', [
            'academies' => $academies,
        ]);
    }

    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        /** @var User $user */
        $user = $this->getUser();

        $academy = new Academy();
        $form = $this->createForm(AcademyType::class, $academy);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $academy->setAuthor($user);
            $academy->setCreatedAt(new \DateTimeImmutable());

            $entityManager->persist($academy);
            $entityManager->flush();

            return $this->redirectToRoute('app_supervisor_academy_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('academy/supervisor/new.html.twig', [
            'academy' => $academy,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'show', methods: ['GET'])]
    public function show(Academy $academy): Response
    {
        return $this->render('academy/supervisor/show.html.twig', [
            'academy' => $academy,
        ]);
    }

    #[Route('/{id}/edit', name: 'edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Academy $academy, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(AcademyType::class, $academy);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_supervisor_academy_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('academy/supervisor/edit.html.twig', [
            'academy' => $academy,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'delete', methods: ['POST'])]
    public function delete(Request $request, Academy $academy, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$academy->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($academy);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_supervisor_academy_index', [], Response::HTTP_SEE_OTHER);
    }
}
