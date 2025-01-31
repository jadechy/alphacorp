<?php

namespace App\Repository;

use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<User>
 */
class UserRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, User::class);
    }

    /** @return array<User> */
    public function findAllAlpha(): array
    {
        $users = $this->createQueryBuilder('u')
            ->andWhere('u.roles LIKE :role')
            ->setParameter('role', '%ROLE_ALPHA%')
            ->getQuery()
            ->getResult();
        return $users;
    }

    /** @return array<User> */
    public function searchAlphaByKeyword(string $keyword): array
    {

        $users = $this->createQueryBuilder('u')
            ->where('u.username LIKE :search')
            ->andWhere('u.roles LIKE :role')
            ->setParameter('search', '%' . $keyword . '%')
            ->setParameter('role', '%ROLE_ALPHA%')
            ->getQuery()
            ->getResult();

        /** @var array<User> */
        return $users;
    }
    //    /**
    //     * @return User[] Returns an array of User objects
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

    //    public function findOneBySomeField($value): ?User
    //    {
    //        return $this->createQueryBuilder('u')
    //            ->andWhere('u.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
