<?php

namespace App\Controller\Forum;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

use App\Repository\CategoryRepository;
use App\Entity\Category;

class CategoryController extends AbstractController
{
    #[Route('/category', name: 'app_category')]
    public function category(CategoryRepository $categoryRepository): Response
    {
        return $this->render('category/all.html.twig', [
            'categories' => $categoryRepository->findAll(),
        ]);
    }

    #[Route('/category/{id}', name: 'app_category_topics')]
    public function categoryTopics(string $id, CategoryRepository $categoryRepository, Category $category): Response
    {
        $categories = $categoryRepository->findAll();

        return $this->render('category/category.html.twig', [
            'categoryChose' => $category,
            'categories' => $categories
        ]);
    }
}
