<?php

namespace App\Controller\Admin;

use App\Entity\User;
use App\Entity\BanRequest;
use App\Entity\Topic;
use App\Entity\Response;
use App\Enum\StatusUserEnum;
use App\Form\UserType;
use App\Form\UserEditType;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response as HttpResponse;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

#[Route('/user')]
#[IsGranted('ROLE_ADMIN')]
final class UserController extends AbstractController
{
    #[Route('/new', name: 'app_user_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager, UserPasswordHasherInterface $passwordHasher): HttpResponse
    {
        $user = new User();
        $form = $this->createForm(UserType::class, $user,[
            'is_admin' => $this->isGranted('ROLE_ADMIN'),
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $gender = $form->get('gender')->getData();
            if ($gender === 'male') {
                $user->setRoles(['ROLE_ALPHA']);
            } elseif ($gender === 'female') {
                $user->setRoles(['ROLE_SUPERVISOR']);
            }

            if ($form->get('isAdmin')->getData()) {
                $user->setRoles(['ROLE_ADMIN']);
            }

            $user->setStatus(StatusUserEnum::ACTIVE);

            $user->setPlainPassword($form->get('plainPassword')->getData());

            $entityManager->persist($user);
            $entityManager->flush();

            return $this->redirectToRoute('admin_user', [], HttpResponse::HTTP_SEE_OTHER);
        }

        return $this->render('user/admin/new.html.twig', [
            'user' => $user,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_user_show', methods: ['GET'])]
    public function show(User $user): HttpResponse
    {
        return $this->render('user/admin/show.html.twig', [
            'user' => $user,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_user_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, User $user, EntityManagerInterface $entityManager): HttpResponse
    {
        $form = $this->createForm(UserEditType::class, $user, [
            'is_admin' => $this->isGranted('ROLE_ADMIN'),
        ]);
    
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $gender = $form->get('gender')->getData();
            if ($gender === 'male') {
                $user->setRoles(['ROLE_ALPHA']);
            } elseif ($gender === 'female') {
                $user->setRoles(['ROLE_SUPERVISOR']);
            }

            if($this->isGranted('ROLE_ADMIN')){
                if ($form->get('isAdmin')->getData()) {
                    $user->setRoles(['ROLE_ADMIN']);
                }
            }
        
            $entityManager->flush();

            if($this->isGranted('ROLE_ADMIN')){
                return $this->redirectToRoute('admin_user', [], HttpResponse::HTTP_SEE_OTHER);
            }else{
                return $this->redirectToRoute('app_user_profil', [], HttpResponse::HTTP_SEE_OTHER);
            }
        }

        return $this->render('user/admin/edit.html.twig', [
            'user' => $user,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_user_delete', methods: ['POST'])]
    public function delete(Request $request, User $user, EntityManagerInterface $entityManager): HttpResponse
    {
        if ($this->isCsrfTokenValid('delete'.$user->getId(), $request->getPayload()->getString('_token'))) {
            $topics = $entityManager->getRepository(Topic::class)->findBy(['author' => $user]);
            foreach ($topics as $topic) {
                $responses = $entityManager->getRepository(Response::class)->findBy(['topic' => $topic]);
                foreach ($responses as $response) {
                    $entityManager->remove($response);
                }

                $entityManager->remove($topic);
            }

            $responses = $entityManager->getRepository(Response::class)->findBy(['author' => $user]);
            foreach ($responses as $response) {
                $entityManager->remove($response);
            }

            $banRequests = $entityManager->getRepository(BanRequest::class)->findBy(['user' => $user]);
            foreach ($banRequests as $banRequest) {
                $entityManager->remove($banRequest);
            }

            $entityManager->remove($user);
            $entityManager->flush();
        }

        return $this->redirectToRoute('admin_user', [], HttpResponse::HTTP_SEE_OTHER);
    }

    #[Route('/ban/{id}', name: 'app_user_ban')]
    public function banUser(int $id, EntityManagerInterface $entityManager): HttpResponse
    {
        $user = $entityManager->getRepository(User::class)->find($id);

        if (!$user) {
            $this->addFlash('error', 'Utilisateur introuvable.');
            return $this->redirectToRoute('admin_user');
        }

        $status = $user->getStatus();
        if ($status !== StatusUserEnum::BANNED) {
            $user->setStatus(StatusUserEnum::BANNED);

            $entityManager->flush();

            $this->addFlash('success', 'Utilisateur banni avec succès.');
        } else {
            $this->addFlash('info', 'Cet utilisateur est déjà banni.');
        }

        return $this->redirectToRoute('admin_user', [], HttpResponse::HTTP_SEE_OTHER);
    }

    #[Route('/deban/{id}', name: 'app_user_deban')]
    public function debanUser(int $id, EntityManagerInterface $entityManager): HttpResponse
    {
        $user = $entityManager->getRepository(User::class)->find($id);

        if (!$user) {
            $this->addFlash('error', 'Utilisateur introuvable.');
            return $this->redirectToRoute('admin_user');
        }

        if ($user->getStatus() === StatusUserEnum::BANNED) {
            $user->setStatus(StatusUserEnum::ACTIVE);

            $banRequest = $entityManager->getRepository(BanRequest::class)->findOneBy(['user' => $user]);

            if ($banRequest) {
                $entityManager->remove($banRequest);
            }

            $entityManager->flush();

            $this->addFlash('success', 'Utilisateur débanni avec succès.');
        } else {
            $this->addFlash('info', 'Cet utilisateur n\'est pas banni.');
        }

        return $this->redirectToRoute('admin_banrequest', [], HttpResponse::HTTP_SEE_OTHER);
    }
}
