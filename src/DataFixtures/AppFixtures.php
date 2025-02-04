<?php

namespace App\DataFixtures;

use App\DataFixtures\Data\EventData;
use App\DataFixtures\Data\TopicData;
use App\Entity\Bromance;
use App\Entity\User;
use App\Entity\Answer;
use App\Entity\Category;
use App\Entity\Event;
use App\Entity\Language;
use App\Entity\Question;
use App\Entity\Challenge;
use App\Entity\Quiz;
use App\Entity\Rank;
use App\Entity\Response;
use App\Entity\Contest;
use App\Entity\Topic;
use App\Entity\UserAnswer;
use App\Entity\UserContest;
use App\Entity\AlphaScream;
use App\Enum\StatusUserEnum;
use App\Enum\BromanceStatusEnum;
use App\Enum\BromanceRequestStatusEnum;
use App\Enum\TopicStatusEnum;
use App\Enum\ResponseStatusEnum;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Faker\Generator;
use Faker\Factory;

class AppFixtures extends Fixture
{
    public const MAX_ACTIVE_USERS = 9;
    public const MAX_ADMIN_USERS = 2;
    public const MAX_BLOCKED_USERS = 3;
    public const MAX_DELETE_USERS = 1;
    public const MAX_RESPONSES_PER_TOPICS = 5;

    public const MAX_BROMANCE = 7;

    public const MAX_CHALLENGES = 15;

    public const MAX_SCREAM = 12;

    protected $faker;

    public function __construct(protected UserPasswordHasherInterface $passwordHasher)
    {
        $this->faker = Factory::create('fr_FR');
    }

    public function load(ObjectManager $manager): void
    {
        $users = [];
        $categories = [];
        $languages = [];
        $topics = [];
        $ranks = [];
        $events = [];
        $challenges = [];
        $questions = [];
        $screams = [];

        $this->createActiveUsers($manager, $users);
        $this->createUser($manager, $users);
        $this->createAdminUser($manager, $users);
        $this->createAdminUsers($manager, $users);
        $this->createBannedUsers($manager, $users);
        $this->createDeleteUsers($manager, $users);

        $this->createCategories($manager, $categories);

        $this->createLanguages($manager, $languages);
        $this->createTopics($manager, $topics, $categories, $languages, $users);


        // $this->linkTopicsToCategoriesAndLanguages($topics, $categories, $languages, $users);

        $this->createBromance($manager, $users);
        $this->createRank($manager, $ranks);
        $this->createEvents($manager, $events, $users);
        $this->createChallenges($manager, $challenges, $users, $questions);
        $this->linkUserToAnswerQuestion($manager, $users, $questions);
        $this->linkUserToContest($manager, $users, $challenges);

        $this->createAlphaScreams($manager, $users, $screams);

        $manager->flush();
    }

    /**
     * Crée des utilisateurs actifs.
     *
     * @param ObjectManager $manager
     * @param User[] $users Tableau d'objets User.
     */
    protected function createActiveUsers(ObjectManager $manager, array &$users): void
    {

        for ($i = 0; $i < self::MAX_ACTIVE_USERS; $i++) {
            $user = new User();
            $user->setEmail($this->faker->email());
            $user->setUsername($this->faker->userName());

            $user->setPlainPassword('coucou');

            $user->setRoles(['ROLE_SUPERVISOR']);
            $user->setImage("supervisor-$i");

            $user->setStatus(StatusUserEnum::ACTIVE);
            $users[] = $user;

            $manager->persist(object: $user);
        }
        for ($i = 0; $i < self::MAX_ACTIVE_USERS; $i++) {
            $user = new User();
            $user->setEmail($this->faker->email());
            $user->setUsername($this->faker->userName());

            $user->setPlainPassword('coucou');

            $user->setRoles(['ROLE_ALPHA']);
            $user->setImage("alpha-$i");

            $user->setStatus(StatusUserEnum::ACTIVE);
            $users[] = $user;

            $manager->persist(object: $user);
        }
    }

