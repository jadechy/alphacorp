<?php

namespace App\Form\Admin;

use App\Entity\User;
use App\Enum\StatusUserEnum;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;

class UserAdminType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {

        $builder
            ->add('username', TextType::class, [
                'attr' => [

                    'placeholder' => 'Nom d\'utilisateur'
                ]
            ])
            ->add('email', TextType::class, [
                'attr' => [

                    'placeholder' => 'Email'
                ]
            ])
            ->add('xp', NumberType::class, [
                'attr' => [
                    'placeholder' => 'xp'
                ]
            ])
            ->add('status', ChoiceType::class, [
                'label' => 'Statut',
                'choices' => [
                    'Actif' => StatusUserEnum::ACTIVE,
                    'Banni' => StatusUserEnum::BANNED,
                    'Supprimé' => StatusUserEnum::DELETE,
                ],
                'expanded' => false,
                'multiple' => false,
                'data' => StatusUserEnum::ACTIVE, // Valeur par défaut
                'placeholder' => 'Sélectionnez un statut',
                'attr' => [
                    'class' => 'form-control',
                ],
            ])
            ->add('roles', ChoiceType::class, [
                'label' => 'Rôles',
                'choices' => [
                    'Utilisateur' => 'ROLE_USER',
                    'Administrateur' => 'ROLE_ADMIN',
                    'Alpha' => 'ROLE_ALPHA',
                    'Superviseur' => 'ROLE_SUPERVISOR',
                ],
                'expanded' => true,
                'multiple' => true,
                'data' => ['ROLE_USER'],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
            'is_admin' => true,
        ]);
    }
}
