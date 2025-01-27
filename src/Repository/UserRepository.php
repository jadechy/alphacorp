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

    public function searchByKeyword(string $keyword): array
    {
        $conn = $this->getEntityManager()->getConnection();

        $sql = "SELECT * FROM ALP_USER WHERE MATCH(USR_USERNAME) AGAINST(:keyword)";

        $stmt = $conn->prepare($sql);
        $stmt->bindValue("keyword", $keyword);

        $result = $stmt->execute();

        $ids = array_column($result->fetchAllAssociative(), 'USR_ID');

        if (empty($ids)) {
            return [];
        }

        return $this->createQueryBuilder('t')
            ->where('t.id IN (:ids)')
            ->setParameter('ids', $ids)
            ->getQuery()
            ->getResult();
    }
    public function searchAlphaByKeyword(string $keyword, EntityManagerInterface $entityManager): array
    {
        $users = $entityManager->getRepository(User::class)
            ->createQueryBuilder('u')
            ->where('u.username LIKE :search')
            ->setParameter('search', '%' . $keyword . '%')
            ->getQuery()
            ->getResult();
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
