<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\EntityManagerInterface;

use App\Entity\BanRequest;
use App\Form\BanRequestType;
use App\Enum\StatusUserEnum;

#[Route('/user', name: "app_user_")]
class UserController extends AbstractController
{
    #[Route('/', name: 'profil')]
    public function myProfil(): Response
    {
        $user = $this->getUser();

        return $this->render('user/index.html.twig', [
            'user' => $user,
        ]);
    }
    #[Route('/edit', name: 'edit')]
    public function myProfilEdit(): Response
    {
        $user = $this->getUser();

        return $this->render('user/edit.html.twig', [
            'user' => $user,
        ]);
    }

    #[Route('/banned', name: 'banned')]
    public function banned(Request $request, EntityManagerInterface $em): Response
    {
        $user = $this->getUser();

        if (!$user) {
            return $this->redirectToRoute('app_login');
        }

        if ($user->getStatus() === StatusUserEnum::BANNED) {
            $banRequest = new BanRequest();
            $banRequest->setUser($user);

            $form = $this->createForm(BanRequestType::class, $banRequest);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $em->persist($banRequest);
                $em->flush();

                $this->addFlash('success', 'Votre demande de débannissement a été envoyée avec succès.');

                return $this->redirectToRoute('app_home');
            }

            return $this->render('user/banned.html.twig', [
                'message' => 'Votre compte a été suspendu. Si vous pensez que c\'est une erreur, veuillez contacter l\'administrateur.',
                'form' => $form->createView(),
            ]);
        }

        return $this->redirectToRoute('app_home');
    }
}