    /**
     * Crée des utilisateurs admin.
     *
     * @param ObjectManager $manager
     * @param User[] $users Tableau d'objets User.
     */
    protected function createUser(ObjectManager $manager, array &$users): void
    {

        $roles = ['ROLE_SUPERVISOR', 'ROLE_ALPHA'];
        $images = ["supervisor-0", "alpha-0"];
        $roleCount = count($roles);

        for ($i = 0; $i < 2; $i++) {
            $user = new User();
            $user->setEmail("user_$i@example.com");
            $user->setUsername("user_$i@example.com");

            $user->setPlainPassword('user');

            $roleIndex = $i % $roleCount;
            $user->setRoles([$roles[$roleIndex]]);
            $user->setImage($images[$roleIndex]);

            $user->setStatus(StatusUserEnum::ACTIVE);
            $users[] = $user;

            $manager->persist(object: $user);
        }
    }

    /**
     * Crée des utilisateurs admin.
     *
     * @param ObjectManager $manager
     * @param User[] $users Tableau d'objets User.
     */
    protected function createAdminUser(ObjectManager $manager, array &$users): void
    {
        $user = new User();
        $user->setEmail("admin_0@example.com");
        $user->setUsername($this->faker->userName());
        $user->setImage("admin-0");

        $user->setPlainPassword('admin');

        $user->setRoles(['ROLE_ADMIN']);

        $user->setStatus(StatusUserEnum::ACTIVE);

        $users[] = $user;

        $manager->persist(object: $user);
    }

    /**
     * Crée des utilisateurs admin.
     *
     * @param ObjectManager $manager
     * @param User[] $users Tableau d'objets User.
     */
    protected function createAdminUsers(ObjectManager $manager, array &$users): void
    {
        for ($i = self::MAX_ACTIVE_USERS; $i < self::MAX_ACTIVE_USERS + self::MAX_ADMIN_USERS; $i++) {
            $user = new User();
            $user->setEmail($this->faker->email());
            $user->setUsername($this->faker->userName());

            $user->setPlainPassword('admin');

            $user->setRoles(['ROLE_ADMIN']);
            $user->setImage("admin-$i");

            $user->setStatus(StatusUserEnum::ACTIVE);

            $users[] = $user;

            $manager->persist(object: $user);
        }
    }

    /**
     * Crée des utilisateurs bannis.
     *
     * @param ObjectManager $manager
     * @param User[] $users Tableau d'objets User.
     */
    protected function createBannedUsers(ObjectManager $manager, array &$users): void
    {
        $roles = ['ROLE_SUPERVISOR', 'ROLE_ALPHA'];

        for ($i = self::MAX_ACTIVE_USERS + self::MAX_ADMIN_USERS; $i < self::MAX_ACTIVE_USERS + self::MAX_ADMIN_USERS + self::MAX_BLOCKED_USERS; $i++) {
            $user = new User();
            $user->setEmail($this->faker->email());
            $user->setUsername($this->faker->userName());

            $user->setPlainPassword('banned');

            $randomRole = $roles[array_rand($roles)];
            $user->setRoles([$randomRole]);
            $user->setImage("alpha-$i");

            $user->setStatus(StatusUserEnum::BANNED);

            $users[] = $user;

            $manager->persist(object: $user);
        }
    }

