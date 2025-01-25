<?php

namespace App\Controller;

use App\Entity\User;

use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(UserRepository $userRepository): Response
    {
        return $this->render('home/index.html.twig', [
            "isDark" => true
        ]);
    }
    #[Route('/user/{id}', name: 'app_user_show', methods: ['GET'])]
    public function show(): Response
    {
        return $this->render('/user/show.html.twig');
    }

    #[Route('/user/edit/{id}', name: 'app_user_edit', methods: ['GET'])]
    public function edit(): Response
    {
        return $this->render('/user/edit.html.twig');
    }
}
