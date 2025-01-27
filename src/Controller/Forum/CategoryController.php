<?php

namespace App\Controller\Forum;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

use App\Repository\CategoryRepository;
use App\Entity\Category;

#[Route('/forum')]
class CategoryController extends AbstractController
{
    // #[Route('/category/{id}', name: 'app_category')]
    // public function categoryTopics(CategoryRepository $categoryRepository, Category $category): Response
    // {
    //     $categories = $categoryRepository->findAll();

    //     return $this->render('forum/category/category.html.twig', [
    //         'categoryChose' => $category,
    //         'categories' => $categories
    //     ]);
    // }
}
