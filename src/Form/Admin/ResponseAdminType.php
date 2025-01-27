<?php

namespace App\Form\Admin;

use App\Entity\Response;
use App\Entity\User;
use App\Enum\ResponseStatusEnum;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EnumType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

use Symfony\Component\Form\Extension\Core\Type\TextType;

class ResponseAdminType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('content', TextType::class, [
                'attr' => [
                    'class' => 'input',
                    'placeholder' => 'Votre réponse'
                ]
            ])
            ->add('status', EnumType::class, [
                "class" => ResponseStatusEnum::class,
                'label' => 'Status',
                'attr' => [
                    'class' => 'dashboard-select',
                ]
            ])
            ->add('author', EntityType::class, [
                'class' => User::class,
                'choice_label' => 'username',
                'placeholder' => 'Sélectionnez un utilisateur',
                'attr' => [
                    'class' => 'select',
                ],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Response::class,
        ]);
    }
}
