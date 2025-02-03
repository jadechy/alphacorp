<?php

namespace App\Entity;

use App\Repository\QuestionRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: QuestionRepository::class)]
#[ORM\Table(name: 'ALP_QUESTION')]
class Question
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(name: 'QST_ID')]
    private int $id;

    #[ORM\Column(length: 100, name: 'QST_QUESTION')]
    #[Assert\NotBlank(message: "La question ne peut pas être vide.")]
    #[Assert\Length(
        min: 3,
        max: 100,
        minMessage: "La question doit comporter au moins {{ limit }} caractères.",
        maxMessage: "La question ne doit pas dépasser {{ limit }} caractères."
    )]
    private string $content;

    #[ORM\ManyToOne(inversedBy: 'questions')]
    #[ORM\JoinColumn(name: 'CHG_ID', referencedColumnName: 'CHG_ID')]
    private ?Quiz $quiz = null;

    /**
     * @var Collection<int, Answer>
     */
    #[ORM\OneToMany(targetEntity: Answer::class, mappedBy: 'question', cascade: ['persist', 'remove'])]
    private Collection $answers;

    /**
     * @var Collection<int, UserAnswer>
     */
    #[ORM\OneToMany(targetEntity: UserAnswer::class, mappedBy: 'question')]
    private Collection $userAnswers;

    #[ORM\Column(nullable: true, name: 'QST_XP')]
    #[Assert\Type(type: 'integer', message: "La valeur de XP doit être un entier.")]
    #[Assert\Range(
        min: 1,
        max: 1000,
        notInRangeMessage: "La valeur de XP doit être comprise entre {{ min }} et {{ max }}."
    )]
    private ?int $xp = null;

    #[ORM\OneToOne(targetEntity: Answer::class, cascade: ['persist', 'remove'], inversedBy: 'correctForQuestion')]
    #[ORM\JoinColumn(name: 'ANS_ID', referencedColumnName: 'ANS_ID')]
    private ?Answer $correctAnswer = null;

    public function __construct()
    {
        $this->answers = new ArrayCollection();
        $this->userAnswers = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getQuiz(): ?Quiz
    {
        return $this->quiz;
    }

    public function setQuiz(?Quiz $quiz): static
    {
        $this->quiz = $quiz;

        return $this;
    }

    /**
     * @return Collection<int, Answer>
     */
    public function getAnswers(): Collection
    {
        return $this->answers;
    }

    public function addAnswer(Answer $answer): static
    {
        if (!$this->answers->contains($answer)) {
            $this->answers->add($answer);
            $answer->setQuestion($this);
        }

        return $this;
    }

    public function removeAnswer(Answer $answer): static
    {
        if ($this->answers->removeElement($answer)) {
            if ($answer->getQuestion() === $this) {
                $answer->setQuestion(null);
            }
        }

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
            $userAnswer->setQuestion($this);
        }

        return $this;
    }

    public function removeUserAnswer(UserAnswer $userAnswer): static
    {
        if ($this->userAnswers->removeElement($userAnswer)) {
            // set the owning side to null (unless already changed)
            if ($userAnswer->getQuestion() === $this) {
                $userAnswer->setQuestion(null);
            }
        }

        return $this;
    }

    public function getXp(): ?int
    {
        return $this->xp;
    }

    public function setXp(?int $xp): static
    {
        $this->xp = $xp;

        return $this;
    }

    public function getCorrectAnswer(): ?Answer
    {
        return $this->correctAnswer;
    }

    public function setCorrectAnswer(?Answer $correctAnswer): static
    {
        $this->correctAnswer = $correctAnswer;

        return $this;
    }
}
