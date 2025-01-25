<?php 

namespace App\Enum;

enum ResponseStatusEnum: string 
{
    case VALIDATED = 'validated';
    case WAITING = 'waiting';
    case REJECTED = 'rejected';
    case DELETE = 'deleted';
}