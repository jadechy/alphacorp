<?php

namespace App\Entity;

use App\Repository\AnswerRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: AnswerRepository::class)]
#[ORM\Table(name: 'ALP_ANSWER')]
class Answer
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(name: 'ANS_ID')]
    private int $id;

    #[ORM\ManyToOne(inversedBy: 'answers')]
    #[ORM\JoinColumn(name: 'QST_ID', referencedColumnName: 'QST_ID')]
    private ?Question $question = null;

    #[ORM\Column(length: 50, name: 'ANS_ANSWER')]
    #[Assert\NotBlank(message: "La réponse ne peut pas être vide.")]
    #[Assert\Length(
        min: 3,
        max: 50,
        minMessage: "La réponse doit comporter au moins {{ limit }} caractères.",
        maxMessage: "La réponse ne doit pas dépasser {{ limit }} caractères."
    )]
    private string $content;

    /**
     * @var Collection<int, UserAnswer>
     */
    #[ORM\OneToMany(targetEntity: UserAnswer::class, mappedBy: 'answer')]
    #[ORM\JoinColumn(onDelete: 'CASCADE')]
    private Collection $userAnswers;

    #[ORM\OneToOne(targetEntity: Question::class, mappedBy: 'correctAnswer')]
    private ?Question $correctForQuestion = null;

    public function __construct()
    {
        $this->userAnswers = new ArrayCollection();
    }

    public function getId(): int
    {
        return $this->id;
    }

    public function getQuestion(): ?Question
    {
        return $this->question;
    }

    public function setQuestion(?Question $question): static
    {
        $this->question = $question;

        return $this;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): static
    {
        $this->content = $content;

        return $this;
    }

    /**
     * @return Collection<int, UserAnswer>
     */
    public function getUserAnswers(): Collection
    {
        return $this->userAnswers;
    }

    public function addUserAnswer(UserAnswer $userAnswer): static
    {
        if (!$this->userAnswers->contains($userAnswer)) {
            $this->userAnswers->add($userAnswer);
            $userAnswer->setAnswer($this);
        }

        return $this;
    }

    public function removeUserAnswer(UserAnswer $userAnswer): static
    {
        if ($this->userAnswers->removeElement($userAnswer)) {
            // set the owning side to null (unless already changed)
            if ($userAnswer->getAnswer() === $this) {
                $userAnswer->setAnswer(null);
            }
        }

        return $this;
    }

    public function getCorrectForQuestion(): ?Question
    {
        return $this->correctForQuestion;
    }

    public function setCorrectForQuestion(?Question $correctForQuestion): self
    {
        $this->correctForQuestion = $correctForQuestion;
        return $this;
    }
}
