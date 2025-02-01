<?php

namespace App\Controller;

use App\Repository\RankRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/rank', name: 'app_rank_')]
class RankController extends AbstractController
{
    #[Route('/', name: 'homepage')]
    public function indexRank(RankRepository $rankRepository): Response
    {
        $ranks = $rankRepository->findAll();
        return $this->render('rank/index.html.twig', [
            "ranks" => $ranks
        ]);
    }
}
