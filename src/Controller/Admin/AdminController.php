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

#[Route('/admin')]
#[IsGranted('ROLE_ADMIN')]
class AdminController extends AbstractController
{
    #[Route(path: '/', name: 'app_admin_homepage')]
    public function admin(): Response
    {
        return $this->render('admin/admin.html.twig');
    }

    #[Route('/category', name: 'admin_category')]
    public function adminCatgories(CategoryRepository $categoryRepository): Response
    {
        return $this->render('admin/category.html.twig', [
            'categories' => $categoryRepository->findAll(),
        ]);
    }

    #[Route('/language', name: 'admin_language')]
    public function adminLanguages(LanguageRepository $languageRepository): Response
    {
        return $this->render('admin/language.html.twig', [
            'languages' => $languageRepository->findAll(),
        ]);
    }

    #[Route('/user', name: 'admin_user')]
    public function adminUsers(UserRepository $userRepository): Response
    {
        return $this->render('admin/user.html.twig', [
            'users' => $userRepository->findAll(),
        ]);
    }

    #[Route('/response', name: 'admin_response')]
    public function adminResponse(ResponseRepository $responseRepository): Response
    {
        $statuses = [];

        $responses = $responseRepository->findAll();

        foreach ($responses as $response){
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

    #[Route('/topic', name: 'admin_topic')]
    public function adminTopic(TopicRepository $topicRepository): Response
    {
        $languages = [];
        $categories = [];
        $statuses = [];

        $topics = $topicRepository->findAll();

        foreach ($topics as $topic) {
            $language = $topic->getLanguage();
            
            if ($language && !in_array($language, $languages, true)) {
                $languages[] = $language;
            }

            $category = $topic->getCategory();
            
            if ($category && !in_array($category, $categories, true)) {
                $categories[] = $category;
            }

            $status = $topic->getStatus();
            
            if ($status && !in_array($status, $statuses, true)) {
                $statuses[] = $status;
            }
        }

        return $this->render('admin/topic.html.twig', [
            'topics' => $topics,
            'languages' => $languages,
            'categories' => $categories,
            'statuses' => $statuses
        ]);
    }

    #[Route('/banrequest', name: 'admin_banrequest')]
    public function adminBanRequest(BanRequestRepository $banRequestRepository): Response
    {
        return $this->render('admin/ban_request.html.twig', [
            'banRequests' => $banRequestRepository->findAll(),
        ]);
    }
}
