<?php

namespace App\Entity;

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

    #[ORM\Column(length: 50, name: 'EVT_TITLE')]
    private string $title;

    #[ORM\Column(length: 255, name: 'EVT_DESCRIPTION')]
    private string $description;

    #[ORM\Column(length: 100, name: 'EVT_IMAGE')]
    private string $image;

    #[ORM\Column(name: 'EVT_START_DATE')]
    private \DateTimeImmutable $startAt;

    #[ORM\Column(name: 'EVT_END_DATE')]
    private \DateTimeImmutable $endAt;

    /**
     * @var Collection<int, User>
     */
    #[ORM\ManyToMany(targetEntity: User::class, mappedBy: 'events')]
    private Collection $participants;

    #[ORM\ManyToOne(inversedBy: 'authorEvents')]
    #[ORM\JoinColumn(name:'USR_ID',referencedColumnName:'USR_ID')]
    private ?User $author = null;

    #[ORM\Column(length: 255,name: 'EVT_LOCATION')]
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

    public function getDescription(): string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getImage(): string
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
