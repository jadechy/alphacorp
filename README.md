# symfony-cc

## Description

Ce projet est une web application de réseau social Symfony réalisée dans le cadre d'un projet scolaire. Il permet de gérer des utilisateurs, leurs réactions sur des publications et offre des fonctionnalités d'authentification. Le projet utilise Docker pour l'environnement de développement et Doctrine pour la gestion des données.

**Cécile LECERF - 4IW3**

---

## Installation

### 1. Se rendre dans le bon dossier

```bash
cd alphacorp
```

### 1. Se rendre dans le bon dossier

```bash
cd .docker
```

### 2. Construire l'image Docker (uniquement la première fois)

```bash
docker compose build
```

### 3. Démarrer l'environnement Docker

```bash
docker compose up -d
```

### 4. Accéder au container Symfony

```bash
docker exec -it symfony-php-1 bash
```

### 5. Installation des dépendences

```bash
compose require install
```

<!-- ### 6. Exécuter les migrations de la base de données

```bash
php bin/console doctrine:migrations:migrate
``` -->

<!-- ### 7. Charger les fixtures de la base de données

```bash
php bin/console doctrine:fixtures:load
``` -->

---

## Lancer l'application

Accédez à l'application via le lien suivant :

[http://localhost:8000/](http://localhost:8000/)
