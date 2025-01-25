<?php

namespace App\Form;

use App\Entity\Category;
use App\Entity\Language;
use App\Entity\Topic;
use App\Entity\User;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

use Symfony\Component\Form\Extension\Core\Type\TextType;

class TopicType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('title', TextType::class, ['attr' => [
                'class' => 'w-full px-8 py-4 mt-5 rounded-lg font-medium bg-white border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white',
                'placeholder' => 'Titre'
                ]
            ])
            ->add('shortDescription', TextType::class, ['attr' => [
                'class' => 'w-full px-8 py-4 mt-5 rounded-lg font-medium bg-white border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white',
                'placeholder' => 'Courte description'
                ]
            ])
            ->add('longDescription', TextType::class, ['attr' => [
                'class' => 'w-full px-8 py-4 mt-5 rounded-lg font-medium bg-white border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white',
                'placeholder' => 'Longue description'
                ]
            ])
            ->add('category', EntityType::class, [
                'class' => Category::class,
                'choice_label' => 'name',
                'attr' => [
                    'class' => 'mt-2 p-2 bg-gray-100 border border-gray-200 rounded-md w-full text-sm focus:outline-none focus:ring-2 focus:border-gray-400 focus:bg-white'
                ]
            ])
            ->add('language', EntityType::class, [
                'class' => Language::class,
                'choice_label' => 'name',
                'attr' => [
                    'class' => 'mt-2 p-2 bg-gray-100 border border-gray-200 rounded-md w-full text-sm focus:outline-none focus:ring-2 focus:border-gray-400 focus:bg-white'
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Topic::class,
        ]);
    }
}
