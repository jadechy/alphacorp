<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class UserEditType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {

        $builder
            ->add('username', TextType::class, [
                'attr' => [
                    'class' => 'input',
                    'placeholder' => 'Nom d\'utilisateur'
                ]
            ])
            ->add('email', TextType::class, [
                'attr' => [
                    'class' => 'input',
                    'placeholder' => 'Email'
                ]
            ])
            ->add('gender', ChoiceType::class, [
                'label' => 'Sexe',
                'choices' => [
                    'Homme' => 'male',
                    'Femme' => 'female',
                ],
                'expanded' => false,
                'multiple' => false,
                'mapped' => false,
                'attr' => [
                    'class' => 'dashboard-select',
                ]
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
