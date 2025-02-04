<?php

namespace App\Entity;

use App\Repository\ContestRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ContestRepository::class)]
#[ORM\Table(name: 'ALP_CONTEST')]
class Contest extends Challenge
{
    #[ORM\Column(type: Types::DATETIME_MUTABLE, name: 'CON_START_DATE')]
    private \DateTimeInterface $startOn;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, name: 'CON_END_DATE')]
    private \DateTimeInterface $endOn;

    #[ORM\Column(nullable: true, name: 'CON_XP')]
    private ?int $xp = null;

    /**
     * @var Collection<int, UserContest>
     */
    #[ORM\OneToMany(targetEntity: UserContest::class, mappedBy: 'contest')]
    private Collection $userContests;

    public function __construct()
    {
        parent::__construct();
        $this->userContests = new ArrayCollection();
    }

    public function getStartOn(): \DateTimeInterface
    {
        return $this->startOn;
    }

    public function setStartOn(\DateTimeInterface $startOn): static
    {
        $this->startOn = $startOn;

        return $this;
    }

    public function getEndOn(): \DateTimeInterface
    {
        return $this->endOn;
    }

    public function setEndOn(\DateTimeInterface $endOn): static
    {
        $this->endOn = $endOn;

        return $this;
    }

    public function isInFuture(): bool
    {
        return $this->startOn > new \DateTimeImmutable();
    }

    public function isOngoing(): bool
    {
        $now = new \DateTimeImmutable();
        return $this->startOn <= $now && $this->endOn >= $now;
    }

    public function isFinished(): bool
    {
        return $this->endOn < new \DateTimeImmutable();
    }

    public function getXp(): ?int
    {
        return $this->xp;
    }

    public function setXp(?int $xp): static
    {
        $this->xp = $xp;

        return $this;
    }

    /**
     * @return Collection<int, UserContest>
     */
    public function getUserContests(): Collection
    {
        return $this->userContests;
    }

    public function getUserContestForUser(User $user): ?UserContest
    {
        foreach ($this->userContests as $userContest) {
            if ($userContest->getUser() === $user) {
                return $userContest;
            }
        }
        
        return null;
    }

    public function addUserContest(UserContest $userContest): static
    {
        if (!$this->userContests->contains($userContest)) {
            $this->userContests->add($userContest);
            $userContest->setContest($this);
        }

        return $this;
    }

    public function removeUserContest(UserContest $userContest): static
    {
        if ($this->userContests->removeElement($userContest)) {
            // set the owning side to null (unless already changed)
            if ($userContest->getContest() === $this) {
                $userContest->setContest(null);
            }
        }

        return $this;
    }
}
