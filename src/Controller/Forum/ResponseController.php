<?php

namespace App\Controller\Forum;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response as HttpResponse;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\EntityManagerInterface;

use App\Entity\Response;
use App\Enum\ResponseStatusEnum;
use App\Entity\Report;
use App\Form\ReportType;
use App\Enum\ReportStatusEnum;

class ResponseController extends AbstractController
{
    #[Route('/response/delete/{id}', name: 'app_response_delete', methods: ['POST'])]
    public function delete(Request $request, Response $response, EntityManagerInterface $entityManager): HttpResponse
    {
        $status = $request->request->get('status');

        if (!in_array($status, array_map(fn($enum) => $enum->value, ResponseStatusEnum::cases()), true)) {
            throw $this->createNotFoundException('Statut non valide');
        }       

        $response->setStatus(ResponseStatusEnum::from($status));

        $entityManager->flush();

        return $this->redirectToRoute('app_topic', ['id' => $response->getTopic()->getId()], HttpResponse::HTTP_SEE_OTHER);
    }
}
