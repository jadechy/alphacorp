<?php

namespace App\Repository;

use App\Entity\Topic;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Topic>
 */
class TopicRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Topic::class);
    }

    public function searchByFilters(string $keyword = '', string $categoryLabel = ''): array
    {
        $queryBuilder = $this->createQueryBuilder('t');

        // Filtre par mot-clé
        if (!empty($keyword)) {
            $queryBuilder->andWhere('t.title LIKE :keyword OR t.shortDescription LIKE :keyword OR t.longDescription LIKE :keyword')
                ->setParameter('keyword', '%' . $keyword . '%');
        }

        // Filtre par catégorie
        if (!empty($categoryLabel) && $categoryLabel != "all") {
            $queryBuilder->join('t.category', 'c')
                ->andWhere('c.label = :categoryLabel')
                ->setParameter('categoryLabel', $categoryLabel);
        }

        return $queryBuilder->getQuery()->getResult();
    }

    //    /**
    //     * @return Topic[] Returns an array of Topic objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('t')
    //            ->andWhere('t.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('t.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?Topic
    //    {
    //        return $this->createQueryBuilder('t')
    //            ->andWhere('t.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
