<?php

namespace App\Service;

use App\Repository\CategoryRepository;

class CategoryColorService
{

    public function __construct(private CategoryRepository $categoryRepository)
    {

    }

    /** @return array<string> */
    public function getCategoryColors(): array
    {
        $categories = $this->categoryRepository->findAll();
        $colors = ["bg-blue-800", "bg-lime-800", "bg-red-800", "bg-amber-800", "bg-yellow-800",  "bg-teal-800", "bg-orange-800"];
        $colorsCategories = [];

        foreach ($categories as $i => $category) {
            $colorsCategories[$category->getId()] = $colors[$i % count($colors)];
        }

        return $colorsCategories;
    }
}
