<?php 

namespace App\Enum;

enum BromanceStatusEnum: string 
{
    case APPROCHE = 'En cours d\'approche';
    case COMPAGNONS = 'Compagnons d\'entraînement';
    case FRERE = 'Frères de bar';
    case OFFICIELLE = 'Bromance officielle';
    case FUSION = 'Fusion Alpha';
    case ETERNELS = 'Alpha éternels';
    case TOXIQUE = 'Bromance toxique';
    case PAUSE = 'En pause stratégique';
    case ECHEC = 'Échec de connexion';
}