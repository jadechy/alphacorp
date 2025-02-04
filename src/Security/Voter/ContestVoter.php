<?php

namespace App\Security\Voter;

use App\Entity\Contest;
use App\Entity\User;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;
use Symfony\Component\Security\Core\User\UserInterface;

final class ContestVoter extends Voter
{
    const VIEW = 'view'; 
    const PARTICIPATE = 'participate'; 
    const EDIT = 'edit';
    const CREATE = 'create';

    protected function supports(string $attribute, $subject): bool
    {
        if (!in_array($attribute, [self::VIEW, self::PARTICIPATE, self::EDIT, self::CREATE])) {
            return false;
        }

        if (!$subject instanceof Contest) {
            return false;
        }

        return true;
    }

    protected function voteOnAttribute(string $attribute, $contest, TokenInterface $token): bool
    {
        $user = $token->getUser();

        if (!$user instanceof User) {
            return false;
        }

        if (in_array('ROLE_ADMIN', $user->getRoles())) {
            return true;
        }

        if ($attribute === self::VIEW) {
            return in_array('ROLE_SUPERVISOR', $user->getRoles()) || in_array('ROLE_ALPHA', $user->getRoles());
        }

        if ($attribute === self::PARTICIPATE) {
            return in_array('ROLE_ALPHA', $user->getRoles());
        }

        if ($attribute === self::EDIT) {
            return in_array('ROLE_SUPERVISOR', $user->getRoles()) && $contest->getAuthor() === $user;
        }

        if ($attribute === self::CREATE) {
            return in_array('ROLE_SUPERVISOR', $user->getRoles());
        }

        return false;
    }
}
