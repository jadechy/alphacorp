<?php

namespace App\Controller\Forum;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response as HttpResponse;
use Symfony\Component\Routing\Attribute\Route;



#[Route('/forum')]
class ForumController extends AbstractController
{

    #[Route('/', name: 'app_forum', methods: ['GET'])]
    public function search(): HttpResponse
    {


        return $this->render('forum/index.html.twig');
    }
}
