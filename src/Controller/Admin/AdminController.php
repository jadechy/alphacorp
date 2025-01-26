<?php

namespace App\Controller\Admin;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

use App\Repository\CategoryRepository;
use App\Repository\LanguageRepository;
use App\Repository\UserRepository;
use App\Repository\ResponseRepository;
use App\Repository\TopicRepository;
use App\Repository\BanRequestRepository;

#[Route('/admin', name: "admin_")]
#[IsGranted('ROLE_ADMIN')]
class AdminController extends AbstractController
{
    #[Route(path: '/', name: 'homepage')]
    public function admin(): Response
    {

        return $this->render('admin/admin.html.twig');
    }

    #[Route('/category', name: 'category')]
    public function adminCatgories(CategoryRepository $categoryRepository): Response
    {
        return $this->render('admin/category.html.twig', [
            'categories' => $categoryRepository->findAll(),
        ]);
    }

    #[Route('/language', name: 'language')]
    public function adminLanguages(LanguageRepository $languageRepository): Response
    {
        return $this->render('admin/language.html.twig', [
            'languages' => $languageRepository->findAll(),
        ]);
    }

    #[Route('/user', name: 'user')]
    public function adminUsers(UserRepository $userRepository): Response
    {
        return $this->render('admin/user.html.twig', [
            'users' => $userRepository->findAll(),
        ]);
    }

    #[Route('/response', name: 'response')]
    public function adminResponse(ResponseRepository $responseRepository): Response
    {
        $statuses = [];

        $responses = $responseRepository->findAll();

        foreach ($responses as $response) {
            $status = $response->getStatus();

            if ($status && !in_array($status, $statuses, true)) {
                $statuses[] = $status;
            }
        }

        return $this->render('admin/response.html.twig', [
            'responses' => $responses,
            'statuses' => $statuses
        ]);
    }



    #[Route('/banrequest', name: 'banrequest')]
    public function adminBanRequest(BanRequestRepository $banRequestRepository): Response
    {
        return $this->render('admin/ban_request.html.twig', [
            'banRequests' => $banRequestRepository->findAll(),
        ]);
    }
}