    /**
     * Crée des utilisateurs supprimés.
     *
     * @param ObjectManager $manager
     * @param User[] $users Tableau d'objets User.
     */
    protected function createDeleteUsers(ObjectManager $manager, array &$users): void
    {
        $roles = ['ROLE_SUPERVISOR', 'ROLE_ALPHA'];

        for ($i = self::MAX_ACTIVE_USERS + self::MAX_ADMIN_USERS + self::MAX_BLOCKED_USERS; $i < self::MAX_ACTIVE_USERS + self::MAX_ADMIN_USERS + self::MAX_BLOCKED_USERS + self::MAX_DELETE_USERS; $i++) {
            $user = new User();
            $user->setEmail($this->faker->email());
            $user->setUsername($this->faker->userName());

            $user->setPlainPassword('delete');

            $randomRole = $roles[array_rand($roles)];
            $user->setRoles([$randomRole]);
            $user->setImage("supervisor-$i");

            $user->setStatus(StatusUserEnum::DELETE);

            $users[] = $user;

            $manager->persist(object: $user);
        }
    }

    /**
     * Crée des catégories.
     *
     * @param ObjectManager $manager
     * @param Category[] $categories Tableau d'objets Category.
     */
    protected function createCategories(ObjectManager $manager, array &$categories): void
    {
        $array = [
            ['nom' => 'Débat', 'label' => 'debat'],
            ['nom' => 'Mentalité', 'label' => 'mentalite'],
            ['nom' => 'Carrière', 'label' => 'carriere'],
            ['nom' => 'Bien-être', 'label' => 'bien etre'],
            ['nom' => 'Compétence', 'label' => 'competence'],
            ['nom' => 'Leadership', 'label' => 'leadership'],
        ];

        foreach ($array as $element) {
            $category = new Category();
            $category->setName($element['nom']);
            $category->setLabel($element['label']);
            $manager->persist($category);
            $categories[] = $category;
            $categories[$element['nom']] = $category;
        }
    }

    /**
     * Crée des langues.
     *
     * @param ObjectManager $manager
     * @param Language[] $languages Tableau d'objets Language.
     */
    protected function createLanguages(ObjectManager $manager, array &$languages): void
    {
        $array = [
            ['code' => 'fr', 'nom' => 'Français'],
            ['code' => 'en', 'nom' => 'Anglais'],
            ['code' => 'es', 'nom' => 'Espagnol'],
            ['code' => 'de', 'nom' => 'Allemand'],
            ['code' => 'it', 'nom' => 'Italien'],
        ];

        foreach ($array as $element) {
            $language = new Language();
            $language->setCode($element['code']);
            $language->setName($element['nom']);
            $manager->persist($language);
            $languages[] = $language;
            $languages[$element['code']] = $language;
        }
    }

    /**
     * Crée des topics.
     *
     * @param ObjectManager $manager
     * @param Topic[] $topics Tableau d'objets Topic.
     * @param Category[] $categories Tableau d'objets Category.
     * @param Language[] $languages Tableau d'objets de Language.
     * @param User[] $users Tableau d'objets d'User.
     */
    protected function createTopics(ObjectManager $manager, array $topics, array $categories, array $languages, array $users): void
    {
        $topicsData = TopicData::getTopics();

        foreach ($topicsData as $index => $topicData) {
            $topic = new Topic();
            /** @var array<string,string> $topicData */
            $topic->setTitle($topicData["title"]);
            $topic->setShortDescription($topicData["shortDescription"]);
            $topic->setLongDescription($topicData["longDescription"]);
            $topic->setCategory($categories[$topicData["category"]]);
            $topic->setLanguage($languages[$topicData["language"]]);
            $topic->setStatus(TopicStatusEnum::OPEN);
            /** @var array<string, string> $responses */
            $responses = $topicData["responses"];
            foreach ($responses as $responseData) {
                $response = new Response();
                /** @var array<string, string> $responseData*/
                $response->setContent($responseData["content"]);
                $response->setCreatedAt(new \DateTimeImmutable());
                $response->setStatus(ResponseStatusEnum::VALIDATED);
                $response->setAuthor($users[$index % count($users)]);
                $topic->addResponse($response);
                $manager->persist($response);
            }
            $topic->setCreatedAt(new \DateTimeImmutable());
            $topic->setAuthor($users[$index % count($users)]);
            $manager->persist(object: $topic);
            $topics[] = $topic;
        }
    }



