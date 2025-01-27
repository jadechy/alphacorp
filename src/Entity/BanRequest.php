<?php

namespace App\Entity;

use App\Repository\BanRequestRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: BanRequestRepository::class)]
#[ORM\Table(name: 'ALP_BANREQUEST')]
class BanRequest
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(name: 'BAN_ID')]
    private int $id;

    #[ORM\Column(type: Types::TEXT, name: 'BAN_MESSAGE')]
    private string $message;

    #[ORM\ManyToOne(inversedBy: 'banRequests')]
    #[ORM\JoinColumn(name:'USR_ID',referencedColumnName:'USR_ID')]
    private ?User $user = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMessage(): string
    {
        return $this->message;
    }

    public function setMessage(string $message): static
    {
        $this->message = $message;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): static
    {
        $this->user = $user;

        return $this;
    }
}
