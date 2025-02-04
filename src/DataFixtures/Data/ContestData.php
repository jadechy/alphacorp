<?php

namespace App\DataFixtures\Data;


class ContestData
{
    /** @return array<array<string,string>> */
    public static function getContests(): array
    {
        return [
            ["title" => "Force brute", "description" => "Capturez un moment où vous poussez vos limites physiques, que ce soit en soulevant des poids, en courant un marathon ou en réalisant un exploit sportif. Montrez que vous êtes prêt à tout pour prouver votre force !"],
            ["title" => "Concentration extrême", "description" => "Prenez une photo de vous dans un moment de concentration intense : en train de résoudre un problème complexe, de jouer à un jeu stratégique ou de travailler sur un projet important."],
            ["title" => "L'aventure sauvage", "description" => "Montrez votre esprit d'aventure en prenant une photo de vous en pleine nature, que ce soit en randonnée, en escalade ou en pratiquant une activité en extérieur qui exige de l'audace."],
            ["title" => "Le défi mental", "description" => "Capturez une image de vous surmontant une épreuve mentale difficile : une session d’étude intense, un projet de grande envergure ou même un moment de réflexion profonde."],
            ["title" => "Leadership en action", "description" => "Prenez une photo où vous assumez un rôle de leader : que ce soit en dirigeant une équipe, en donnant des instructions ou en inspirant ceux autour de vous à donner leur meilleur."],
            ["title" => "La victoire est mienne", "description" => "Capturez votre moment de victoire, que ce soit lors d'une compétition sportive, d'un défi personnel ou d'un succès dans votre vie professionnelle ou personnelle."],
            ["title" => "Esprit de compétition", "description" => "Prenez une photo lors d’une compétition, qu’il s’agisse d’un sport, d’un jeu vidéo ou d’un défi en ligne. Montrez que vous êtes toujours prêt à donner le meilleur de vous-même pour gagner."],
            ["title" => "Maîtrise du temps", "description" => "Prenez une photo de vous dans un moment où vous démontrez une gestion parfaite de votre temps : en train de jongler avec plusieurs tâches ou de respecter un planning serré."],
            ["title" => "L'art de la négociation", "description" => "Capturez une scène où vous êtes en train de négocier ou de convaincre quelqu'un, que ce soit lors d'une réunion d'affaires, d'une négociation de contrat ou même dans la vie quotidienne."],
            ["title" => "Maîtrise émotionnelle", "description" => "Prenez une photo qui montre comment vous restez calme et sous contrôle dans une situation stressante. Montrez que rien ne vous fait perdre votre sang-froid."],
            ["title" => "Résilience en Action", "description" => "Capturez une photo de vous en train d’affronter une situation difficile et d’en sortir plus fort, en montrant votre résilience et votre détermination."],
            ["title" => "L'Alpha en Repos", "description" => "Prenez une photo de vous dans un moment de détente après un long effort, montrant que même un homme alpha prend le temps de se ressourcer pour continuer à avancer."]
        ];
    }
}