    /**
     * Crée des bromances netre User avec le role ALPHA.
     *
     * @param ObjectManager $manager
     * @param User[] $users Tableau d'objets User.
     */
    protected function createBromance(ObjectManager $manager, array $users): void
    {
        $alphaUsers = array_filter($users, function ($user) {
            return in_array('ROLE_ALPHA', $user->getRoles());
        });

        if (empty($alphaUsers)) {
            return;
        }

        for ($i = 0; $i < self::MAX_BROMANCE; $i++) {
            $alpha = $alphaUsers[array_rand($alphaUsers)];
            do {
                $follower = $alphaUsers[array_rand($alphaUsers)];
            } while ($follower === $alpha);

            if ($alpha === $follower) {
                continue;
            }

            $bromance = new Bromance();
            $bromance->setAlpha($alpha);
            $bromance->setFollower($follower);

            $demandeStatuses = BromanceRequestStatusEnum::cases();
            $randomDemandeStatus = $demandeStatuses[array_rand($demandeStatuses)];
            $bromance->setRequest($randomDemandeStatus);

            if ($randomDemandeStatus === BromanceRequestStatusEnum::ACCEPTED) {
                $statuses = BromanceStatusEnum::cases();
                $randomStatus = $statuses[array_rand($statuses)];
                $bromance->setStatus($randomStatus);
                $bromance->setLinkedAt(linkedAt: new \DateTimeImmutable());
                if ($bromance->getStatus() == BromanceStatusEnum::APPROCHE) {
                    $bromance->setLastStatusUpdate(null);
                } else {
                    $bromance->setLastStatusUpdate(lastStatusUpdate: new \DateTimeImmutable('+10 day'));
                }
            } else {
                $bromance->setStatus(null);
                $bromance->setLinkedAt(null);
                $bromance->setLastStatusUpdate(null);
            }

            $manager->persist($bromance);
        }
    }

    /**
     * Crée des rank.
     *
     * @param ObjectManager $manager
     * @param Rank[] $ranks Tableau d'objets Rank.
     */
    protected function createRank(ObjectManager $manager, array &$ranks): void
    {
        $array = [
            ['title' => 'Mec de Base', 'description' => 'Tu viens de poser ton premier pas sur la route alpha.', 'minimum' => 0],
            ['title' => 'Apprenti Grizzly', 'description' => 'Tu commences à grogner, mais il reste du chemin avant le rugissement.', 'minimum' => 40],
            ['title' => 'Champion du Canapé', 'description' => 'Maître incontesté des pauses musclées devant la télé.', 'minimum' => 180],
            ['title' => 'Seigneur du Steak', 'description' => 'Expert en grillades et consommateur de protéines légendaire.', 'minimum' => 350],
            ['title' => 'Roi du Selfie Musclé', 'description' => 'Les biceps d\'abord, le reste après. Ta galerie photos est impressionnante.', 'minimum' => 540],
            ['title' => 'Virilité en Test', 'description' => 'Tu es sur le point de prouver ta puissance alpha au monde.', 'minimum' => 750],
            ['title' => 'Génie du T-shirt Décolleté', 'description' => 'Tu as maîtrisé l\'art de l\'apparence casual mais imposante.', 'minimum' => 1000],
            ['title' => 'Alpha en Formation', 'description' => 'Tu es en route pour atteindre le sommet de la pyramide alpha.', 'minimum' => 1580],
            ['title' => 'Dominateur', 'description' => 'Ton aura impose le respect. Tu domines la meute.', 'minimum' => 2360],
            ['title' => 'Alpha Suprême', 'description' => 'Tu es l\'ultime incarnation du mâle alpha. Respect éternel.', 'minimum' => 5000],
        ];


        foreach ($array as $element) {
            $rank = new Rank();
            $rank->setTitle($element['title']);
            $rank->setDescription($element['description']);
            $rank->setMinimum($element['minimum']);
            $manager->persist($rank);
            $ranks[] = $rank;
        }
    }

