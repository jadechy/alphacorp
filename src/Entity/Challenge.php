<?php

namespace App\Entity;

use App\Repository\ChallengeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\InheritanceType('JOINED')]
#[ORM\DiscriminatorColumn(name: 'CHG_TYPE', type: 'string')]
#[ORM\DiscriminatorMap(['quiz' => Quiz::class, 'contest' => Contest::class])]
#[ORM\Entity(repositoryClass: ChallengeRepository::class)]
#[ORM\Table(name: 'ALP_CHALLENGE')]
class Challenge
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(name: 'CHG_ID')]
    private int $id;

    #[ORM\Column(length: 50, name: 'CHG_TITLE')]
    #[Assert\NotBlank(message: "Le titre ne peut pas être vide.")]
    #[Assert\Length(
        min: 3,
        max: 50,
        minMessage: "Le titre doit comporter au moins {{ limit }} caractères.",
        maxMessage: "Le titre ne peut pas dépasser {{ limit }} caractères."
    )]
    private string $title;

    #[ORM\Column(length: 250, name: 'CHG_DESCRIPTION')]
    #[Assert\NotBlank(message: "La description ne peut pas être vide.")]
    #[Assert\Length(
        min: 3,
        max: 250,
        minMessage: "La description doit comporter au moins {{ limit }} caractères.",
        maxMessage: "La description ne peut pas dépasser {{ limit }} caractères."
    )]
    private string $description;

    /**
     * @var Collection<int, User>
     */
    #[ORM\ManyToMany(targetEntity: User::class, mappedBy: 'participations')]
    private Collection $users;

    #[ORM\ManyToOne(inversedBy: 'challenges')]
    #[ORM\JoinColumn(name: 'USR_ID', referencedColumnName: 'USR_ID')]
    private ?User $author = null;

    public function __construct()
    {
        $this->users = new ArrayCollection();
    }

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

    public function getDescription(): string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }

    /**
     * @return Collection<int, User>
     */
    public function getUsers(): Collection
    {
        return $this->users;
    }

    public function addUser(User $user): static
    {
        if (!$this->users->contains($user)) {
            $this->users->add($user);
            $user->addParticipation($this);
        }

        return $this;
    }

    public function removeUser(User $user): static
    {
        if ($this->users->removeElement($user)) {
            $user->removeParticipation($this);
        }

        return $this;
    }

    public function getAuthor(): ?User
    {
        return $this->author;
    }

    public function setAuthor(?User $author): static
    {
        $this->author = $author;

        return $this;
    }

    public function isQuiz(): bool
    {
        return $this instanceof Quiz;
    }

    public function isContest(): bool
    {
        return $this instanceof Contest;
    }

    public function getChallengeType(): string
    {
        return $this->isQuiz() ? 'quiz' : ($this->isContest() ? 'contest' : 'unknown');
    }
}
