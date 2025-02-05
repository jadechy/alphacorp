<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Http\Attribute\IsGranted;

use App\Entity\User;
use App\Entity\AlphaScream;
use App\Repository\AlphaScreamRepository;

use FFMpeg\FFMpeg;
use FFMpeg\FFProbe;

#[Route('/scream', name: "app_scream_")]
#[IsGranted('ROLE_ALPHA')]
#[IsGranted('IS_AUTHENTICATED_FULLY')]
final class AlphaScreamController extends AbstractController
{
    #[Route('/record', name: 'record')]
    public function record()
    {
        return $this->render('alpha_scream/record.html.twig');
    }

    #[Route('/analyze-audio', name: 'analyze_audio', methods: ['POST'])]
    public function analyzeAudio(Request $request, EntityManagerInterface $entityManager): JsonResponse
    {
        $audioFile = $request->files->get('audio');

        if (!$audioFile) {
            return new JsonResponse(['error' => 'No file received'], 400);
        }

        $uploadsDirectory = $this->getParameter('kernel.project_dir') . '/public/sound';
        
        if (!file_exists($uploadsDirectory)) {
            mkdir($uploadsDirectory, 0777, true);
        }

        $filePath = $uploadsDirectory . '/' . uniqid() . '.wav';
        $audioFile->move(dirname($filePath), basename($filePath));

        $ffprobe = FFProbe::create();

        $command = "ffmpeg -i $filePath -af 'volumedetect' -f null - 2>&1 | grep 'mean_volume'";
        $output = shell_exec($command);

        preg_match('/mean_volume: ([\-0-9\.]+) dB/', $output, $matches);
        $meanVolume = isset($matches[1]) ? (float) $matches[1] : -50;

        $score = max(0, 100 + $meanVolume * 2);

        $scream = new AlphaScream();
        $scream->setScore(round($score));
        $scream->setLevel();
        $scream->setCreatedAt(new \DateTimeImmutable());
        
        /** @var User $user */
        $user = $this->getUser();
        $scream->setAlpha($user);

        $entityManager->persist($scream);
        $entityManager->flush();

        if (file_exists($filePath)) {
            unlink($filePath);
        }

        $level = $scream->getLevel();

        return new JsonResponse(['score' => round($score), 'level' => $level]);
    }

    

    #[Route('/leaderboard', name: 'leaderboard')]
    public function leaderboard(AlphaScreamRepository $alphaScreamRepository)
    {
        $screams = $alphaScreamRepository->findBy([], ['score' => 'DESC'], 10);

        return $this->render('alpha_scream/leaderboard.html.twig', [
            'screams' => $screams
        ]);
    }
}
