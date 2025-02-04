<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\Academy;
use App\Service\StripeService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;

#[Route('/payment', name: "app_payment_")]
class PaymentController extends AbstractController
{
    #[Route('/{id}', name: 'checkout')]
    public function checkout(Academy $academy, StripeService $stripeService): JsonResponse
    {
        if ($academy->getPrice() == 0) {
            return new JsonResponse(['error' => 'Cette formation est gratuite'], 400);
        }

        $session = $stripeService->createCheckoutSession($academy);

        return $this->json(['id' => $session->id]);
    }

    #[Route('/success/{id}', name: 'success')]
    public function success(Academy $academy, EntityManagerInterface $entityManager): Response
    {
        /** @var User $user */
        $user = $this->getUser();

        if (!$user->getAcademies()->contains($academy)) {
            $user->addAcademy($academy);
            $entityManager->persist($user);
            $entityManager->flush();
        }

        return $this->render('payment/success.html.twig', [
            'academy' => $academy,
        ]);
    }

    #[Route('/cancel/{id}', name: 'cancel')]
    public function cancel(Academy $academy): Response
    {
        return $this->render('payment/cancel.html.twig', [
            'academy' => $academy,
        ]);
    }
}

