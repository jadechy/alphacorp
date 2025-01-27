<?php

namespace App\Entity;

use App\Repository\BromanceRepository;
use App\Enum\BromanceStatusEnum;
use App\Enum\BromanceRequestStatusEnum;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: BromanceRepository::class)]
#[ORM\Table(name: 'ALP_BROMANCE')]
class Bromance
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(name: 'BRO_ID')]
    private int $id;

    #[ORM\Column(name: 'BRO_STATUS_REQUEST', enumType: BromanceRequestStatusEnum::class)]
    private BromanceRequestStatusEnum $request;

    #[ORM\Column(name: 'BRO_STATUS', enumType: BromanceStatusEnum::class, nullable:true)]
    private ?BromanceStatusEnum $status = null;

    #[ORM\ManyToOne(inversedBy: 'bromancesAlpha')]
    #[ORM\JoinColumn(name:'USR_ID_ALPHA',referencedColumnName:'USR_ID')]
    private ?User $alpha = null;

    #[ORM\ManyToOne(inversedBy: 'bromancesFollower')]
    #[ORM\JoinColumn(name:'USR_ID_FOLLOWER',referencedColumnName:'USR_ID')]
    private ?User $follower = null;

    #[ORM\Column(nullable: true, name: 'BRO_LINK_DATE')]
    private ?\DateTimeImmutable $linkedAt = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true, name: 'BRO_LAST_STATUS_UPDATE')]
    private ?\DateTimeInterface $lastStatusUpdate = null;

    public function getId(): int
    {
        return $this->id;
    }

    public function getRequest(): BromanceRequestStatusEnum
    {
        return $this->request;
    }

    public function setRequest(BromanceRequestStatusEnum $request): static
    {
        $this->request = $request;

        return $this;
    }

    public function getStatus(): ?BromanceStatusEnum
    {
        return $this->status;
    }

    public function setStatus(?BromanceStatusEnum $status): static
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

    public function getLinkedAt(): ?\DateTimeImmutable
    {
        return $this->linkedAt;
    }

    public function setLinkedAt(?\DateTimeImmutable $linkedAt): static
    {
        $this->linkedAt = $linkedAt;

        return $this;
    }

    public function getLastStatusUpdate(): ?\DateTimeInterface
    {
        return $this->lastStatusUpdate;
    }

    public function setLastStatusUpdate(?\DateTimeInterface $lastStatusUpdate): static
    {
        $this->lastStatusUpdate = $lastStatusUpdate;

        return $this;
    }
}
