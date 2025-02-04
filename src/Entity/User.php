<?php

namespace App\Entity;

use App\Repository\UserRepository;
use App\Enum\StatusUserEnum;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ORM\Table(name: 'ALP_USER')]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(name: 'USR_ID')]
    private int $id;

    #[ORM\Column(length: 100, name: 'USR_USERNAME', unique: true)]
    #[Assert\NotBlank(message: "Le nom d'utilisateur ne peut pas être vide.")]
    #[Assert\Length(
        min: 3,
        max: 100,
        minMessage: "Le nom d'utilisateur doit comporter au moins {{ limit }} caractères.",
        maxMessage: "Le nom d'utilisateur ne peut pas dépasser {{ limit }} caractères."
    )]
    private string $username;

    #[ORM\Column(length: 100, name: 'USR_EMAIL', unique: true)]
    private string $email;

    #[ORM\Column(length: 100, name: 'USR_PASSWORD')]
    private string $password;

    private ?string $plainPassword = null;

    /** @var array<string> $roles */
    #[ORM\Column(name: 'USR_ROLES')]
    private array $roles = [];

    #[ORM\Column(type: 'guid', unique: true, name: 'USR_RESET_TOKEN', nullable: true)]
    private ?string $resetToken = null;

    #[ORM\Column(name: "USR_IMAGE", length: 100,  nullable: true)]
    private ?string $image = null;

    /**
     * @var Collection<int, Response>
     */
    #[ORM\OneToMany(targetEntity: Response::class, mappedBy: 'author')]
    private Collection $responses;

    /**
     * @var Collection<int, Topic>
     */
    #[ORM\OneToMany(targetEntity: Topic::class, mappedBy: 'author')]
    private Collection $topics;

    /**
     * @var Collection<int, Bromance>
     */
    #[ORM\OneToMany(targetEntity: Bromance::class, mappedBy: 'alpha')]
    private Collection $bromancesAlpha;

    /**
     * @var Collection<int, Bromance>
     */
    #[ORM\OneToMany(targetEntity: Bromance::class, mappedBy: 'follower')]
    private Collection $bromancesFollower;

    /**
     * @var Collection<int, Challenge>
     */
    #[ORM\ManyToMany(targetEntity: Challenge::class, inversedBy: 'users')]
    #[ORM\JoinTable(name: 'ALP_USER_CHALLENGE')]
    #[ORM\JoinColumn(name: 'USR_ID', referencedColumnName: 'USR_ID', nullable: false)]
    #[ORM\InverseJoinColumn(name: 'CHG_ID', referencedColumnName: 'CHG_ID')]
    private Collection $participations;

    /**
     * @var Collection<int, Event>
     */
    #[ORM\ManyToMany(targetEntity: Event::class, inversedBy: 'participants')]
    #[ORM\JoinTable(name: 'ALP_USER_EVENT')]
    #[ORM\JoinColumn(name: 'USR_ID', referencedColumnName: 'USR_ID', nullable: false)]
    #[ORM\InverseJoinColumn(name: 'EVT_ID', referencedColumnName: 'EVT_ID')]
    private Collection $events;

    #[ORM\Column(name: 'USR_STATUS', enumType: StatusUserEnum::class)]
    private StatusUserEnum $status;

    #[ORM\Column(name: 'USR_XP', nullable: true)]
    private ?int $xp = null;

    /**
     * @var Collection<int, Event>
     */
    #[ORM\OneToMany(targetEntity: Event::class, mappedBy: 'author')]
    private Collection $authorEvents;

    /**
     * @var Collection<int, Challenge>
     */
    #[ORM\OneToMany(targetEntity: Challenge::class, mappedBy: 'author')]
    private Collection $challenges;

    /**
     * @var Collection<int, UserAnswer>
     */
    #[ORM\OneToMany(targetEntity: UserAnswer::class, mappedBy: 'user')]
    private Collection $userAnswers;

    /**
     * @var Collection<int, BanRequest>
     */
    #[ORM\OneToMany(targetEntity: BanRequest::class, mappedBy: 'user')]
    private Collection $banRequests;

    /**
     * @var Collection<int, UserContest>
     */
    #[ORM\OneToMany(targetEntity: UserContest::class, mappedBy: 'user')]
    private Collection $userContests;

    /**
     * @var Collection<int, AlphaScream>
     */
    #[ORM\OneToMany(targetEntity: AlphaScream::class, mappedBy: 'alpha')]
    private Collection $alphaScreams;

    public function __construct()
    {
        $this->responses = new ArrayCollection();
        $this->topics = new ArrayCollection();
        $this->bromancesAlpha = new ArrayCollection();
        $this->bromancesFollower = new ArrayCollection();
        $this->challenges = new ArrayCollection();
        $this->participations = new ArrayCollection();
        $this->events = new ArrayCollection();
        $this->authorEvents = new ArrayCollection();
        $this->userAnswers = new ArrayCollection();
        $this->banRequests = new ArrayCollection();
        $this->userContests = new ArrayCollection();
        $this->alphaScreams = new ArrayCollection();
    }

    public function getId(): int
    {
        return $this->id;
    }

    public function getUsername(): string
    {
        return $this->username;
    }

    public function setUsername(string $username): static
    {
        $this->username = $username;

        return $this;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    /**
     * @return string the hashed password for this user
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): static
    {
        $this->password = $password;

        return $this;
    }

    public function setPlainPassword(string $plainPassword): void
    {
        $this->plainPassword = $plainPassword;
    }

    public function getPlainPassword(): ?string
    {
        return $this->plainPassword;
    }

    /** @return array<string> */
    public function getRoles(): array
    {
        $roles = $this->roles;
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    /** @param array<string> $roles */
    public function setRoles(array $roles): static
    {
        $this->roles = $roles;

        return $this;
    }

    public function getResetToken(): ?string
    {
        return $this->resetToken;
    }

    public function setResetToken(?string $resetToken): self
    {
        $this->resetToken = $resetToken;
        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(string $image): static
    {
        $this->image = $image;

        return $this;
    }

    /**
     * The public representation of the user (e.g. a username, an email address, etc.)
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        if (empty($this->email)) {
            throw new \LogicException('User identifier cannot be empty.');
        }

        return $this->email;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials(): void {}

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
            $response->setAuthor($this);
        }

        return $this;
    }

    public function removeResponse(Response $response): static
    {
        if ($this->responses->removeElement($response)) {
            // set the owning side to null (unless already changed)
            if ($response->getAuthor() === $this) {
                $response->setAuthor(null);
            }
        }

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
            $topic->setAuthor($this);
        }

        return $this;
    }

    public function removeTopic(Topic $topic): static
    {
        if ($this->topics->removeElement($topic)) {
            // set the owning side to null (unless already changed)
            if ($topic->getAuthor() === $this) {
                $topic->setAuthor(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Bromance>
     */
    public function getBromancesAlpha(): Collection
    {
        return $this->bromancesAlpha;
    }

    public function addBromanceAlpha(Bromance $bromanceAlpha): static
    {
        if (!$this->bromancesAlpha->contains($bromanceAlpha)) {
            $this->bromancesAlpha->add($bromanceAlpha);
            $bromanceAlpha->setAlpha($this);
        }

        return $this;
    }

    public function removeBromanceAlpha(Bromance $bromanceAlpha): static
    {
        if ($this->bromancesAlpha->removeElement($bromanceAlpha)) {
            if ($bromanceAlpha->getAlpha() === $this) {
                $bromanceAlpha->setAlpha(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Bromance>
     */
    public function getBromancesFollower(): Collection
    {
        return $this->bromancesFollower;
    }

    public function addBromanceFollower(Bromance $bromanceFollower): static
    {
        if (!$this->bromancesFollower->contains($bromanceFollower)) {
            $this->bromancesFollower->add($bromanceFollower);
            $bromanceFollower->setAlpha($this);
        }

        return $this;
    }

    public function removeBromanceFollower(Bromance $bromanceFollower): static
    {
        if ($this->bromancesFollower->removeElement($bromanceFollower)) {
            if ($bromanceFollower->getAlpha() === $this) {
                $bromanceFollower->setAlpha(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Bromance>
     */
    public function getAllBromances(): Collection
    {
        return new ArrayCollection(
            array_merge($this->bromancesAlpha->toArray(), $this->bromancesFollower->toArray())
        );
    }

    /**
     * @return Collection<int, Challenge>
     */
    public function getChallenges(): Collection
    {
        return $this->challenges;
    }

    public function addChallenge(Challenge $challenge): static
    {
        if (!$this->challenges->contains($challenge)) {
            $this->challenges->add($challenge);
            $challenge->setAuthor($this);
        }

        return $this;
    }

    public function removeChallenge(Challenge $challenge): static
    {
        if ($this->challenges->removeElement($challenge)) {
            // set the owning side to null (unless already changed)
            if ($challenge->getAuthor() === $this) {
                $challenge->setAuthor(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Challenge>
     */
    public function getParticipations(): Collection
    {
        return $this->participations;
    }

    public function addParticipation(Challenge $participation): static
    {
        if (!$this->participations->contains($participation)) {
            $this->participations->add($participation);
        }

        return $this;
    }

    public function removeParticipation(Challenge $participation): static
    {
        $this->participations->removeElement($participation);

        return $this;
    }

    /**
     * @return Collection<int, Event>
     */
    public function getEvents(): Collection
    {
        return $this->events;
    }

    public function addEvent(Event $event): static
    {
        if (!$this->events->contains($event)) {
            $this->events->add($event);
        }

        return $this;
    }

    public function removeEvent(Event $event): static
    {
        $this->events->removeElement($event);

        return $this;
    }

    public function getStatus(): StatusUserEnum
    {
        return $this->status;
    }

    public function setStatus(StatusUserEnum $status): static
    {
        $this->status = $status;

        return $this;
    }

    public function getXp(): ?int
    {
        return $this->xp;
    }

    public function setXp(int $xp): static
    {
        $this->xp = $xp;

        return $this;
    }

    /**
     * @return Collection<int, Event>
     */
    public function getAuthorEvents(): Collection
    {
        return $this->authorEvents;
    }

    public function addAuthorEvent(Event $authorEvent): static
    {
        if (!$this->authorEvents->contains($authorEvent)) {
            $this->authorEvents->add($authorEvent);
            $authorEvent->setAuthor($this);
        }

        return $this;
    }

    public function removeAuthorEvent(Event $authorEvent): static
    {
        if ($this->authorEvents->removeElement($authorEvent)) {
            // set the owning side to null (unless already changed)
            if ($authorEvent->getAuthor() === $this) {
                $authorEvent->setAuthor(null);
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
            $userAnswer->setUser($this);
        }

        return $this;
    }

    public function removeUserAnswer(UserAnswer $userAnswer): static
    {
        if ($this->userAnswers->removeElement($userAnswer)) {
            // set the owning side to null (unless already changed)
            if ($userAnswer->getUser() === $this) {
                $userAnswer->setUser(null);
            }
        }

        return $this;
    }

    public function hasAnsweredQuiz(Quiz $quiz): bool
    {
        $answersForQuiz = $this->getUserAnswers()->filter(function (UserAnswer $userAnswer) use ($quiz) {
            /** @var Question */
            $question = $userAnswer->getQuestion();
            return $question->getQuiz() === $quiz;
        });

        return count($answersForQuiz) === count($quiz->getQuestions());
    }

    /**
     * @return Collection<int, BanRequest>
     */
    public function getBanRequests(): Collection
    {
        return $this->banRequests;
    }

    public function addBanRequest(BanRequest $banRequest): static
    {
        if (!$this->banRequests->contains($banRequest)) {
            $this->banRequests->add($banRequest);
            $banRequest->setUser($this);
        }

        return $this;
    }

    public function removeBanRequest(BanRequest $banRequest): static
    {
        if ($this->banRequests->removeElement($banRequest)) {
            // set the owning side to null (unless already changed)
            if ($banRequest->getUser() === $this) {
                $banRequest->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, UserContest>
     */
    public function getUserContests(): Collection
    {
        return $this->userContests;
    }

    public function hasAnsweredContest(Contest $contest): bool
    {
        /** @var UserContest $userContest */
        foreach ($this->userContests as $userContest) {
            if ($userContest->getContest() === $contest && !empty($userContest->getAnswer())) {
                return true;
            }
        }
        return false;
    }

    public function getAnswerForContest(Contest $contest): ?string
    {
        foreach ($this->userContests as $userContest) {
            if ($userContest->getContest() === $contest) {
                return $userContest->getAnswer();
            }
        }

        return null;
    }


    public function addUserContest(UserContest $userContest): static
    {
        if (!$this->userContests->contains($userContest)) {
            $this->userContests->add($userContest);
            $userContest->setUser($this);
        }

        return $this;
    }

    public function removeUserContest(UserContest $userContest): static
    {
        if ($this->userContests->removeElement($userContest)) {
            // set the owning side to null (unless already changed)
            if ($userContest->getUser() === $this) {
                $userContest->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, AlphaScream>
     */
    public function getAlphaScreams(): Collection
    {
        return $this->alphaScreams;
    }

    public function addAlphaScream(AlphaScream $alphaScream): static
    {
        if (!$this->alphaScreams->contains($alphaScream)) {
            $this->alphaScreams->add($alphaScream);
            $alphaScream->setAlpha($this);
        }

        return $this;
    }

    public function removeAlphaScream(AlphaScream $alphaScream): static
    {
        if ($this->alphaScreams->removeElement($alphaScream)) {
            // set the owning side to null (unless already changed)
            if ($alphaScream->getAlpha() === $this) {
                $alphaScream->setAlpha(null);
            }
        }

        return $this;
    }
}