    /**
     * Crée des évènements.
     *
     * @param ObjectManager $manager
     * @param Event[] $events Tableau d'objets Event.
     * @param User[] $users Tableau d'objets User.
     */
    protected function createEvents(ObjectManager $manager, array &$events, array $users): void
    {
        $eventsData = EventData::getEvents();
        foreach ($eventsData as $eventData) {
            $event = new Event();
            /** @var array<string, string> $eventData */
            $event->setTitle($eventData["title"]);
            $event->setShortDescription($eventData["shortDescription"]);
            $event->setLongDescription($eventData["longDescription"]);
            $event->setImage($eventData["image"]);
            $event->setLocation($eventData["location"]);
            /** @var array<string,\DateTimeImmutable> $eventData */
            $event->setStartAt($eventData["startAt"]);
            $event->setEndAt($eventData["endAt"]);

            // Associer l'auteur et les participants
            $alphaUsers = array_filter($users, function ($user) {
                return in_array('ROLE_ALPHA', $user->getRoles(), true);
            });

            $alphaUsers = array_values($alphaUsers);
            $authorIndex = array_rand($alphaUsers);
            $author = $alphaUsers[$authorIndex];
            $event->setAuthor($author);

            foreach ($alphaUsers as $key => $user) {
                if ($key !== $authorIndex && rand(0, 1)) {
                    $event->getParticipants()->add($user);
                    $user->getEvents()->add($event);
                }
            }

            $events[] = $event;
            $manager->persist($event);
        }
    }

    /**
     * Crée des challenges.
     *
     * @param ObjectManager $manager
     * @param Challenge[] $challenges Tableau d'objets Challenge.
     * @param User[] $users Tableau d'objets User.
     * @param Question[] $questions Tableau d'objets Question.
     */
    protected function createChallenges(ObjectManager $manager, array &$challenges, array $users, array &$questions): void
    {
        for ($j = 0; $j < self::MAX_CHALLENGES; $j++) {
            $challenge = random_int(min: 0, max: 1) === 0 ? new Contest() : new Quiz();
            $title = $challenge instanceof Contest ? 'Contest' : 'Quiz';
            $description = $challenge instanceof Contest ? 'Un défi pour évaluer vos compétences.' : 'Un quiz pour tester vos connaissances.';

            $challenge->setTitle($title);
            $challenge->setDescription(description: "$description");

            $supervisors = array_filter($users, function ($user) {
                return in_array('ROLE_SUPERVISOR', $user->getRoles(), true);
            });

            $alphaUsers = array_filter($users, function ($user) {
                return in_array('ROLE_ALPHA', $user->getRoles(), true);
            });

            $supervisors = array_values($supervisors);
            $alphaUsers = array_values($alphaUsers);

            $author = $supervisors[array_rand($supervisors)];
            $challenge->setAuthor($author);

            foreach ($alphaUsers as $user) {
                if (rand(0, 1)) {
                    $challenge->getUsers()->add($user);
                    $user->getParticipations()->add($challenge);
                }
            }

            if ($challenge instanceof Contest) {
                $challenge->setStartOn(new \DateTimeImmutable('+1 day'));
                $challenge->setEndOn(new \DateTimeImmutable('+7 days'));
                $challenge->setXp(5);
            }

            if ($challenge instanceof Quiz) {
                $this->createQuestions($manager, $challenge, $questions);
                foreach ($questions as $question) {
                    $challenge->getQuestions()->add($question);
                }
            }

            $manager->persist(object: $challenge);
            $challenges[] = $challenge;
        }
    }

