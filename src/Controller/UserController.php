<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\EntityManagerInterface;

use App\Entity\User;
use App\Entity\BanRequest;
use App\Entity\Rank;
use App\Form\BanRequestType;
use App\Enum\StatusUserEnum;
use App\Form\UserEditType;
use App\Repository\BromanceRepository;
use App\Repository\RankRepository;
use App\Repository\UserRepository;
use App\Service\CategoryColorService;

#[Route('/user', name: "app_user_")]
class UserController extends AbstractController
{
    #[Route('/show/{id}', name: 'show')]
    public function myProfil(User $user, RankRepository $rankRepository, CategoryColorService $categoryColorService, BromanceRepository $bromanceRepository): Response
    {
        $currentRank = new Rank();
        $nextRank = new Rank();
        $pourcentage = 0;
        $userXp = $user->getXp();
        if ($userXp != null) {
            $currentRank = $rankRepository->findCurrentRank($userXp);
            $nextRank = $rankRepository->findNextRank($userXp);
            if ($currentRank && $nextRank) {
                $pourcentage =  (($userXp - $currentRank->getMinimum()) / ($nextRank->getMinimum() - $currentRank->getMinimum())) * 100;
            } else {
                $pourcentage = 100;
            }
        }
        $colorsCategories = $categoryColorService->getCategoryColors();

        if ($this->getUser() != $user) {
            $bromance_user = $bromanceRepository->findOneBy([
                'alpha' => $this->getUser(),
                'follower' => $user
            ]);

            if (!$bromance_user) {
                $bromance_user = $bromanceRepository->findOneBy([
                    'alpha' => $user,
                    'follower' => $this->getUser()
                ]);
            }
        } else {
            $bromance_user = [];
        }
        return $this->render('user/show.html.twig', [
            'user' => $user,
            "currentRank" => $currentRank,
            "nextRank" => $nextRank,
            "pourcentage" => $pourcentage,
            "colorsCategories" => $colorsCategories,
            "bromance_user" => $bromance_user
        ]);
    }
    #[Route('/edit', name: 'edit')]
    public function myProfilEdit(Request $request, EntityManagerInterface $entityManager): Response
    {
        /** @var User $user */
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
            return $this->redirectToRoute('app_user_show', ["id" => $user->getId()], Response::HTTP_SEE_OTHER);
        }
        return $this->render('user/edit.html.twig', [
            'user' => $user,
            "form" => $form->createView(),
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

                return $this->redirectToRoute('app_user_show');
            }

            return $this->render('user/banned.html.twig', [
                'message' => 'Votre compte a été suspendu. Si vous pensez que c\'est une erreur, veuillez contacter l\'administrateur.',
                'form' => $form->createView(),
            ]);
        }

        return $this->redirectToRoute('app_user_show');
    }

    #[Route('/alpha', name: 'alpha')]
    public function searchAlphaUser(Request $request, UserRepository $userRepository, EntityManagerInterface $entityManager): Response
    {
        $keyword = $request->query->get('q', '');
        $users = [];
        $users = strlen($keyword) > 1 ? $userRepository->searchAlphaByKeyword($keyword, $entityManager) : $userRepository->findAllAlpha();
        return $this->render('user/alpha_search.html.twig', [
            'users' => $users,
            'keyword' => $keyword,
        ]);
    }
}
