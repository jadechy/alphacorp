<?php

namespace App\Repository;

use App\Entity\UserAnswer;
use App\Entity\User;
use App\Entity\Quiz;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<UserAnswer>
 */
class UserAnswerRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UserAnswer::class);
    }

    public function findAllAnswerByUserAndQuiz(User $user, Quiz $quiz){
        return $this->createQueryBuilder('ur')
        ->join('ur.question', 'q')
        ->where('q.quiz = :quiz')
        ->andWhere('ur.user = :user')
        ->setParameter('quiz', $quiz)
        ->setParameter('user', $user)
        ->getQuery()
        ->getResult();
    }

    //    /**
    //     * @return UserAnswer[] Returns an array of UserAnswer objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('u')
    //            ->andWhere('u.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('u.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?UserAnswer
    //    {
    //        return $this->createQueryBuilder('u')
    //            ->andWhere('u.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