    /**
     * Crée des questions.
     *
     * @param ObjectManager $manager
     * @param Question[] $questions Tableau d'objets Question.
     */
    protected function createQuestions(ObjectManager $manager, Quiz $quiz, array &$questions): void
    {
        for ($k = 0; $k < random_int(3, 10); $k++) {
            $question = new Question();
            $question->setContent("Question n°$k pour le quiz '{$quiz->getTitle()}'");
            $question->setXp(2);

            $question->setQuiz($quiz);
            $quiz->getQuestions()->add($question);

            $answers = [];

            for ($l = 0; $l < 4; $l++) {
                $answer = new Answer();
                $answer->setContent("Réponse $l pour question n°$k");
                $answer->setQuestion($question);

                $manager->persist($answer);
                $question->getAnswers()->add($answer);
                $answers[] = $answer;
            }

            $correctAnswer = $answers[array_rand($answers)];
            $question->setCorrectAnswer($correctAnswer);

            $manager->persist(object: $question);
            $questions[] = $question;
        }
    }

    /**
     * Lie les réponses au questions à un utilisateur ALPHA.
     *
     * @param ObjectManager $manager
     * @param User[] $users Tableau d'objets User.
     * @param Question[] $questions Tableau d'objets Question.
     */
    protected function linkUserToAnswerQuestion(ObjectManager $manager, array $users, array $questions): void
    {
        foreach ($users as $user) {
            if (!in_array('ROLE_ALPHA', $user->getRoles(), true)) {
                continue;
            }

            if (empty($questions)) {
                continue;
            }

            $randomIndex = array_rand($questions);
            $question = $questions[$randomIndex];

            $answers = $question->getAnswers();

            $randomAnswerIndex = array_rand($answers->toArray());
            $answer = $answers->get($randomAnswerIndex);

            $userAnswer = new UserAnswer();
            $userAnswer->setUser($user);
            $userAnswer->setQuestion($question);
            $userAnswer->setAnswer($answer);

            $manager->persist($userAnswer);
        }
    }

    /**
     * Lie les réponses au défis à un utilisateur ALPHA.
     *
     * @param ObjectManager $manager
     * @param User[] $users Tableau d'objets User.
     * @param Challenge[] $challenges Tableau d'objets Challenge.
     */
    protected function linkUserToContest(ObjectManager $manager, array $users, array $challenges): void
    {
        foreach ($users as $user) {
            if (!in_array('ROLE_ALPHA', $user->getRoles(), true)) {
                continue;
            }

            if (empty($challenges)) {
                continue;
            }

            $contest = null;
            foreach ($challenges as $challenge) {
                if ($challenge instanceof Contest) {
                    $contest = $challenge;
                    break; 
                }
            }

            if ($contest === null) {
                continue; 
            }

            $userContest = new UserContest();
            $userContest->setUser($user);
            $userContest->setContest($contest);
            $userContest->setAnswer('image.png');
            $userContest->setSuccess(random_int(0, 1) === 1);

            $manager->persist($userContest);
        }
    }

    /**
     * Crée des cris d'alpha.
     *
     * @param ObjectManager $manager
     * @param User[] $users Tableau d'objets User.
     * @param AlphaScream[] $screams Tableau d'objets AlphaScream.
     */
    protected function createAlphaScreams(ObjectManager $manager, array $users, array &$screams): void
    {
        for ($j = 0; $j < self::MAX_SCREAM; $j++){
            $alphascream = new AlphaScream();

            $alphaUsers = array_filter($users, function ($user) {
                return in_array('ROLE_ALPHA', $user->getRoles(), true);
            });

            $alphaUsers = array_values($alphaUsers);

            $alpha = $alphaUsers[array_rand($alphaUsers)];
            $alphascream->setAlpha($alpha);

            $alphascream->setScore(mt_rand(1, 1000) / 100);
            $alphascream->setCreatedAt(createdAt: new \DateTimeImmutable());
            $alphascream->setLevel();

            $manager->persist(object: $alphascream);
            $screams[] = $alphascream;
        }
    }
}
