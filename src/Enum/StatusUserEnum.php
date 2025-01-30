<?php 

namespace App\Enum;

enum StatusUserEnum: string 
{
    case BANNED = 'banni';
    case DELETE = 'supprimé';
    case ACTIVE = 'actif';
}