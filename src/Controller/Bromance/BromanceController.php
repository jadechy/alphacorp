<?php

namespace App\Controller\Bromance;

use App\Entity\User;
use App\Entity\Bromance;
use App\Enum\BromanceRequestStatusEnum;
use App\Enum\BromanceStatusEnum;
use App\Repository\BromanceRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/bromance')]
class BromanceController extends AbstractController
{
    #[Route('/all', name: 'bromance_all', methods: ['GET'])]
    public function allBromance(BromanceRepository $bromanceRepository): Response
    {
        $user = $this->getUser(); 

        $bromances = $bromanceRepository->findBy([
            'alpha' => $user
        ]);
        $bromances = array_merge($bromances, $bromanceRepository->findBy([
            'follower' => $user
        ]));

        return $this->render('bromance/all.html.twig', [
            'bromances' => $bromances,
        ]);
    }

    #[Route('/{id}/request', name: 'bromance_request',  methods: ['POST'])]
    public function requestBromance(int $id, EntityManagerInterface $entityManager, BromanceRepository $bromanceRepository, UserRepository $userRepository): Response
    {
        $alpha = $this->getUser();
        $follower = $userRepository->find($id); 

        if (!$follower) {
            return $this->redirectToRoute('app_home', ['error' => 'Utilisateur non trouvé']);
        }

        if ($alpha === $follower) {
            return $this->redirectToRoute('app_home', ['error' => 'Vous ne pouvez pas faire une demande à vous-même']);
        }

        $existingBromance = $bromanceRepository->findOneBy([
            'alpha' => $alpha,
            'follower' => $follower,
        ]);

        if ($existingBromance) {
            return $this->redirectToRoute('app_home', ['error' => 'Une bromance existe déjà entre ces deux utilisateurs']);
        }

        $bromance = new Bromance();
        /** @var User $alpha */
        $bromance->setAlpha($alpha);
        $bromance->setFollower($follower);
        $bromance->setRequest(BromanceRequestStatusEnum::PENDING);

        $entityManager->persist($bromance);
        $entityManager->flush();

        return $this->redirectToRoute('bromance_request_send', [], Response::HTTP_SEE_OTHER);
    }

    #[Route('/request/send', name: 'bromance_request_send', methods: ['GET'])]
    public function requestSend(BromanceRepository $bromanceRepository): Response
    {
        $user = $this->getUser(); 

        $requestSend = $bromanceRepository->findBy(['alpha' => $user]);

        return $this->render('bromance/request_send.html.twig', [
            'requestSend' => $requestSend,
        ]);
    }

    #[Route('/{id}/reponse', name: 'bromance_reponse', methods: ['POST'])]
    public function reponseDemandeBromance(int $id, Request $request, EntityManagerInterface $entityManager, BromanceRepository $bromanceRepository): Response
    {
        $bromance = $bromanceRepository->find($id); 

        if (!$bromance) {
            return $this->redirectToRoute('home', ['error' => 'Demande de bromance non trouvée']);
        }

        $user = $this->getUser();
        if ($user !== $bromance->getFollower()) {
            return $this->redirectToRoute('home', ['error' => 'Vous ne pouvez pas répondre à cette demande']);
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
            return $this->redirectToRoute('home', ['error' => 'Réponse invalide']);
        }

        $entityManager->flush();

        return $this->redirectToRoute('bromance_request_recieve', [], Response::HTTP_SEE_OTHER);
    }

    #[Route('/request/recieve', name: 'bromance_request_recieve', methods: ['GET'])]
    public function requestRecieve(BromanceRepository $bromanceRepository): Response
    {
        $user = $this->getUser();

        $requestRecieve = $bromanceRepository->findBy(['follower' => $user]);

        return $this->render('bromance/request_recieve.html.twig', [
            'requestRecieve' => $requestRecieve,
        ]);
    }

    #[Route('/bromance/{id}/delete', name: 'bromance_delete', methods: ['POST'])]
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
            return $this->redirectToRoute('bromance_all');
        }

        $entityManager->remove($bromance);
        $entityManager->flush();

        $this->addFlash('success', 'Bromance supprimée.');
        return $this->redirectToRoute('user_profil', ['id' => $id]);
    }

}
