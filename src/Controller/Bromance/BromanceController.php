<?php

namespace App\Controller\Bromance;

use App\Entity\User;
use App\Entity\Bromance;
use App\Entity\User;
use App\Enum\BromanceRequestStatusEnum;
use App\Enum\BromanceStatusEnum;
use App\Repository\BromanceRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/user/bromance', name: "app_bromance_")]
class BromanceController extends AbstractController
{
    #[Route('/', name: 'homepage', methods: ['GET'])]
    public function allBromance(
        BromanceRepository $bromanceRepository
    ): Response {
        $user = $this->getUser();

        $bromancesAlpha = $bromanceRepository->findBy([
            'alpha' => $user,
            "request" => BromanceRequestStatusEnum::ACCEPTED
        ]);
        $bromancesFollower = $bromanceRepository->findBy([
            'follower' => $user,
            "request" => BromanceRequestStatusEnum::PENDING
        ]);

        return $this->render('bromance/index.html.twig', [
            'bromancesAlpha' => $bromancesAlpha,
            'bromancesFollower' => $bromancesFollower,
        ]);
    }

    #[Route('/request/send', name: 'request_send', methods: ['GET'])]
    public function requestSend(BromanceRepository $bromanceRepository): Response
    {
        $user = $this->getUser();

        $requestSend = $bromanceRepository->findBy(['alpha' => $user]);

        return $this->render('bromance/request_send.html.twig', [
            'requestSend' => $requestSend,
        ]);
    }

    // LOGIC
    #[Route('/request/{id}', name: 'request',  methods: ['POST'])]
    public function requestBromance(User $user, EntityManagerInterface $entityManager, BromanceRepository $bromanceRepository, string $id): Response
    {
        $alpha = $this->getUser();
        $follower = $user;

        if (!$follower) {
            $this->addFlash('error', 'Utilisateur non trouvé');
            return $this->redirectToRoute('app_bromance_homepage');
        }

        if ($alpha === $follower) {
            $this->addFlash('error', 'Vous ne pouvez pas faire une demande à vous-même');
            return $this->redirectToRoute('app_bromance_homepage');
        }

        $existingBromance = $bromanceRepository->findOneBy([
            'alpha' => $alpha,
            'follower' => $follower,
        ]);

        if ($existingBromance) {
            $this->addFlash('error', 'Une bromance existe déjà entre ces deux utilisateurs');
            return $this->redirectToRoute('app_bromance_homepage');
        }

        $bromance = new Bromance();
        /** @var User $alpha */
        $bromance->setAlpha($alpha);
        $bromance->setFollower($follower);
        $bromance->setRequest(BromanceRequestStatusEnum::PENDING);

        $entityManager->persist($bromance);
        $entityManager->flush();

        return $this->redirectToRoute('app_user_alpha_show', ["id" => $id], Response::HTTP_SEE_OTHER);
    }


    #[Route('/reponse/{id}', name: 'reponse', methods: ['POST'])]
    public function reponseDemandeBromance(Bromance $bromance, Request $request, EntityManagerInterface $entityManager): Response
    {

        if (!$bromance) {
            $this->addFlash('error', 'Demande de bromance non trouvée');
            return $this->redirectToRoute('app_bromance_homepage');
        }

        $user = $this->getUser();
        if ($user !== $bromance->getFollower()) {
            $this->addFlash('error', 'Vous ne pouvez pas répondre à cette demande');
            return $this->redirectToRoute('app_bromance_homepage');
        }

        $reponse = $request->request->get('reponse');

        if ($reponse === 'accept') {
            $bromance->setRequest(BromanceRequestStatusEnum::ACCEPTED);
            $bromance->setStatus(BromanceStatusEnum::APPROCHE);
            $bromance->setLinkedAt(new \DateTimeImmutable());
        } elseif ($reponse === 'reject') {
            $bromance->setRequest(BromanceRequestStatusEnum::REJECTED);
            $bromance->setStatus(null);
            $bromance->setLinkedAt(null);
        } else {
            $this->addFlash('error', 'Réponse invalide');
            return $this->redirectToRoute('app_bromance_homepage');
        }

        $entityManager->persist($bromance);
        $entityManager->flush();
        $this->addFlash('success', 'Réponse valide');
        return $this->redirectToRoute('app_bromance_homepage', [], Response::HTTP_SEE_OTHER);
    }

    #[Route('/delete/{id}', name: 'delete', methods: ['POST'])]
    public function deleteBromance(int $id, BromanceRepository $bromanceRepository, EntityManagerInterface $entityManager): Response
    {
        $user = $this->getUser();

        $bromance = $bromanceRepository->findOneBy([
            'alpha' => $user,
            'follower' => $id
        ]);

        if (!$bromance) {
            $bromance = $bromanceRepository->findOneBy([
                'alpha' => $id,
                'follower' => $user
            ]);
        }

        if (!$bromance) {
            $this->addFlash('error', 'Bromance non trouvée.');
            return $this->redirectToRoute('app_bromance_homepage');
        }

        $entityManager->remove($bromance);
        $entityManager->flush();

        $this->addFlash('success', 'Bromance supprimée.');
        return $this->redirectToRoute('app_user_alpha_show', ['id' => $id]);
    }
}
