<?php

namespace App\Entity;

use App\Repository\UserContestRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: UserContestRepository::class)]
#[ORM\Table(name: 'ALP_USER_CONTEST')]
class UserContest
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(name: 'UCT_ID')]
    private int $id;

    #[ORM\ManyToOne(inversedBy: 'userContests')]
    #[ORM\JoinColumn(name: 'CHG_ID', referencedColumnName: 'CHG_ID')]
    private ?Contest $contest = null;

    #[ORM\Column(length: 255, name: 'UCT_ANSWER')]
    private ?string $answer = null;

    #[ORM\Column(name: 'UCT_SUCCESS', nullable: true)]
    private ?bool $success = null;

    #[ORM\ManyToOne(inversedBy: 'userContests')]
    #[ORM\JoinColumn(name: 'USR_ID', referencedColumnName: 'USR_ID')]
    private ?User $user = null;

    public function getId(): int
    {
        return $this->id;
    }

    public function getContest(): ?Contest
    {
        return $this->contest;
    }

    public function setContest(?Contest $contest): static
    {
        $this->contest = $contest;

        return $this;
    }

    public function getAnswer(): ?string
    {
        return $this->answer;
    }

    public function setAnswer(string $answer): static
    {
        $this->answer = $answer;

        return $this;
    }

    public function isSuccess(): ?bool
    {
        return $this->success;
    }

    public function setSuccess(?bool $success): static
    {
        $this->success = $success;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): static
    {
        $this->user = $user;

        return $this;
    }
}
