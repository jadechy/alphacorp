<?php

namespace App\Entity;

use Symfony\Component\Validator\Constraints as Assert;

use App\Repository\CategoryRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CategoryRepository::class)]
#[ORM\Table(name: 'ALP_CATEGORY')]
class Category
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(name: 'CAT_ID')]
    private int $id;

    #[ORM\Column(length: 50, name: 'CAT_NAME')]
    #[Assert\NotBlank(message: "Le nom de catégorie ne peut pas être vide.")]
    #[Assert\Length(
        min: 3,
        max: 50,
        minMessage: "Le nom de catégorie doit comporter au moins {{ limit }} caractères.",
        maxMessage: "Le nom de catégorie ne peut pas dépasser {{ limit }} caractères."
    )]
    private string $name;

    #[ORM\Column(length: 50, name: 'CAT_LABEL')]
    #[Assert\NotBlank(message: "Le label ne peut pas être vide.")]
    #[Assert\Length(
        min: 3,
        max: 50,
        minMessage: "Le label doit comporter au moins {{ limit }} caractères.",
        maxMessage: "Le label ne peut pas dépasser {{ limit }} caractères."
    )]
    private string $label;

    /**
     * @var Collection<int, Topic>
     */
    #[ORM\OneToMany(targetEntity: Topic::class, mappedBy: 'category')]
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

    public function getLabel(): string
    {
        return $this->label;
    }

    public function setLabel(string $label): static
    {
        $this->label = $label;

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
            $topic->setCategory($this);
        }

        return $this;
    }

    public function removeTopic(Topic $topic): static
    {
        if ($this->topics->removeElement($topic)) {
            // set the owning side to null (unless already changed)
            if ($topic->getCategory() === $this) {
                $topic->setCategory(null);
            }
        }

        return $this;
    }
}
