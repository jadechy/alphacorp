<?php

namespace App\Form\Admin;

use App\Entity\Academy;
use App\Entity\User;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

use Symfony\Component\Form\Extension\Core\Type\TextType;

class AcademyAdminType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('title', TextType::class)
            ->add('shortDescription', TextType::class)
            ->add('content')
            ->add('free')
            ->add('price')
            ->add('author', EntityType::class, [
                'class' => User::class,
                'choice_label' => 'username',
                'placeholder' => 'Sélectionnez un utilisateur',
                'attr' => [
                    'class' => 'select',
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Academy::class,
        ]);
    }
}
