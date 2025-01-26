<?php

namespace App\Form;

use App\Entity\Response;
use App\Entity\User;
use App\Enum\ResponseStatusEnum;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EnumType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

use Symfony\Component\Form\Extension\Core\Type\TextType;

class ResponseType extends AbstractType
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
            ->add('author', EntityType::class, [ // Ajout du champ user
                'class' => User::class, // Classe de l'entité User
                'choice_label' => 'username', // Propriété à afficher dans le select
                'placeholder' => 'Sélectionnez un utilisateur', // Optionnel, pour une valeur par défaut
                'attr' => [
                    'class' => 'select', // Ajout d'une classe CSS pour styliser le select
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
