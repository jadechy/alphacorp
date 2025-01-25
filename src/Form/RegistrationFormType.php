<?php

namespace App\Form;

use App\Entity\Challenge;
use App\Entity\Event;
use App\Entity\User;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class RegistrationFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('username', TextType::class, [
                'attr' => [
                    'class' => 'w-full px-8 py-4  rounded-lg font-medium bg-transparent
 border border-gray-200 placeholder-gray-400 text-sm focus:outline-none focus:border-fuchsia-300  ',
                    'placeholder' => 'Nom d\'utilisateur'
                ]
            ])
            ->add('email', EmailType::class, [
                'label' => 'Adresse email',
                'attr' => [
                    'class' => 'w-full px-8 py-4 mt-5 rounded-lg font-medium bg-transparent
 border border-gray-200 placeholder-gray-400 text-sm focus:outline-none focus:border-fuchsia-300 ',
                    'placeholder' => 'Email'
                ],
            ])
            ->add('plainPassword', RepeatedType::class, [
                'type' => PasswordType::class,
                'first_options' => [
                    'label' => 'Mot de passe',
                    'attr' => [
                        'autocomplete' => 'new-password',
                        'class' => 'w-full px-8 py-4 mt-5 rounded-lg font-medium bg-transparent
 border border-gray-200 placeholder-gray-400 text-sm focus:outline-none focus:border-fuchsia-300',
                        'placeholder' => 'Entrez votre mot de passe',
                    ],
                ],
                'second_options' => [
                    'label' => 'Confirmez le mot de passe',
                    'attr' => [
                        'autocomplete' => 'new-password',
                        'class' => 'w-full px-8 py-4 mt-5 rounded-lg font-medium bg-transparent
 border border-gray-200 placeholder-gray-400 text-sm focus:outline-none focus:border-fuchsia-300 ',
                        'placeholder' => 'Confirmez votre mot de passe',
                    ],
                ],
                'mapped' => false,
            ])
            ->add('gender', ChoiceType::class, [
                'label' => 'Sexe',
                'choices' => [
                    'Homme' => 'male',
                    'Femme' => 'female',
                ],
                'expanded' => true,
                'multiple' => false,
                'mapped' => false,

            ]);;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
