<?php

namespace App\Form;

use App\Entity\Rank;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class RankType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add(
                'title',
                TextType::class,
                [
                    'attr' => [
                        'class' => 'input',
                        'placeholder' => 'Nom d\'utilisateur'
                    ]
                ]
            )
            ->add(
                'minimum',
                NumberType::class,
                [
                    'attr' => [
                        'class' => 'input my-8',
                        'placeholder' => 'Nom d\'utilisateur'
                    ]
                ]
            )
            ->add(
                'description',
                TextType::class,
                [
                    'attr' => [
                        'class' => 'input',
                        'placeholder' => 'Nom d\'utilisateur'
                    ]
                ]
            )
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Rank::class,
        ]);
    }
}
