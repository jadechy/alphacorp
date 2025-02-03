<?php

namespace App\DataFixtures\Data;


class EventData
{
    /** @return array<array<string,string|\DateTimeImmutable>> */
    public static function getEvents(): array
    {
        return [
            [
                "title" => "Maximiser sa Productivité : Atteindre l’Excellence au Travail",
                "shortDescription" => "Découvrez les stratégies pour devenir plus productif et performant dans votre carrière.",
                "longDescription" => "Dans cet événement, nous explorerons des méthodes éprouvées pour maximiser votre productivité, améliorer votre gestion du temps et éviter les distractions. Apprenez à organiser vos journées de manière à atteindre l'excellence dans votre travail, tout en cultivant une discipline personnelle qui vous permettra de toujours aller de l'avant. Les sujets abordés incluent la gestion des priorités, la motivation, l'art de déléguer et la gestion du stress. Vous repartirez avec des outils pratiques pour augmenter vos performances et exceller dans votre carrière.",
                "language" => "fr",
                "image" => "event-0.jpg",
                "location" => "Paris, France",
                "startAt" => new \DateTimeImmutable('2024-03-15 09:00:00'),
                "endAt" => new \DateTimeImmutable('2024-03-15 17:00:00')
            ],
            [
                "title" => "Leadership Alpha : Comment Inspirer et Motiver votre Équipe",
                "shortDescription" => "Apprenez à développer des compétences de leadership et à inspirer vos collaborateurs.",
                "longDescription" => "Ce séminaire sur le leadership alpha est conçu pour vous apprendre à devenir un leader authentique et respecté. Vous découvrirez des techniques pratiques pour motiver vos équipes, renforcer leur engagement et leur donner une vision claire. En tant qu'homme alpha, il est essentiel de savoir diriger avec confiance et empathie. Nous aborderons des sujets comme la prise de décision rapide, la gestion des conflits, l'influence sans autorité et comment inspirer la confiance. À la fin de ce séminaire, vous repartirez avec des outils pour être un leader plus puissant et inspirant au quotidien.",
                "language" => "fr",
                "image" => "event-1.jpg",
                "location" => "Lyon, France",
                "startAt" => new \DateTimeImmutable('2024-04-01 09:00:00'),
                "endAt" => new \DateTimeImmutable('2024-04-01 17:00:00')
            ],
            [
                "title" => "AlphaMindset : Cultiver une Mentalité de Succès pour Gagner",
                "shortDescription" => "Transformez votre état d’esprit pour réussir dans toutes les sphères de votre vie.",
                "longDescription" => "Dans cet événement exclusif, vous apprendrez comment adopter un mindset alpha, un état d’esprit qui vous propulse vers la réussite. Nous explorerons des techniques de développement personnel, telles que la gestion de la peur, l’acceptation de l’échec comme un tremplin, et la discipline mentale nécessaire pour rester concentré sur vos objectifs. Les participants seront guidés par des experts en psychologie positive et en performance, et repartiront avec une boîte à outils pratique pour cultiver la confiance en soi, la résilience et une mentalité de gagnant, indispensable pour réussir dans le monde professionnel.",
                "language" => "fr",
                "image" => "event-2.jpg",
                "location" => "Marseille, France",
                "startAt" => new \DateTimeImmutable('2024-05-10 10:00:00'),
                "endAt" => new \DateTimeImmutable('2024-05-10 18:00:00')
            ],
            [
                "title" => "L’Art de la Communication : Maîtriser l’Influence et le Charisme",
                "shortDescription" => "Développez votre charisme et apprenez à communiquer avec impact.",
                "longDescription" => "Être un homme alpha, c’est savoir communiquer avec impact. Dans cet atelier, nous explorerons les secrets de la communication efficace : comment parler avec assurance, captiver son auditoire, et influencer sans manipuler. Vous apprendrez à utiliser le langage corporel, à maîtriser votre voix et à structurer vos discours pour qu’ils aient un effet immédiat. Ce séminaire est conçu pour les hommes alpha qui veulent non seulement réussir dans leur carrière, mais aussi dans leur vie personnelle, en étant capables de communiquer efficacement dans toutes les situations.",
                "language" => "fr",
                "image" => "event-3.jpg",
                "location" => "Bordeaux, France",
                "startAt" => new \DateTimeImmutable('2024-06-20 09:00:00'),
                "endAt" => new \DateTimeImmutable('2024-06-20 17:00:00')
            ],
            [
                "title" => "Alpha Fitness : L’Entraînement pour un Corps et un Esprit d’Acier",
                "shortDescription" => "Découvrez l’entraînement physique optimal pour les hommes alpha.",
                "longDescription" => "Cet événement est dédié aux hommes qui souhaitent atteindre une condition physique exceptionnelle. Nous aborderons les principes de l’entraînement pour un corps fort et un esprit résilient. Apprenez des techniques d’entraînement avancées, ainsi que des méthodes pour renforcer votre mentalité de gagnant. Nous parlerons également des habitudes alimentaires et de récupération pour optimiser vos performances. Que vous soyez athlète confirmé ou débutant, cet événement vous fournira des outils pour repousser vos limites et vous rapprocher de votre version la plus forte.",
                "language" => "fr",
                "image" => "event-4.jpg",
                "location" => "Nice, France",
                "startAt" => new \DateTimeImmutable('2024-07-05 08:00:00'),
                "endAt" => new \DateTimeImmutable('2024-07-05 16:00:00')
            ]
        ];
    }
}
