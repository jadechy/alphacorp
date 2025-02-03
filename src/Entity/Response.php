<?php

namespace App\Entity;

use App\Enum\ResponseStatusEnum;
use App\Repository\ResponseRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: ResponseRepository::class)]
#[ORM\Table(name: 'ALP_RESPONSE')]
class Response
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(name: 'RSP_ID')]
    private int $id;

    #[ORM\Column(type: Types::TEXT, name: 'RSP_CONTENT')]
    #[Assert\NotBlank(message: "Le contenu de la réponse ne peut pas être vide.")]
    #[Assert\Length(
        max: 2000,
        maxMessage: "Le contenu de la réponse ne doit pas dépasser {{ limit }} caractères."
    )]
    private string $content;

    #[ORM\Column(name: 'RSP_CREATED_AT')]
    private \DateTimeImmutable $createdAt;

    #[ORM\Column(enumType: ResponseStatusEnum::class, name: 'RSP_STATUS')]
    private ResponseStatusEnum $status;

    #[ORM\ManyToOne(inversedBy: 'responses')]
    #[ORM\JoinColumn(name: 'TPC_ID', referencedColumnName: 'TPC_ID')]
    private ?Topic $topic = null;

    #[ORM\ManyToOne(inversedBy: 'responses')]
    #[ORM\JoinColumn(name: 'USR_ID', referencedColumnName: 'USR_ID')]
    #[Assert\NotNull(message: "L'auteur ne peut pas être vide.")]
    private ?User $author = null;

    public function getId(): int
    {
        return $this->id;
    }

    public function getContent(): string
    {
        return $this->content;
    }

    public function setContent(string $content): static
    {
        $this->content = $content;

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

    public function getStatus(): ResponseStatusEnum
    {
        return $this->status;
    }

    public function setStatus(ResponseStatusEnum $status): static
    {
        $this->status = $status;

        return $this;
    }

    public function getTopic(): ?Topic
    {
        return $this->topic;
    }

    public function setTopic(?Topic $topic): static
    {
        $this->topic = $topic;

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
