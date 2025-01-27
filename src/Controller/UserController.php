<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\EntityManagerInterface;

use App\Entity\BanRequest;
use App\Form\BanRequestType;
use App\Enum\StatusUserEnum;
use App\Form\UserEditType;
use App\Repository\UserRepository;
use App\Repository\BromanceRepository;
use App\Repository\EventRepository;
use App\Entity\Event;

#[Route('/user', name: "app_user_")]
class UserController extends AbstractController
{
    #[Route('/', name: 'homepage')]
    public function myProfil(): Response
    {
        $user = $this->getUser();

        return $this->render('user/profil.html.twig', [
            'user' => $user,
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
                $user->setRoles(['ROLE_ALPHA']);
            } elseif ($gender === 'female') {
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

    #[Route('/profil/{id}', name: 'profil_show')]
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

        return $this->render('user/profil/show.html.twig', [
            'user' => $user,
            'bromance_exists' => $bromance_exists
        ]);
    }

    #[Route('/profil/alpha', name: 'profil_homepage')]
    public function allAlphaUserProfil(UserRepository $userRepository): Response
    {
        $users = $userRepository->findAll();

        $alphas = [];
        foreach ($users as $user) {
            if (in_array('ROLE_ALPHA', $user->getRoles()) && $user->getStatus() == StatusUserEnum::ACTIVE) {
                array_push($alphas, $user);
            }
        }

        return $this->render('user/profil/index.html.twig', [
            'alphas' => $alphas,
        ]);
    }

    #[Route('/profil/search', name: 'search', methods: ['GET'])]
    public function searchAlphaUser(Request $request, UserRepository $userRepository): Response
    {
        $keyword = $request->query->get('q', '');
        $users = [];

        if ($keyword) {
            $users = $userRepository->searchByKeyword($keyword);
        }

        return $this->render('user/profil/search/search.html.twig', [
            'users' => $users,
            'keyword' => $keyword,
        ]);
    }


    #[Route('/banned', name: 'banned')]
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
