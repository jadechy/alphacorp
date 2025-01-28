<?php

namespace App\Repository;

use App\Entity\Rank;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Rank>
 */
class RankRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Rank::class);
    }
    public function findCurrentRank(int $userRank): ?Rank
    {
        return $this->createQueryBuilder('r')
            ->where('r.level <= :userRank') // Trouver le rang le plus élevé que l'utilisateur possède
            ->orderBy('r.level', 'DESC') // Trier par niveau décroissant
            ->setParameter('userRank', $userRank)
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function findNextRank(int $userRank): ?Rank
    {
        return $this->createQueryBuilder('r')
            ->where('r.level > :userRank') // Trouver le premier rang supérieur
            ->orderBy('r.level', 'ASC') // Trier par niveau croissant
            ->setParameter('userRank', $userRank)
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }
    //    /**
    //     * @return Rank[] Returns an array of Rank objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('r')
    //            ->andWhere('r.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('r.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?Rank
    //    {
    //        return $this->createQueryBuilder('r')
    //            ->andWhere('r.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
