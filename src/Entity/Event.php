<?php

namespace App\Entity;

use Symfony\Component\Validator\Constraints as Assert;
use App\Repository\EventRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: EventRepository::class)]
#[ORM\Table(name: 'ALP_EVENT')]
class Event
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(name: 'EVT_ID')]
    private int $id;

    #[ORM\Column(length: 70, name: 'EVT_TITLE')]
    #[Assert\NotBlank(message: "Le titre de l'événement ne peut pas être vide.")]
    #[Assert\Length(
        min: 5,
        max: 70,
        minMessage: "Le titre de l'événement doit comporter au moins {{ limit }} caractères.",
        maxMessage: "Le titre de l'événement ne peut pas dépasser {{ limit }} caractères."
    )]
    private string $title;

    #[ORM\Column(length: 90, name: 'EVT_SHORT_DESCRIPTION', nullable: true)]
    #[Assert\NotBlank(message: "La description courte ne peut pas être vide.")]
    #[Assert\Length(
        max: 90,
        maxMessage: "La description courte ne peut pas dépasser {{ limit }} caractères."
    )]
    private ?string $shortDescription = null;

    #[ORM\Column(length: 1500, name: 'EVT_LONG_DESCRIPTION', nullable: true)]
    #[Assert\NotBlank(message: "La description longue ne peut pas être vide.")]
    #[Assert\Length(max: 1500, maxMessage: "La description longue ne peut pas dépasser {{ limit }} caractères.")]
    private ?string $longDescription = null;

    #[ORM\Column(length: 100, name: 'EVT_IMAGE', nullable: true)]
    private ?string $image = null;

    #[ORM\Column(name: 'EVT_START_DATE')]
    #[Assert\NotBlank(message: "La date de début est obligatoire.")]
    private \DateTimeImmutable $startAt;

    #[ORM\Column(name: 'EVT_END_DATE')]
    #[Assert\NotBlank(message: "La date de fin est obligatoire.")]
    #[Assert\GreaterThan(propertyPath: "startAt", message: "La date de fin doit être postérieure à la date de début.")]
    private \DateTimeImmutable $endAt;

    /**
     * @var Collection<int, User>
     */
    #[ORM\ManyToMany(targetEntity: User::class, mappedBy: 'events')]
    private Collection $participants;

    #[ORM\ManyToOne(inversedBy: 'authorEvents')]
    #[ORM\JoinColumn(name: 'USR_ID', referencedColumnName: 'USR_ID')]
    private ?User $author = null;

    #[ORM\Column(length: 255, name: 'EVT_LOCATION')]
    #[Assert\NotBlank(message: "Le lieu de l'événement ne peut pas être vide.")]
    private string $location;

    public function __construct()
    {
        $this->participants = new ArrayCollection();
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

    public function getShortDescription(): ?string
    {
        return $this->shortDescription;
    }

    public function setShortDescription(string $shortDescription): static
    {
        $this->shortDescription = $shortDescription;

        return $this;
    }

    public function getLongDescription(): ?string
    {
        return $this->longDescription;
    }

    public function setLongDescription(string $longDescription): static
    {
        $this->longDescription = $longDescription;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(string $image): static
    {
        $this->image = $image;

        return $this;
    }

    public function getStartAt(): \DateTimeImmutable
    {
        return $this->startAt;
    }

    public function setStartAt(\DateTimeImmutable $startAt): static
    {
        $this->startAt = $startAt;

        return $this;
    }

    public function getEndAt(): \DateTimeImmutable
    {
        return $this->endAt;
    }

    public function setEndAt(\DateTimeImmutable $endAt): static
    {
        $this->endAt = $endAt;

        return $this;
    }

    /**
     * Vérifie si l'événement est dans le futur.
     */
    public function isInFuture(): bool
    {
        return $this->startAt > new \DateTimeImmutable();
    }

    /**
     * Vérifie si l'événement est en cours.
     */
    public function isOngoing(): bool
    {
        $now = new \DateTimeImmutable();
        return $this->startAt <= $now && $this->endAt >= $now;
    }

    /**
     * Vérifie si l'événement est terminé.
     */
    public function isFinished(): bool
    {
        return $this->endAt < new \DateTimeImmutable();
    }

    /**
     * @return Collection<int, User>
     */
    public function getParticipants(): Collection
    {
        return $this->participants;
    }

    public function addParticipant(User $participant): static
    {
        if (!$this->participants->contains($participant)) {
            $this->participants->add($participant);
            $participant->addEvent($this);
        }

        return $this;
    }

    public function removeParticipant(User $participant): static
    {
        if ($this->participants->removeElement($participant)) {
            $participant->removeEvent($this);
        }

        return $this;
    }

    public function isUserParticipating(?User $user): bool
    {
        if (!$user) {
            return false;
        }

        return $this->getParticipants()->contains($user);
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

    public function getLocation(): string
    {
        return $this->location;
    }

    public function setLocation(string $location): static
    {
        $this->location = $location;

        return $this;
    }
}
