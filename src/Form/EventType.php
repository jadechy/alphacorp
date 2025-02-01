<?php

namespace App\Form;

use App\Entity\Event;
use App\Entity\User;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\FileType;

class EventType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('title', TextType::class, [
                'attr' => [
                    'class' => 'input',
                    'placeholder' => 'Titre de l\'évènement'
                ]
            ])
            ->add('shortDescription', TextType::class, [
                'attr' => [
                    'class' => 'input',
                    'placeholder' => 'Courte description de l\'évènement'
                ]
            ])
            ->add('longDescription', TextType::class, [
                'attr' => [
                    'class' => 'input',
                    'placeholder' => 'Longue description de l\'évènement'
                ]
            ])
            ->add('imageFile', FileType::class, [
                'label' => 'Image',
                'mapped' => false,
                'required' => false,
            ])
            ->add('location', TextType::class, [
                'attr' => [
                    'class' => 'input',
                    'placeholder' => 'Lieu de l\'évènement'
                ]
            ])
            ->add('startAt', null, [
                'widget' => 'single_text',
                'label' => 'Date de début'
            ])
            ->add('endAt', null, [
                'widget' => 'single_text',
                'label' => 'Date de fin'
            ])
        ;
        if ($options['is_admin']) {
            $builder->add('author', EntityType::class, [
                "class" => User::class,
                'choice_label' => 'username',
                'label' => 'Auhor',
                'attr' => [
                    'class' => 'dashboard-select',
                ]
            ])
                ->add('participants', EntityType::class, [
                    'class' => User::class,
                    'choices' => $options['participants'],
                    'multiple' => true,
                    'expanded' => false,
                    'choice_label' => 'email',
                    'label' => 'Sélectionner des participants',
                    'attr' => [
                        'class' => 'dashboard-select w-60 rounded',
                    ]

                ]);
        }
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Event::class,
            'is_admin' => false,
            "participants" => []
        ]);
    }
}
