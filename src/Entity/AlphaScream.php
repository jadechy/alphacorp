<?php

namespace App\Entity;

use App\Repository\AlphaScreamRepository;
use Doctrine\ORM\Mapping as ORM;
use App\Enum\ScreamLevelEnum;

#[ORM\Entity(repositoryClass: AlphaScreamRepository::class)]
#[ORM\Table(name: 'ALP_ALPHA_SCREAM')]
class AlphaScream
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(name: 'ALS_ID')]
    private int $id;

    #[ORM\Column(name: 'ALS_SCORE')]
    private float $score;

    #[ORM\Column(name: 'ALS_CREATED_AT')]
    private \DateTimeImmutable $createdAt;

    #[ORM\ManyToOne(inversedBy: 'alphaScreams')]
    #[ORM\JoinColumn(name: 'USR_ID', referencedColumnName: 'USR_ID')]
    private ?User $alpha = null;

    #[ORM\Column(length: 255, name: 'ALS_LEVEL')]
    private string $level;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getScore(): ?float
    {
        return $this->score;
    }

    public function setScore(float $score): static
    {
        $this->score = $score;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): static
    {
        $this->createdAt = $createdAt;

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

    public function getLevel(): ?string
    {
        return $this->level;
    }

    public function setLevel(): static
    {
        $score = $this->score;
        $this->level = $this->getLevelFromScore($score)->value;

        return $this;
    }

    private function getLevelFromScore(float $score): ScreamLevelEnum
    {
        if ($score < 20) {
            return ScreamLevelEnum::DOG;
        } elseif ($score < 40) {
            return ScreamLevelEnum::WOLF;
        } elseif ($score < 60) {
            return ScreamLevelEnum::ALPHA;
        } else {
            return ScreamLevelEnum::SUPREME;
        }
    }
}
