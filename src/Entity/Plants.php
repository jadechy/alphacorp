<?php

namespace App\Entity;

use App\Repository\PlantsRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PlantsRepository::class)]
class Plants
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?int $nbFeuille = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNbFeuille(): ?int
    {
        return $this->nbFeuille;
    }

    public function setNbFeuille(int $nbFeuille): static
    {
        $this->nbFeuille = $nbFeuille;

        return $this;
    }
}
