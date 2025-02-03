<?php

namespace App\Entity;

use App\Repository\RankRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;


#[ORM\Entity(repositoryClass: RankRepository::class)]
#[ORM\Table(name: 'ALP_RANK')]
class Rank
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(name: 'RAN_ID')]
    private int $id;

    #[ORM\Column(length: 50, name: 'RAN_TITLE')]
    #[Assert\NotBlank(message: "Le titre ne peut pas être vide.")]
    #[Assert\Length(
        min: 3,
        max: 50,
        minMessage: "Le titre doit comporter au moins {{ limit }} caractères.",
        maxMessage: "Le titre ne peut pas dépasser {{ limit }} caractères."
    )]
    private string $title;

    #[ORM\Column(name: 'RAN_MINIMUM_XP')]
    #[Assert\Type(type: 'integer', message: "La valeur de XP doit être un entier.")]
    #[Assert\Range(
        min: 1,
        max: 10000,
        notInRangeMessage: "La valeur de XP doit être comprise entre {{ min }} et {{ max }}."
    )]
    private int $minimum;

    #[ORM\Column(length: 150, name: 'RAN_DESCRIPTION')]
    #[Assert\NotBlank(message: "La description ne peut pas être vide.")]
    #[Assert\Length(
        min: 3,
        max: 150,
        minMessage: "La description doit comporter au moins {{ limit }} caractères.",
        maxMessage: "La description ne peut pas dépasser {{ limit }} caractères."
    )]
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
