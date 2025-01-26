<?php

namespace App\Controller\Admin;

use App\Entity\Response;
use App\Enum\ResponseStatusEnum;
use App\Form\ResponseType;
use App\Repository\ResponseRepository;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\Paginator;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response as HttpResponse;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;


#[Route('/admin/response', name: "admin_response_")]
#[IsGranted('ROLE_ADMIN')]
final class ResponseAdminController extends AbstractController
{
    #[Route('/', name: 'homepage')]
    public function adminResponse(ResponseRepository $responseRepository, PaginatorInterface $paginator, Request $request): HttpResponse
    {
        $statuses = [];

        $query = $responseRepository->findAll();
        $pagination = $paginator->paginate(
            $query,
            $request->query->getInt('page', 1),
            10
        );
        foreach ($query as $response) {
            $status = $response->getStatus();

            if ($status && !in_array($status, $statuses, true)) {
                $statuses[] = $status;
            }
        }

        return $this->render('admin/response/index.html.twig', [
            'pagination' => $pagination,
            'statuses' => $statuses
        ]);
    }
    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): HttpResponse
    {
        $response = new Response();
        $form = $this->createForm(ResponseType::class, $response);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($response);
            $entityManager->flush();

            return $this->redirectToRoute('admin_response_homepage', [], HttpResponse::HTTP_SEE_OTHER);
        }

        return $this->render('admin/responsr/new.html.twig', [
            'response' => $response,
            'form' => $form,
        ]);
    }
    #[Route('/{id}', name: 'show', methods: ['GET'])]
    public function show(Response $response): HttpResponse
    {
        return $this->render('admin/response/show.html.twig', [
            'response' => $response,
        ]);
    }
    #[Route('/edit/{id}', name: 'edit', methods: ['GET', 'POST'])]
    public function editTopic(Request $request, Response $response, EntityManagerInterface $entityManager): HttpResponse
    {
        $form = $this->createForm(ResponseType::class, $response);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('admin_response_homepage', [], HttpResponse::HTTP_SEE_OTHER);
        }

        return $this->render('admin/response/edit.html.twig', [
            'response' => $response,
            'form' => $form,
        ]);
    }
    #[Route('/{id}/status', name: 'change_status', methods: ['POST'])]
    public function changeStatus(Response $response, Request $request, EntityManagerInterface $entityManager): HttpResponse
    {
        $status = $request->request->get('status');

        if (!in_array($status, array_map(fn($enum) => $enum->value, ResponseStatusEnum::cases()), true)) {
            throw $this->createNotFoundException('Statut non valide');
        }

        $response->setStatus(ResponseStatusEnum::from($status));

        $referer = $request->headers->get('referer');

        $entityManager->persist($response);
        $entityManager->flush();


        if ($referer && str_contains($referer, $this->generateUrl('admin_response'))) {
            return $this->redirectToRoute('admin_response', [], HttpResponse::HTTP_SEE_OTHER);
        }

        if ($referer && str_contains($referer, $this->generateUrl('app_report_show', ['id' => $report->getId()]))) {
            return $this->redirectToRoute('admin_report', [], HttpResponse::HTTP_SEE_OTHER);
        }

        return $this->redirectToRoute('admin_response_show', ['id' => $response->getTopic()->getId()], HttpResponse::HTTP_SEE_OTHER);
    }
    #[Route('/{id}', name: 'delete', methods: ['POST'])]
    public function delete(Request $request, Response $response, EntityManagerInterface $entityManager): HttpResponse
    {
        if ($this->isCsrfTokenValid('delete' . $response->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($response);
            $entityManager->flush();
        }

        return $this->redirectToRoute('admin_category_homepage', [], HttpResponse::HTTP_SEE_OTHER);
    }
}
