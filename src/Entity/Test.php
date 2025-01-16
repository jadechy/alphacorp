<?php

namespace App\Entity;

use App\Repository\TestRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TestRepository::class)]
#[ORM\Table(name: 'ALP_TEST')]
class Test extends Challenge
{
    #[ORM\Column(type: Types::DATETIME_MUTABLE, name: 'TST_START_DATE')]
    private \DateTimeInterface $startOn;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, name: 'TST_END_DATE')]
    private \DateTimeInterface $endOn;

    #[ORM\Column(nullable: true)]
    private ?bool $success = null;

    public function __construct()
    {
        parent::__construct();
    }

    public function getStartOn(): \DateTimeInterface
    {
        return $this->startOn;
    }

    public function setStartOn(\DateTimeInterface $startOn): static
    {
        $this->startOn = $startOn;

        return $this;
    }

    public function getEndOn(): \DateTimeInterface
    {
        return $this->endOn;
    }

    public function setEndOn(\DateTimeInterface $endOn): static
    {
        $this->endOn = $endOn;

        return $this;
    }

    public function isSuccess(): ?bool
    {
        return $this->success;
    }

    public function setSuccess(?bool $success): static
    {
        $this->success = $success;

        return $this;
    }
}
