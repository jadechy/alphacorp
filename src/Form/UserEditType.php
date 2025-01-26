<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class UserEditType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $userRoles = $options['data']->getRoles();

        $defaultGender = null;
        if (in_array('ROLE_ALPHA', $userRoles)) {
            $defaultGender = 'male';
        } elseif (in_array('ROLE_SUPERVISOR', $userRoles)) {
            $defaultGender = 'female';
        }

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
            ->add('gender', ChoiceType::class, [
                'label' => 'Sexe',
                'choices' => [
                    'Homme' => 'male',
                    'Femme' => 'female',
                ],
                'expanded' => false,
                'multiple' => false,
                'mapped' => false,
                'data' => $defaultGender,
                'attr' => [
                    'class' => 'mt-5',
                ],
            ]);

        if ($options['is_admin']) {
            $builder->add('isAdmin', CheckboxType::class, [
                'label' => 'Administrateur',
                'required' => false,
                'mapped' => false,
                'data' => in_array('ROLE_ADMIN', $options['data']->getRoles()),
                'attr' => [],
            ]);
        };
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
            'is_admin' => false,
        ]);
    }
}
