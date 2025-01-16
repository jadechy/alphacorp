<?php 

namespace App\Enum;

enum StatusUserEnum: string 
{
    case BLOCKED = 'bloqué';
    case DELETE = 'supprimé';
    case ACTIVE = 'actif';
}