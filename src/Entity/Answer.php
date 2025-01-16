<?php

namespace App\Entity;

use App\Repository\AnswerRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: AnswerRepository::class)]
#[ORM\Table(name: 'ALP_ANSWER')]
class Answer
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(name: 'ANS_ID')]
    private int $id;

    #[ORM\ManyToOne(inversedBy: 'answers')]
    #[ORM\JoinColumn(name:'QST_ID',referencedColumnName:'QST_ID')]
    private ?Question $question = null;

    #[ORM\Column(name: 'ANS_ANSWER')]
    private int $answer;

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

    public function getAnswer(): ?int
    {
        return $this->answer;
    }

    public function setAnswer(int $answer): static
    {
        $this->answer = $answer;

        return $this;
    }
}
