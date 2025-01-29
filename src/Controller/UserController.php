<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\EntityManagerInterface;

use App\Entity\User;
use App\Entity\Event;
use App\Entity\BanRequest;
use App\Form\BanRequestType;
use App\Enum\StatusUserEnum;
use App\Form\UserEditType;
use App\Repository\UserRepository;
use App\Repository\BromanceRepository;
use App\Repository\RankRepository;

#[Route('/user', name: "app_user_")]
class UserController extends AbstractController
{
    #[Route('/', name: 'homepage')]
    public function myProfil(RankRepository $rankRepository): Response
    {
        $user = $this->getUser();
        $userXp = $user->getXp();
        if ($userXp) {
            $currentRank = $rankRepository->findCurrentRank($userXp);
            $nextRank = $rankRepository->findNextRank($userXp);
        }

        $pourcentage =  (($userXp - $currentRank->getMinimum()) / ($nextRank->getMinimum() - $currentRank->getMinimum())) * 100;
        return $this->render('user/profil.html.twig', [
            'user' => $user,
            "currentRank" => $currentRank,
            "nextRank" => $nextRank,
            "pourcentage" => $pourcentage
        ]);
    }
    #[Route('/edit', name: 'edit')]
    public function myProfilEdit(Request $request, EntityManagerInterface $entityManager): Response
    {
        $user = $this->getUser();
        $form = $this->createForm(UserEditType::class, $user);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $gender = $form->get('gender')->getData();
            if ($gender === 'male') {
                /** @var User $user */
                $user->setRoles(['ROLE_ALPHA']);
            } elseif ($gender === 'female') {
                /** @var User $user */
                $user->setRoles(['ROLE_SUPERVISOR']);
            }
            $entityManager->flush();
            return $this->redirectToRoute('app_user_homepage', [], Response::HTTP_SEE_OTHER);
        }
        return $this->render('user/edit.html.twig', [
            'user' => $user,
            "form" => $form->createView(),
        ]);
    }

    #[Route('/alpha/{id}', name: 'alpha_show')]
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

        return $this->render('user/alpha/show.html.twig', [
            'user' => $user,
            'bromance_exists' => $bromance_exists
        ]);
    }



    #[Route('/alpha', name: 'alpha_homepage', methods: ['GET'])]
    public function searchAlphaUser(Request $request, UserRepository $userRepository, EntityManagerInterface $entityManager): Response
    {
        $keyword = $request->query->get('q', '');
        $users = [];

        $users = $keyword ? $userRepository->searchAlphaByKeyword($keyword, $entityManager) : $userRepository->findAll();
        return $this->render('user/alpha/index.html.twig', [
            'users' => $users,
            'keyword' => $keyword,
        ]);
    }


    #[Route('/banned', name: 'banned')]
    public function banned(Request $request, EntityManagerInterface $em): Response
    {
        $user = $this->getUser();

        if (!$user) {
            return $this->redirectToRoute('app_user_login');
        }

        /** @var User $user */
        if ($user->getStatus() === StatusUserEnum::BANNED) {
            $banRequest = new BanRequest();
            $banRequest->setUser($user);

            $form = $this->createForm(BanRequestType::class, $banRequest);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $em->persist($banRequest);
                $em->flush();

                $this->addFlash('success', 'Votre demande de débannissement a été envoyée avec succès.');

                return $this->redirectToRoute('app_user_homepage');
            }

            return $this->render('user/banned.html.twig', [
                'message' => 'Votre compte a été suspendu. Si vous pensez que c\'est une erreur, veuillez contacter l\'administrateur.',
                'form' => $form->createView(),
            ]);
        }

        return $this->redirectToRoute('app_user_homepage');
    }
}
