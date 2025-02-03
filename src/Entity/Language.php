<?php

namespace App\Entity;

use App\Repository\LanguageRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: LanguageRepository::class)]
#[ORM\Table(name: 'ALP_LANGUAGE')]
class Language
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(name: 'LNG_ID')]
    private int $id;

    #[ORM\Column(length: 50, name: 'LNG_NAME')]
    #[Assert\NotBlank(message: "Le nom de la langue ne peut pas être vide.")]
    #[Assert\Length(
        min: 5,
        max: 50,
        minMessage: "Le nom de la langue doit comporter au moins {{ limit }} caractères.",
        maxMessage: "Le nom de la langue ne peut pas dépasser {{ limit }} caractères."
    )]
    private string $name;

    #[ORM\Column(length: 20, name: 'LNG_CODE')]
    #[Assert\NotBlank(message: "Le code de la langue ne peut pas être vide.")]
    #[Assert\Length(
        min: 2,
        max: 20,
        minMessage: "Le code de la langue doit comporter au moins {{ limit }} caractères.",
        maxMessage: "Le code de la langue ne peut pas dépasser {{ limit }} caractères."
    )]
    private string $code;

    /**
     * @var Collection<int, Topic>
     */
    #[ORM\OneToMany(targetEntity: Topic::class, mappedBy: 'language')]
    private Collection $topics;

    public function __construct()
    {
        $this->topics = new ArrayCollection();
    }

    public function getId(): int
    {
        return $this->id;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getCode(): string
    {
        return $this->code;
    }

    public function setCode(string $code): static
    {
        $this->code = $code;

        return $this;
    }

    /**
     * @return Collection<int, Topic>
     */
    public function getTopics(): Collection
    {
        return $this->topics;
    }

    public function addTopic(Topic $topic): static
    {
        if (!$this->topics->contains($topic)) {
            $this->topics->add($topic);
            $topic->setLanguage($this);
        }

        return $this;
    }

    public function removeTopic(Topic $topic): static
    {
        if ($this->topics->removeElement($topic)) {
            // set the owning side to null (unless already changed)
            if ($topic->getLanguage() === $this) {
                $topic->setLanguage(null);
            }
        }

        return $this;
    }
}
