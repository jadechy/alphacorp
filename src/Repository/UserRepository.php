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
    public function findAllAlpha(string $userId): array
    {
        /** @var array<User> */
        return $this->createQueryBuilder('u')
            ->andWhere('u.roles LIKE :role')
            ->andWhere('u.id != :userId')
            ->setParameter('role', '%ROLE_ALPHA%')
            ->setParameter('userId', $userId)
            ->getQuery()
            ->getResult();
    }

    /** @return array<User> */
    public function searchAlphaByKeyword(string $keyword, string $userId): array
    {
        /** @var array<User> */
        return $this->createQueryBuilder('u')
            ->where('u.username LIKE :search')
            ->andWhere('u.roles LIKE :role')
            ->andWhere('u.id != :userId')
            ->setParameter('search', '%' . $keyword . '%')
            ->setParameter('role', '%ROLE_ALPHA%')
            ->setParameter('userId', $userId)
            ->getQuery()
            ->getResult();
    }
}
