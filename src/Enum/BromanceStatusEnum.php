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

    public static function getNextStatus(?self $currentStatus): ?self
    {
        $statuses = [
            self::APPROCHE,
            self::COMPAGNONS,
            self::FRERE,
            self::OFFICIELLE,
            self::FUSION,
            self::ETERNELS,
        ];

        if ($currentStatus === null) {
            return $statuses[0];
        }

        $currentIndex = array_search($currentStatus, $statuses, true);
        return $statuses[$currentIndex + 1] ?? null;
    }

    public function getTransitionInterval(): \DateInterval
    {
        return match ($this) {
            self::APPROCHE => new \DateInterval('P10D'),
            self::COMPAGNONS => new \DateInterval('P1M'),
            self::FRERE => new \DateInterval('P2M'),
            self::OFFICIELLE => new \DateInterval('P3M'),
            self::FUSION => new \DateInterval('P6M'),
            self::ETERNELS => new \DateInterval('P0D'),
        };
    }
}