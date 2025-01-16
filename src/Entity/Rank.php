<?php

namespace App\Entity;

use App\Repository\RankRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: RankRepository::class)]
#[ORM\Table(name: 'ALP_RANK')]
class Rank
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(name: 'RAN_ID')]
    private int $id;

    #[ORM\Column(length: 50, name:'RAN_TITLE')]
    private string $title;

    #[ORM\Column(name:'RAN_MINIMUM_XP')]
    private int $minimum;

    #[ORM\Column(length: 50, name:'RAN_DESCRIPTION')]
    private string $description;

    public function getId(): int
    {
        return $this->id;
    }

    public function getTitle(): string
    {
        return $this->title;
    }

    public function setTitle(string $title): static
    {
        $this->title = $title;

        return $this;
    }

    public function getMinimum(): int
    {
        return $this->minimum;
    }

    public function setMinimum(int $minimum): static
    {
        $this->minimum = $minimum;

        return $this;
    }

    public function getDescription(): string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }
}
