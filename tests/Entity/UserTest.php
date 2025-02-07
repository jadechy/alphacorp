<?php

namespace App\Tests\Entity;

namespace App\Tests\Entity;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class UserTest extends KernelTestCase
{
    public function testInvalidUser()
    {
        self::bootKernel();
        $container = static::getContainer();
        $validator = $container->get(ValidatorInterface::class);

        $user = new User();
        $errors = $validator->validate($user);

        $this->assertGreaterThan(0, count($errors));
    }
}

