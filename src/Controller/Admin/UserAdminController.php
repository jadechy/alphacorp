<?php

namespace App\Controller\Admin;

use App\Entity\User;
use App\Entity\BanRequest;
use App\Entity\Topic;
use App\Entity\Response;
use App\Enum\StatusUserEnum;
use App\Form\Admin\UserAdminType;
use App\Form\RegistrationType;
use App\Form\UserEditType;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response as HttpResponse;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;


#[Route('/admin/user', name: "admin_user_")]
#[IsGranted('ROLE_ADMIN')]
#[IsGranted('IS_AUTHENTICATED_FULLY')]
final class UserAdminController extends AbstractController
{
    #[Route('/', name: 'homepage')]
    public function adminUsers(UserRepository $userRepository, PaginatorInterface $paginator, Request $request): HttpResponse
    {
        $query = $userRepository->findAll();

        $pagination = $paginator->paginate(
            $query,
            $request->query->getInt('page', 1),
            10
        );
        return $this->render('admin/user/index.html.twig', [
            'pagination' => $pagination,
        ]);
    }
    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): HttpResponse
    {
        $user = new User();
        $form = $this->createForm(RegistrationType::class, $user, [
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

            /** @var string $plainPassword */
            $plainPassword = $form->get('plainPassword')->getData();
            $user->setPlainPassword($plainPassword);

            $entityManager->persist($user);
            $entityManager->flush();

            return $this->redirectToRoute('admin_user_homepage', [], HttpResponse::HTTP_SEE_OTHER);
        }

        return $this->render('/admin/user/new.html.twig', [
            'user' => $user,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'show', methods: ['GET'])]
    public function show(User $user): HttpResponse
    {
        return $this->render('/admin/user/show.html.twig', [
            'user' => $user,
        ]);
    }

    #[Route('/{id}/edit', name: 'edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, User $user, EntityManagerInterface $entityManager): HttpResponse
    {
        $form = $this->createForm(UserAdminType::class, $user, []);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();
            return $this->redirectToRoute('admin_user_homepage', [], HttpResponse::HTTP_SEE_OTHER);
        }

        return $this->render('/admin/user/edit.html.twig', [
            'user' => $user,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'delete', methods: ['POST'])]
    public function delete(Request $request, User $user, EntityManagerInterface $entityManager): HttpResponse
    {
        if ($this->isCsrfTokenValid('delete' . $user->getId(), $request->getPayload()->getString('_token'))) {
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

    #[Route('/ban/{id}', name: 'ban')]
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

    #[Route('/deban/{id}', name: 'deban')]
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
