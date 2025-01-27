<?php

namespace App\Entity;

use App\Repository\ChallengeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\InheritanceType('JOINED')]
#[ORM\DiscriminatorColumn(name: 'CHG_TYPE', type: 'string')]
#[ORM\DiscriminatorMap(['quiz' => Quiz::class, 'test' => Test::class])]
#[ORM\Entity(repositoryClass: ChallengeRepository::class)]
#[ORM\Table(name: 'ALP_CHALLENGE')]
class Challenge
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(name: 'CHG_ID')]
    private int $id;

    #[ORM\Column(length: 50, name: 'CHG_TITLE')]
    private string $title;

    #[ORM\Column(length: 150, name: 'CHG_DESCRIPTION')]
    private string $description;

    /**
     * @var Collection<int, User>
     */
    #[ORM\ManyToMany(targetEntity: User::class, mappedBy: 'participations')]
    private Collection $users;

    #[ORM\ManyToOne(inversedBy: 'challenges')]
    #[ORM\JoinColumn(name:'USR_ID',referencedColumnName:'USR_ID')]
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
}
