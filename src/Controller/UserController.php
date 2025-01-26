<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Doctrine\ORM\EntityManagerInterface;

use App\Entity\BanRequest;
use App\Form\BanRequestType;
use App\Enum\StatusUserEnum;

use App\Repository\UserRepository;
use App\Repository\BromanceRepository;
use App\Repository\EventRepository;
use App\Entity\Event;

class UserController extends AbstractController
{
    #[Route('/profil', name: 'app_user_profil')]
    public function myProfil(): Response
    {
        $user = $this->getUser();

        return $this->render('user/profil.html.twig', [
            'user' => $user,
        ]);
    }

    #[Route('/profil/{id}/single', name: 'user_profil')]
    public function userProfil(int $id, UserRepository $userRepository, BromanceRepository $bromanceRepository): Response
    {
        $user = $userRepository->findOneBy(['id' => $id]);

        $bromance_exists = false;
    
        if ($this->getUser()) {
            $bromance_exists = $bromanceRepository->findOneBy([
                'alpha' => $this->getUser(),
                'follower' => $user
            ]) !== null;
            
            if (!$bromance_exists) {
                $bromance_exists = $bromanceRepository->findOneBy([
                    'alpha' => $user,
                    'follower' => $this->getUser()
                ]) !== null;
            }
        }

        return $this->render('user/user_profil.html.twig', [
            'user' => $user,
            'bromance_exists' => $bromance_exists
        ]);
    }

    #[Route('/profil/all', name: 'user_profil_all')]
    public function allAlphaUserProfil(UserRepository $userRepository): Response
    {
        $users = $userRepository->findAll();

        $alphas = [];
        foreach ($users as $user){
            if (in_array('ROLE_ALPHA', $user->getRoles()) && $user->getStatus() == StatusUserEnum::ACTIVE){
                array_push($alphas, $user);
            }
        }

        return $this->render('user/all.html.twig', [
            'alphas' => $alphas,
        ]);
    }

    #[Route('/profil/search', name: 'user_search', methods: ['GET'])]
    public function searchAlphaUser(Request $request, UserRepository $userRepository): Response
    {
        $keyword = $request->query->get('q', '');
        $users = [];

        if ($keyword) {
            $users = $userRepository->searchByKeyword($keyword);
        }

        return $this->render('user/search/search.html.twig', [
            'users' => $users,
            'keyword' => $keyword,
        ]);
    }

    #[Route('/banned', name: 'app_user_banned')]
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
