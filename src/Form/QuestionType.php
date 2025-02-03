<?php

namespace App\Form;

use App\Entity\Answer;
use App\Entity\Question;
use App\Entity\Quiz;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use App\Form\AnswerType;

class QuestionType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('content', TextType::class, [
                'attr' => [
                    'class' => 'input',
                    'placeholder' => 'Question'
                ]
            ])
            ->add('xp', IntegerType::class, [
                'attr' => [
                    'class' => 'input',
                    'placeholder' => 'Nombre d\'XP'
                ]
            ])
            ->add('answers', CollectionType::class, [
                'entry_type' => AnswerType::class,
                "label" => false,
                'allow_add' => true,
                'allow_delete' => true,
                'block_name' => 'answers',
                'by_reference' => false,
                'prototype' => true,
                'block_name' => 'answers',
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Question::class,
        ]);
    }
}
