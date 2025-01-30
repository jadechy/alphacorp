<?php

namespace App\Command;

use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Output\OutputInterface;

use Doctrine\ORM\EntityManagerInterface;

use App\Entity\User;
use App\Entity\Bromance;
use App\Repository\BromanceRepository;
use App\Enum\BromanceRequestStatusEnum;
use App\Enum\BromanceStatusEnum;

// the name of the command is what users type after "php bin/console"
#[AsCommand(name: 'app:bromance-status')]
// Met à jours les status des bromances
// Aucun paramètre
class bromanceStatusCommand extends Command
{
    public function __construct(private EntityManagerInterface $entityManager, private BromanceRepository $bromanceRepository){
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->setDescription('Mise à jour des status des bromances.');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $output->writeln('Démarrage de la mise à jour des statuts des bromances...');
        $now = new \DateTime();

        /** @var array<Bromance> */
        $bromances = $this->bromanceRepository->findByRequestStatus(BromanceRequestStatusEnum::ACCEPTED->value);
        
        foreach ($bromances as $bromance) {
            $lastUpdate = $bromance->getLastStatusUpdate() ?? $bromance->getLinkedAt();
            /** @var BromanceStatusEnum $currentStatus */
            $currentStatus = $bromance->getStatus();

            $transitionInterval = $currentStatus->getTransitionInterval();
            $nextTransitionDate = (clone $lastUpdate)->add($transitionInterval);

            if ($now >= $nextTransitionDate) {
                $newStatus = BromanceStatusEnum::getNextStatus($currentStatus);
    
                if ($newStatus !== null) {
                    $bromance->setStatus($newStatus);
                    $bromance->setLastStatusUpdate($now);
    
                    $this->entityManager->persist($bromance);
                    /** @var User $alpha */
                    $alpha = $bromance->getAlpha();
                    /** @var User $follower */
                    $follower = $bromance->getFollower();
                    $output->writeln("Mise à jour de la bromance entre {$alpha->getUsername()} et {$follower->getUsername()} à '{$newStatus->value}'.");
                }
            }
        }

        $this->entityManager->flush();
        $output->writeln('Mise à jour terminée.');

        return Command::SUCCESS;
    }
}