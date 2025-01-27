<?php

namespace App\Form;

use App\Entity\Category;
use App\Entity\Language;
use App\Entity\Topic;
use App\Enum\TopicStatusEnum;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EnumType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

use Symfony\Component\Form\Extension\Core\Type\TextType;

class TopicType extends AbstractType
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
            ->add('shortDescription', TextType::class, [
                'attr' => [
                    'class' => 'input',
                    'placeholder' => 'Courte description'
                ]
            ])
            ->add('longDescription', TextType::class, [
                'attr' => [
                    'class' => 'input',
                    'placeholder' => 'Longue description'
                ]
            ])
            ->add('category', EntityType::class, [
                'class' => Category::class,
                'choice_label' => 'name',
                'attr' => [
                    'class' => 'dashboard-select',
                ]
            ])
            ->add('language', EntityType::class, [
                'class' => Language::class,
                'choice_label' => 'name',
                'attr' => [
                    'class' => 'dashboard-select',
                ]
            ]);
        if ($options['is_admin']) {
            $builder->add('status', EnumType::class, [
                "class" => TopicStatusEnum::class,
                'label' => 'Status',
                'attr' => [
                    'class' => 'dashboard-select',
                ]
            ]);
        }
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Topic::class,
            'is_admin' => false,
        ]);
    }
}
