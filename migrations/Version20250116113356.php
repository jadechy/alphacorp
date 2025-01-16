<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250116113356 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('CREATE TABLE ALP_ANSWER (ANS_ID INT AUTO_INCREMENT NOT NULL, ANS_ANSWER INT NOT NULL, QST_ID INT DEFAULT NULL, INDEX IDX_B108B2637A264F57 (QST_ID), PRIMARY KEY(ANS_ID)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE ALP_BROMANCE (BRO_ID INT AUTO_INCREMENT NOT NULL, BRO_STATUS VARCHAR(255) NOT NULL, USR_ID INT DEFAULT NULL, INDEX IDX_1D6F9133C4DC529D (USR_ID), PRIMARY KEY(BRO_ID)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE ALP_CATEGORY (CAT_ID INT AUTO_INCREMENT NOT NULL, CAT_NAME VARCHAR(50) NOT NULL, CAT_LABEL VARCHAR(50) NOT NULL, PRIMARY KEY(CAT_ID)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE ALP_CHALLENGE (CHG_ID INT AUTO_INCREMENT NOT NULL, CHG_TITLE VARCHAR(50) NOT NULL, CHG_DESCRIPTION VARCHAR(150) NOT NULL, CHG_TYPE VARCHAR(255) NOT NULL, PRIMARY KEY(CHG_ID)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE ALP_EVENT (EVT_ID INT AUTO_INCREMENT NOT NULL, EVT_TITLE VARCHAR(50) NOT NULL, EVT_DESCRIPTION VARCHAR(255) NOT NULL, EVT_IMAGE VARCHAR(100) NOT NULL, EVT_START_DATE DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', EVT_END_DATE DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(EVT_ID)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE ALP_LANGUAGE (LNG_ID INT AUTO_INCREMENT NOT NULL, LNG_NAME VARCHAR(50) NOT NULL, LNG_CODE VARCHAR(20) NOT NULL, PRIMARY KEY(LNG_ID)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE ALP_QUESTION (QST_ID INT AUTO_INCREMENT NOT NULL, QST_QUESTION VARCHAR(100) NOT NULL, QST_CORRECT_ANSWER INT NOT NULL, CHG_ID INT DEFAULT NULL, INDEX IDX_D58B45C61A4B225 (CHG_ID), PRIMARY KEY(QST_ID)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE ALP_QUIZ (CHG_ID INT NOT NULL, PRIMARY KEY(CHG_ID)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE ALP_RANK (RAN_ID INT AUTO_INCREMENT NOT NULL, RAN_TITLE VARCHAR(50) NOT NULL, RAN_MINIMUM_XP INT NOT NULL, RAN_DESCRIPTION VARCHAR(50) NOT NULL, PRIMARY KEY(RAN_ID)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE ALP_RESPONSE (RSP_ID INT AUTO_INCREMENT NOT NULL, RSP_CONTENT LONGTEXT NOT NULL, RSP_CREATED_AT DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', TPC_ID INT DEFAULT NULL, USR_ID INT DEFAULT NULL, INDEX IDX_85D4F6E9A085CB12 (TPC_ID), INDEX IDX_85D4F6E9C4DC529D (USR_ID), PRIMARY KEY(RSP_ID)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE ALP_TEST (TST_START_DATE DATETIME NOT NULL, TST_END_DATE DATETIME NOT NULL, success TINYINT(1) DEFAULT NULL, CHG_ID INT NOT NULL, PRIMARY KEY(CHG_ID)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE ALP_TOPIC (TPC_ID INT AUTO_INCREMENT NOT NULL, TPC_TITLE VARCHAR(50) NOT NULL, TPC_SHORT_DESCRIPTION VARCHAR(150) NOT NULL, TPC_LONG_DESCRIPTION VARCHAR(255) NOT NULL, TPC_CREATED_AT DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', CAT_ID INT DEFAULT NULL, LNG_ID INT DEFAULT NULL, USR_ID INT DEFAULT NULL, INDEX IDX_23E96C6B2E182825 (CAT_ID), INDEX IDX_23E96C6B1FB2F550 (LNG_ID), INDEX IDX_23E96C6BC4DC529D (USR_ID), PRIMARY KEY(TPC_ID)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE ALP_USER (USR_ID INT AUTO_INCREMENT NOT NULL, USR_USERNAME VARCHAR(100) NOT NULL, USR_EMAIL VARCHAR(100) NOT NULL, USR_PASSWORD VARCHAR(100) NOT NULL, USR_ROLES JSON NOT NULL, USR_RESET_TOKEN CHAR(36) DEFAULT NULL COMMENT \'(DC2Type:guid)\', USR_STATUS VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_2F31B61B7514CDD6 (USR_USERNAME), UNIQUE INDEX UNIQ_2F31B61B9A13EFD7 (USR_EMAIL), UNIQUE INDEX UNIQ_2F31B61B207E0A74 (USR_RESET_TOKEN), PRIMARY KEY(USR_ID)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE ALP_USER_CHALLENGE (USR_ID INT NOT NULL, CHG_ID INT NOT NULL, INDEX IDX_4AF5EF3DC4DC529D (USR_ID), INDEX IDX_4AF5EF3D61A4B225 (CHG_ID), PRIMARY KEY(USR_ID, CHG_ID)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE ALP_USER_EVENT (USR_ID INT NOT NULL, EVT_ID INT NOT NULL, INDEX IDX_CBD2B57EC4DC529D (USR_ID), INDEX IDX_CBD2B57E2A8180AA (EVT_ID), PRIMARY KEY(USR_ID, EVT_ID)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE ALP_ANSWER ADD CONSTRAINT FK_B108B2637A264F57 FOREIGN KEY (QST_ID) REFERENCES ALP_QUESTION (QST_ID)');
        $this->addSql('ALTER TABLE ALP_BROMANCE ADD CONSTRAINT FK_1D6F9133C4DC529D FOREIGN KEY (USR_ID) REFERENCES ALP_USER (USR_ID)');
        $this->addSql('ALTER TABLE ALP_QUESTION ADD CONSTRAINT FK_D58B45C61A4B225 FOREIGN KEY (CHG_ID) REFERENCES ALP_QUIZ (CHG_ID)');
        $this->addSql('ALTER TABLE ALP_QUIZ ADD CONSTRAINT FK_6B09AC061A4B225 FOREIGN KEY (CHG_ID) REFERENCES ALP_CHALLENGE (CHG_ID) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE ALP_RESPONSE ADD CONSTRAINT FK_85D4F6E9A085CB12 FOREIGN KEY (TPC_ID) REFERENCES ALP_TOPIC (TPC_ID)');
        $this->addSql('ALTER TABLE ALP_RESPONSE ADD CONSTRAINT FK_85D4F6E9C4DC529D FOREIGN KEY (USR_ID) REFERENCES ALP_USER (USR_ID)');
        $this->addSql('ALTER TABLE ALP_TEST ADD CONSTRAINT FK_7ADD1E5E61A4B225 FOREIGN KEY (CHG_ID) REFERENCES ALP_CHALLENGE (CHG_ID) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE ALP_TOPIC ADD CONSTRAINT FK_23E96C6B2E182825 FOREIGN KEY (CAT_ID) REFERENCES ALP_CATEGORY (CAT_ID)');
        $this->addSql('ALTER TABLE ALP_TOPIC ADD CONSTRAINT FK_23E96C6B1FB2F550 FOREIGN KEY (LNG_ID) REFERENCES ALP_LANGUAGE (LNG_ID)');
        $this->addSql('ALTER TABLE ALP_TOPIC ADD CONSTRAINT FK_23E96C6BC4DC529D FOREIGN KEY (USR_ID) REFERENCES ALP_USER (USR_ID)');
        $this->addSql('ALTER TABLE ALP_USER_CHALLENGE ADD CONSTRAINT FK_4AF5EF3DC4DC529D FOREIGN KEY (USR_ID) REFERENCES ALP_USER (USR_ID)');
        $this->addSql('ALTER TABLE ALP_USER_CHALLENGE ADD CONSTRAINT FK_4AF5EF3D61A4B225 FOREIGN KEY (CHG_ID) REFERENCES ALP_CHALLENGE (CHG_ID)');
        $this->addSql('ALTER TABLE ALP_USER_EVENT ADD CONSTRAINT FK_CBD2B57EC4DC529D FOREIGN KEY (USR_ID) REFERENCES ALP_USER (USR_ID)');
        $this->addSql('ALTER TABLE ALP_USER_EVENT ADD CONSTRAINT FK_CBD2B57E2A8180AA FOREIGN KEY (EVT_ID) REFERENCES ALP_EVENT (EVT_ID)');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('ALTER TABLE ALP_ANSWER DROP FOREIGN KEY FK_B108B2637A264F57');
        $this->addSql('ALTER TABLE ALP_BROMANCE DROP FOREIGN KEY FK_1D6F9133C4DC529D');
        $this->addSql('ALTER TABLE ALP_QUESTION DROP FOREIGN KEY FK_D58B45C61A4B225');
        $this->addSql('ALTER TABLE ALP_QUIZ DROP FOREIGN KEY FK_6B09AC061A4B225');
        $this->addSql('ALTER TABLE ALP_RESPONSE DROP FOREIGN KEY FK_85D4F6E9A085CB12');
        $this->addSql('ALTER TABLE ALP_RESPONSE DROP FOREIGN KEY FK_85D4F6E9C4DC529D');
        $this->addSql('ALTER TABLE ALP_TEST DROP FOREIGN KEY FK_7ADD1E5E61A4B225');
        $this->addSql('ALTER TABLE ALP_TOPIC DROP FOREIGN KEY FK_23E96C6B2E182825');
        $this->addSql('ALTER TABLE ALP_TOPIC DROP FOREIGN KEY FK_23E96C6B1FB2F550');
        $this->addSql('ALTER TABLE ALP_TOPIC DROP FOREIGN KEY FK_23E96C6BC4DC529D');
        $this->addSql('ALTER TABLE ALP_USER_CHALLENGE DROP FOREIGN KEY FK_4AF5EF3DC4DC529D');
        $this->addSql('ALTER TABLE ALP_USER_CHALLENGE DROP FOREIGN KEY FK_4AF5EF3D61A4B225');
        $this->addSql('ALTER TABLE ALP_USER_EVENT DROP FOREIGN KEY FK_CBD2B57EC4DC529D');
        $this->addSql('ALTER TABLE ALP_USER_EVENT DROP FOREIGN KEY FK_CBD2B57E2A8180AA');
        $this->addSql('DROP TABLE ALP_ANSWER');
        $this->addSql('DROP TABLE ALP_BROMANCE');
        $this->addSql('DROP TABLE ALP_CATEGORY');
        $this->addSql('DROP TABLE ALP_CHALLENGE');
        $this->addSql('DROP TABLE ALP_EVENT');
        $this->addSql('DROP TABLE ALP_LANGUAGE');
        $this->addSql('DROP TABLE ALP_QUESTION');
        $this->addSql('DROP TABLE ALP_QUIZ');
        $this->addSql('DROP TABLE ALP_RANK');
        $this->addSql('DROP TABLE ALP_RESPONSE');
        $this->addSql('DROP TABLE ALP_TEST');
        $this->addSql('DROP TABLE ALP_TOPIC');
        $this->addSql('DROP TABLE ALP_USER');
        $this->addSql('DROP TABLE ALP_USER_CHALLENGE');
        $this->addSql('DROP TABLE ALP_USER_EVENT');
    }
}
