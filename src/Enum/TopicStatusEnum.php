<?php 

namespace App\Enum;

enum TopicStatusEnum: string 
{
    case OPEN = 'open';
    case CLOSE = 'close';
    case WAITING = 'waiting';
}