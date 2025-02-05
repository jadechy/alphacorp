<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\Academy;
use App\Repository\AcademyRepository;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/academy', name: "app_academy_")]
#[IsGranted('ROLE_ALPHA')]
#[IsGranted('IS_AUTHENTICATED_FULLY')]
class AcademyController extends AbstractController
{
    public function __construct(private string $stripePublicKey) {}

    #[Route('/', name: 'homepage')]
    public function allAcademy(AcademyRepository $academyRepository): Response
    {
        $academies = $academyRepository->findAll();

        return $this->render('academy/index.html.twig', [
            'academies' => $academies,
        ]);
    }

    #[Route('/{id}', name: 'show')]
    public function singleAcademy(Academy $academy, AcademyRepository $academyRepository): Response
    {
        /** @var User $user */
        $user = $this->getUser();

        $hasAccess = $user && $user->getAcademies()->contains($academy);

        return $this->render('academy/show.twig', [
            'academy' => $academy,
            'hasAccess' => $hasAccess,
            'stripe_public_key' => $this->stripePublicKey,
        ]);
    }
}
