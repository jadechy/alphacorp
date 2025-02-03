<?php

namespace App\Entity;

use App\Enum\TopicStatusEnum;
use App\Repository\TopicRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: TopicRepository::class)]
#[ORM\Table(name: 'ALP_TOPIC')]
class Topic
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(name: 'TPC_ID')]
    private int $id;

    #[ORM\Column(length: 70, name: 'TPC_TITLE')]
    #[Assert\NotBlank(message: "Le titre ne peut pas être vide.")]
    #[Assert\Length(
        max: 70,
        maxMessage: "Le titre ne doit pas dépasser {{ limit }} caractères."
    )]
    private string $title;

    #[ORM\Column(length: 150, name: 'TPC_SHORT_DESCRIPTION')]
    #[Assert\NotBlank(message: "La description courte ne peut pas être vide.")]
    #[Assert\Length(
        max: 150,
        maxMessage: "La description courte ne doit pas dépasser {{ limit }} caractères."
    )]
    private string $shortDescription;

    #[ORM\Column(length: 1300, name: 'TPC_LONG_DESCRIPTION')]
    #[Assert\NotBlank(message: "La description longue ne peut pas être vide.")]
    #[Assert\Length(
        max: 1300,
        maxMessage: "La description longue ne doit pas dépasser {{ limit }} caractères."
    )]
    private string $longDescription;

    #[ORM\Column(enumType: TopicStatusEnum::class, name: 'TPC_STATUS')]
    private TopicStatusEnum $status;

    #[ORM\Column(name: 'TPC_CREATED_AT')]
    private \DateTimeImmutable $createdAt;

    #[ORM\ManyToOne(inversedBy: 'topics')]
    #[ORM\JoinColumn(name: 'CAT_ID', referencedColumnName: 'CAT_ID')]
    #[Assert\NotNull(message: "La catégorie ne peut pas être vide.")]
    private ?Category $category = null;

    #[ORM\ManyToOne(inversedBy: 'topics')]
    #[ORM\JoinColumn(name: 'LNG_ID', referencedColumnName: 'LNG_ID')]
    #[Assert\NotNull(message: "La langue ne peut pas être vide.")]
    private ?Language $language = null;

    /**
     * @var Collection<int, Response>
     */
    #[ORM\OneToMany(targetEntity: Response::class, mappedBy: 'topic')]
    private Collection $responses;

    #[ORM\ManyToOne(inversedBy: 'topics')]
    #[ORM\JoinColumn(name: 'USR_ID', referencedColumnName: 'USR_ID')]
    private ?User $author = null;

    public function __construct()
    {
        $this->responses = new ArrayCollection();
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

    public function getShortDescription(): string
    {
        return $this->shortDescription;
    }

    public function setShortDescription(string $shortDescription): static
    {
        $this->shortDescription = $shortDescription;

        return $this;
    }

    public function getLongDescription(): string
    {
        return $this->longDescription;
    }

    public function setLongDescription(string $longDescription): static
    {
        $this->longDescription = $longDescription;

        return $this;
    }

    public function getStatus(): TopicStatusEnum
    {
        return $this->status;
    }

    public function setStatus(TopicStatusEnum $status): static
    {
        $this->status = $status;

        return $this;
    }

    public function getCreatedAt(): \DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): static
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getCategory(): ?Category
    {
        return $this->category;
    }

    public function setCategory(?Category $category): static
    {
        $this->category = $category;

        return $this;
    }

    public function getLanguage(): ?Language
    {
        return $this->language;
    }

    public function setLanguage(?Language $language): static
    {
        $this->language = $language;

        return $this;
    }

    /**
     * @return Collection<int, Response>
     */
    public function getResponses(): Collection
    {
        return $this->responses;
    }

    public function addResponse(Response $response): static
    {
        if (!$this->responses->contains($response)) {
            $this->responses->add($response);
            $response->setTopic($this);
        }

        return $this;
    }

    public function removeResponse(Response $response): static
    {
        if ($this->responses->removeElement($response)) {
            // set the owning side to null (unless already changed)
            if ($response->getTopic() === $this) {
                $response->setTopic(null);
            }
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
