<?php

namespace App\Controller\Admin;

use App\Entity\Response;
use App\Enum\ResponseStatusEnum;
use App\Enum\ReportStatusEnum;
use App\Repository\ResponseRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response as HttpResponse;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

#[Route('/admin/response', name: "admin_")]
#[IsGranted('ROLE_ADMIN')]
final class ResponseController extends AbstractController
{

    #[Route('/{id}', name: 'response_show', methods: ['GET'])]
    public function show(Response $response): HttpResponse
    {
        return $this->render('response/show.html.twig', [
            'response' => $response,
        ]);
    }

    #[Route('/{id}/status', name: 'response_change_status', methods: ['POST'])]
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

        return $this->redirectToRoute('app_topic', ['id' => $response->getTopic()->getId()], HttpResponse::HTTP_SEE_OTHER);
    }
}
