<?php

namespace App\Entity;

use App\Repository\BromanceRepository;
use App\Enum\BromanceStatusEnum;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: BromanceRepository::class)]
#[ORM\Table(name: 'ALP_BROMANCE')]
class Bromance
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(name: 'BRO_ID')]
    private int $id;

    #[ORM\Column(name: 'BRO_STATUS', enumType: BromanceStatusEnum::class)]
    private BromanceStatusEnum $status;

    #[ORM\ManyToOne(inversedBy: 'bromancesAlpha')]
    #[ORM\JoinColumn(name:'USR_ID',referencedColumnName:'USR_ID')]
    private ?User $alpha = null;

    #[ORM\ManyToOne(inversedBy: 'bromancesFollower')]
    #[ORM\JoinColumn(name:'USR_ID',referencedColumnName:'USR_ID')]
    private ?User $follower = null;

    public function getId(): int
    {
        return $this->id;
    }

    public function getStatus(): BromanceStatusEnum
    {
        return $this->status;
    }

    public function setStatus(BromanceStatusEnum $status): static
    {
        $this->status = $status;

        return $this;
    }

    public function getAlpha(): ?User
    {
        return $this->alpha;
    }

    public function setAlpha(?User $alpha): static
    {
        $this->alpha = $alpha;

        return $this;
    }

    public function getFollower(): ?User
    {
        return $this->follower;
    }

    public function setFollower(?User $follower): static
    {
        $this->follower = $follower;

        return $this;
    }
}
