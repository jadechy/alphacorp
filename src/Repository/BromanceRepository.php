<?php

namespace App\Repository;

use App\Entity\Bromance;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Bromance>
 */
class BromanceRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Bromance::class);
    }

    /** @return array<Bromance> */
    public function findByRequestStatus(string $request): array
    {
        /** @var array<Bromance> */
        return $this->createQueryBuilder('b')
            ->andWhere('b.request = :request')
            ->setParameter('request', $request)
            ->getQuery()
            ->getResult();
    }

    //    /**
    //     * @return Bromance[] Returns an array of Bromance objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('b')
    //            ->andWhere('b.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('b.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?Bromance
    //    {
    //        return $this->createQueryBuilder('b')
    //            ->andWhere('b.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
