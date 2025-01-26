<?php

namespace App\Enum;

enum BromanceRequestStatusEnum: string
{
    case PENDING = 'Demande en attente';
    case ACCEPTED = 'Demande acceptée';
    case REJECTED = 'Demande rejetée';
}