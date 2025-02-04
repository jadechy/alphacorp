<?php

namespace App\Form;

use App\Entity\Contest;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ContestType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('title', TextType::class, [
                'attr' => [
                    'class' => 'input',
                    'placeholder' => 'Titre'
                ]
            ])
            ->add('description', TextType::class, [
                'attr' => [
                    'class' => 'input',
                    'placeholder' => 'Description'
                ]
            ])
            ->add('startOn', null, [
                'widget' => 'single_text',
                'label' => 'Date de début',
                'attr' => [
                    'class' => 'input',
                ]

            ])
            ->add('endOn', null, [
                'widget' => 'single_text',
                'label' => 'Date de fin',
                'attr' => [
                    'class' => 'input',
                ]

            ])
            ->add('xp', NumberType::class, [
                'attr' => [
                    'placeholder' => 'xp',
                    'class' => 'input',
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Contest::class,
        ]);
    }
}
