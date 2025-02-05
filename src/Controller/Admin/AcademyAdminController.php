<?php

namespace App\Controller\Admin;

use App\Entity\Academy;
use App\Form\AcademyType;
use App\Repository\AcademyRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Knp\Component\Pager\PaginatorInterface;

#[Route('/admin/academy', name: "admin_academy_")]
#[IsGranted('ROLE_ADMIN')]
#[IsGranted('IS_AUTHENTICATED_FULLY')]
final class AcademyAdminController extends AbstractController
{
    #[Route('/', name: 'homepage', methods: ['GET'])]
    public function index(AcademyRepository $academyRepository, PaginatorInterface $paginator, Request $request): Response
    {
        $query = $academyRepository->findAll();
        $pagination = $paginator->paginate(
            $query,
            $request->query->getInt('page', 1),
            10
        );
        return $this->render('admin/academy/index.html.twig', [
            'pagination' => $pagination,
        ]);
    }

    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $academy = new Academy();
        $form = $this->createForm(
            AcademyType::class,
            $academy,
            ['is_admin' => true]
        );
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $academy->setCreatedAt(new \DateTimeImmutable());

            $entityManager->persist($academy);
            $entityManager->flush();

            return $this->redirectToRoute('admin_academy_homepage', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('admin/academy/new.html.twig', [
            'academy' => $academy,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'show', methods: ['GET'])]
    public function show(Academy $academy): Response
    {
        return $this->render('admin/academy/show.html.twig', [
            'academy' => $academy,
        ]);
    }

    #[Route('/{id}/edit', name: 'edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Academy $academy, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(
            AcademyType::class,
            $academy,
            ['is_admin' => true]
        );
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('admin_academy_homepage', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('admin/academy/edit.html.twig', [
            'academy' => $academy,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'delete', methods: ['POST'])]
    public function delete(Request $request, Academy $academy, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete' . $academy->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($academy);
            $entityManager->flush();
        }

        return $this->redirectToRoute('admin_academy_homepage', [], Response::HTTP_SEE_OTHER);
    }
}
