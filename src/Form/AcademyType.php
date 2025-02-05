<?php

namespace App\Form;

use App\Entity\Academy;
use App\Entity\User;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AcademyType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('title', TextType::class, [
                "attr" => [
                    "class" => "input"
                ]
            ])
            ->add('shortDescription', TextType::class, [
                "attr" => [
                    "class" => "input"
                ]
            ])
            ->add('content', TextType::class, [
                "attr" => [
                    "class" => "input"
                ]
            ])
            ->add('free')
            ->add('price', NumberType::class, [
                "attr" => [
                    "class" => "input"
                ]
            ]);
        if ($options['is_admin']) {
            $builder->add('author', EntityType::class, [
                'class' => User::class,
                'choice_label' => 'username',
                'placeholder' => 'Sélectionnez un utilisateur',
                'attr' => [
                    'class' => 'dashboard-select',
                ]
            ]);
        }
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Academy::class,
            'is_admin' => false,

        ]);
    }
}
