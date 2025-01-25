<?php

namespace App\DataFixtures;

use App\Entity\Bromance;
use App\Entity\User;
use App\Entity\Answer;
use App\Entity\Category;
use App\Entity\Challenge;
use App\Entity\Event;
use App\Entity\Language;
use App\Entity\Question;
use App\Entity\Quiz;
use App\Entity\Rank;
use App\Entity\Response;
use App\Entity\Test;
use App\Entity\Topic;
use App\Entity\UserAnswer;
use App\Enum\StatusUserEnum;
use App\Enum\BromanceStatusEnum;
use App\Enum\TopicStatusEnum;
use App\Enum\ResponseStatusEnum;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AppFixtures extends Fixture
{
    public const MAX_ACTIVE_USERS = 5;
    public const MAX_ADMIN_USERS = 2;
    public const MAX_BLOCKED_USERS = 3;
    public const MAX_DELETE_USERS = 1;

    public const MAX_TOPICS = 20;
    public const MAX_RESPONSES_PER_TOPICS = 5;

    public const MAX_BROMANCE = 3;

    public const MAX_EVENTS = 5;

    public const MAX_CHALLENGES = 15;

    public function __construct(protected UserPasswordHasherInterface $passwordHasher) {}

    public function load(ObjectManager $manager): void
    {
        $users = [];
        $categories = [];
        $languages = [];
        $topics = [];
        $responses = [];
        $ranks = [];
        $events = [];
        $challenges = [];
        $questions = [];

        $this->createActiveUsers($manager, $users);
        $this->createAdminUsers($manager, $users);
        $this->createBannedUsers($manager, $users);
        $this->createDeleteUsers($manager, $users);

        $this->createCategories($manager, $categories);
        $this->createLanguages($manager, $languages);
        $this->createTopics($manager, $topics);
        $this->createResponses($manager, $topics, $users);

        $this->linkTopicsToCategoriesAndLanguages($topics, $categories, $languages, $users);

        $this->createBromance($manager, $users);
        $this->createRank($manager, $ranks);
        $this->createEvents($manager, $events, $users);
        $this->createChallenges($manager, $challenges, $users, $questions);
        $this->linkUserToAnswerQuestion($manager, $users, $questions);

        $manager->flush();
    }

    /**
     * @return User[] 
     */
    protected function createActiveUsers(ObjectManager $manager, array &$users): void
    {
        $roles = ['ROLE_SUPERVISOR', 'ROLE_ALPHA'];

        for ($i = 0; $i < self::MAX_ACTIVE_USERS; $i++) {
            $user = new User();
            $user->setEmail(email: "user_$i@example.com");
            $user->setUsername(username: "user_$i");

            $user->setPlainPassword('coucou');

            $randomRole = $roles[array_rand($roles)];
            $user->setRoles([$randomRole]);

            $user->setStatus(StatusUserEnum::ACTIVE);
            $users[] = $user;

            $manager->persist(object: $user);
        }
    }

    /**
     * @return User[] 
     */
    protected function createAdminUsers(ObjectManager $manager, array &$users): void
    {
        for ($i = self::MAX_ACTIVE_USERS; $i < self::MAX_ACTIVE_USERS + self::MAX_ADMIN_USERS; $i++) {
            $user = new User();
            $user->setEmail(email: "admin_$i@example.com");
            $user->setUsername(username: "admin_$i");

            $user->setPlainPassword('admin');

            $user->setRoles(['ROLE_ADMIN']);

            $user->setStatus(StatusUserEnum::ACTIVE);

            $users[] = $user;

            $manager->persist(object: $user);
        }
    }

    /**
     * @return User[] 
     */
    protected function createBannedUsers(ObjectManager $manager, array &$users): void
    {
        $roles = ['ROLE_SUPERVISOR', 'ROLE_ALPHA'];

        for ($i = self::MAX_ACTIVE_USERS + self::MAX_ADMIN_USERS; $i < self::MAX_ACTIVE_USERS + self::MAX_ADMIN_USERS + self::MAX_BLOCKED_USERS; $i++) {
            $user = new User();
            $user->setEmail(email: "user_$i@example.com");
            $user->setUsername(username: "user_$i");

            $user->setPlainPassword('banned');

            $randomRole = $roles[array_rand($roles)];
            $user->setRoles([$randomRole]);

            $user->setStatus(StatusUserEnum::BANNED);

            $users[] = $user;

            $manager->persist(object: $user);
        }
    }

    /**
     * @return User[] 
     */
    protected function createDeleteUsers(ObjectManager $manager, array &$users): void
    {
        $roles = ['ROLE_SUPERVISOR', 'ROLE_ALPHA'];

        for ($i = self::MAX_ACTIVE_USERS + self::MAX_ADMIN_USERS + self::MAX_BLOCKED_USERS; $i < self::MAX_ACTIVE_USERS + self::MAX_ADMIN_USERS + self::MAX_BLOCKED_USERS + self::MAX_DELETE_USERS; $i++) {
            $user = new User();
            $user->setEmail(email: "user_$i@example.com");
            $user->setUsername(username: "user_$i");

            $user->setPlainPassword('delete');

            $randomRole = $roles[array_rand($roles)];
            $user->setRoles([$randomRole]);

            $user->setStatus(StatusUserEnum::DELETE);

            $users[] = $user;

            $manager->persist(object: $user);
        }
    }

    protected function createCategories(ObjectManager $manager, array &$categories): void
    {
        $array = [
            ['nom' => 'Fitness ', 'label' => 'fitness'],
            ['nom' => 'Alimentation ', 'label' => 'alimentation'],
            ['nom' => 'Séduction', 'label' => 'seduction'],
            ['nom' => 'Travail', 'label' => 'travail'],
            ['nom' => 'Fashion', 'label' => 'fashion'],
            ['nom' => 'Débat', 'label' => 'débat'],
        ];

        foreach ($array as $element) {
            $category = new Category();
            $category->setName($element['nom']);
            $category->setLabel($element['label']);
            $manager->persist($category);
            $categories[] = $category;
        }
    }

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
        }
    }

    protected function createTopics(ObjectManager $manager, array &$topics)
    {
        for ($j = 0; $j < self::MAX_TOPICS; $j++) {
            $topic = new Topic();

            $topic->setTitle(title: "Topic n°$j");
            $topic->setShortDescription(shortDescription: "Short description $j");
            $topic->setLongDescription(longDescription: "Long description $j");
            $topic->setCreatedAt(createdAt: new \DateTimeImmutable());
            $topic->setStatus(random_int(0, 1) === 1 ? TopicStatusEnum::OPEN : TopicStatusEnum::WAITING);
            $manager->persist(object: $topic);
            $topics[] = $topic;
        }
    }

    protected function createResponses(ObjectManager $manager, array $topics, array $users): void
    {
        /** @var Topic $topic */
        foreach ($topics as $topic) {
            for ($i = 0; $i < random_int(1, self::MAX_RESPONSES_PER_TOPICS); $i++) {
                $response = new Response();
                $response->setAuthor($users[array_rand($users)]);
                $response->setContent("Réponse $i");
                $response->setCreatedAt(createdAt: new \DateTimeImmutable());
                $response->setStatus(random_int(0, 1) === 1 ? ResponseStatusEnum::VALIDATED : ResponseStatusEnum::WAITING);
                $response->setTopic($topic);

                $manager->persist($response);
            }
        }
    }

    protected function linkTopicsToCategoriesAndLanguages(array $topics, array $categories, array $languages, array $users): void
    {
        /** @var Topic $topic */
        foreach ($topics as $topic) {
            $topic->setCategory($categories[array_rand($categories)]);
            $topic->setLanguage($languages[array_rand($languages)]);

            $AlphaUsers = array_filter($users, function ($user) {
                return in_array('ROLE_ALPHA', $user->getRoles());
            });

            if (count($AlphaUsers) > 0) {
                $topic->setAuthor($AlphaUsers[array_rand($AlphaUsers)]);
            }
        }
    }

    protected function createBromance(ObjectManager $manager, array $users): void
    {
        for ($i = 0; $i < self::MAX_BROMANCE; $i++) {
            $alpha = $users[array_rand($users)];
            do {
                $follower = $users[array_rand($users)];
            } while ($follower === $alpha);

            $bromance = new Bromance();
            $bromance->setAlpha($alpha);
            $bromance->setFollower($follower);

            $statuses = BromanceStatusEnum::cases();
            $randomStatus = $statuses[array_rand($statuses)];
            $bromance->setStatus($randomStatus);

            $manager->persist($bromance);
        }
    }

    protected function createRank(ObjectManager $manager, array &$ranks): void
    {
        $array = [
            ['title' => 'Mec de Base', 'description' => 'Tu viens de poser ton premier pas sur la route alpha.', 'minimum' => 10],
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

    protected function createEvents(ObjectManager $manager, array &$events, array $users): void
    {
        for ($i = 0; $i < self::MAX_EVENTS; $i++) {
            $event = new Event();
            $event->setTitle(title: "Event n°$i");
            $event->setDescription(description: "Description n°$i");

            $event->setImage(image: "image n°$i");

            $event->setStartAt(startAt: new \DateTimeImmutable());
            $event->setEndAt(new \DateTimeImmutable('+1 day'));

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

            $manager->persist(object: $event);
        }
    }

    protected function createChallenges(ObjectManager $manager, array &$challenges, array $users, array &$questions): void
    {
        for ($j = 0; $j < self::MAX_CHALLENGES; $j++) {
            $challenge = random_int(min: 0, max: 1) === 0 ? new Test() : new Quiz();
            $title = $challenge instanceof Test ? 'Test' : 'Quiz';
            $description = $challenge instanceof Test ? 'Un test pour évaluer vos compétences.' : 'Un quiz pour tester vos connaissances.';

            $challenge->setTitle(title: "$title n°$j");
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

            if ($challenge instanceof Test) {
                $challenge->setStartOn(new \DateTimeImmutable('+1 day'));
                $challenge->setEndOn(new \DateTimeImmutable('+7 days'));
                $challenge->setSuccess(random_int(0, 1) === 1);
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

    protected function createQuestions(ObjectManager $manager, Quiz $quiz, array &$questions): void
    {
        for ($k = 0; $k < random_int(3, 10); $k++) {
            $question = new Question();
            $question->setQuestion("Question n°$k pour le quiz '{$quiz->getTitle()}'");
            $question->setCorrectAnswer(random_int(0, 3));
            $question->setXp(2);

            $question->setQuiz($quiz);
            $quiz->getQuestions()->add($question);

            for ($l = 0; $l < 4; $l++) {
                $answer = new Answer();
                $answer->setAnswer("Réponse $l pour question n°$k");
                $answer->setQuestion($question);

                $manager->persist($answer);
                $question->getAnswers()->add($answer);
            }

            $manager->persist(object: $question);
            $questions[] = $question;
        }
    }

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
}
