<?php

namespace App\DataFixtures\Data;


class QuizData
{
    /**
     * @return array<int, array{
     *     title: string,
     *     description: string,
     *     questions: array<int, array{
     *         question: string,
     *         answers: array<int, string>,
     *         correct: int
     *     }>
     * }>
     */
    public static function getQuizs(): array
    {
        return [
            [
                "title" => "Leadership naturel",
                "description" => "Ce quiz évalue votre capacité à inspirer et à guider les autres dans différentes situations.",
                "questions" => [
                    [
                        "question" => "Comment réagissez-vous face à un défi inattendu ?",
                        "answers" => [
                            "Vous attendez que quelqu'un prenne une décision",
                            "Vous paniquez et évitez la confrontation",
                            "Vous analysez calmement la situation et proposez une solution",
                            "Vous laissez quelqu'un d'autre gérer"
                        ],
                        "correct" => 3
                    ],
                    [
                        "question" => "Quel est votre rôle typique dans un groupe ?",
                        "answers" => [
                            "Vous attendez que les autres prennent les initiatives",
                            "Vous donnez des ordres sans écouter les autres",
                            "Vous écoutez tout le monde et prenez la décision finale",
                            "Vous suivez le leader du groupe"
                        ],
                        "correct" => 3
                    ],
                    [
                        "question" => "Comment gérez-vous un conflit entre deux collègues ?",
                        "answers" => [
                            "Vous ne vous en mêlez pas",
                            "Vous encouragez l’un des deux à dominer l’autre",
                            "Vous cherchez une solution où tout le monde est gagnant",
                            "Vous laissez la tension s’installer et voir ce qui se passe"
                        ],
                        "correct" => 3
                    ],
                    [
                        "question" => "Comment motivez-vous une équipe face à un projet difficile ?",
                        "answers" => [
                            "Vous leur imposez un rythme sans discussion",
                            "Vous trouvez ce qui motive chaque membre et adaptez votre approche",
                            "Vous laissez l'équipe gérer seule",
                            "Vous critiquez leur travail pour les pousser à s'améliorer"
                        ],
                        "correct" => 2
                    ],
                    [
                        "question" => "Quel est le trait le plus important d’un bon leader ?",
                        "answers" => [
                            "L'autorité",
                            "L'écoute active et la communication",
                            "La capacité à imposer ses décisions",
                            "La volonté de prendre tous les risques sans réfléchir"
                        ],
                        "correct" => 2
                    ],
                    [
                        "question" => "Que faites-vous lorsqu’un membre de votre équipe commet une erreur ?",
                        "answers" => [
                            "Vous l’ignorez et continuez",
                            "Vous le blâmez devant tout le monde pour qu'il ne recommence pas",
                            "Vous lui expliquez calmement son erreur et l’aidez à s’améliorer",
                            "Vous prenez le contrôle et faites tout vous-même"
                        ],
                        "correct" => 3
                    ],
                    [
                        "question" => "Comment abordez-vous une situation où vous devez déléguer une tâche importante ?",
                        "answers" => [
                            "Vous ne déléguez pas et faites tout vous-même",
                            "Vous déléguez sans donner d'instructions précises",
                            "Vous choisissez la bonne personne et lui donnez des directives claires",
                            "Vous attendez que quelqu'un se propose avant de décider"
                        ],
                        "correct" => 3
                    ]
                ]
            ],
            [
                "title" => "Confiance en soi",
                "description" => "Découvrez si vous avez la posture et l'attitude d’un vrai homme alpha.",
                "questions" => [
                    [
                        "question" => "Comment entrez-vous dans une pièce remplie d’inconnus ?",
                        "answers" => [
                            "Vous baissez la tête et évitez le regard des gens",
                            "Vous entrez avec assurance, dos droit, regard franc",
                            "Vous attendez que quelqu’un vienne vous parler",
                            "Vous vous asseyez discrètement dans un coin"
                        ],
                        "correct" => 1
                    ],
                    [
                        "question" => "Comment réagissez-vous face à une critique ?",
                        "answers" => [
                            "Vous vous énervez et vous défendez agressivement",
                            "Vous écoutez, analysez et répondez calmement si nécessaire",
                            "Vous ignorez complètement la critique",
                            "Vous vous excusez immédiatement même si vous n’êtes pas en tort"
                        ],
                        "correct" => 1
                    ],
                    [
                        "question" => "Comment gérez-vous une prise de parole en public ?",
                        "answers" => [
                            "Vous évitez à tout prix d’être mis en avant",
                            "Vous prenez la parole avec confiance et charisme",
                            "Vous parlez rapidement pour en finir au plus vite",
                            "Vous lisez vos notes sans lever les yeux"
                        ],
                        "correct" => 1
                    ],
                    [
                        "question" => "Quelle est votre réaction face à une situation inconnue ?",
                        "answers" => [
                            "Vous hésitez longtemps avant d’agir",
                            "Vous prenez l’initiative et vous adaptez rapidement",
                            "Vous attendez que quelqu’un vous dise quoi faire",
                            "Vous abandonnez immédiatement si ça semble trop difficile"
                        ],
                        "correct" => 1
                    ],
                    [
                        "question" => "Comment réagissez-vous lorsqu'une personne ne vous respecte pas ?",
                        "answers" => [
                            "Vous restez silencieux et laissez passer",
                            "Vous affirmez calmement vos limites sans vous énerver",
                            "Vous contre-attaquez immédiatement avec agressivité",
                            "Vous essayez de plaire à la personne pour éviter le conflit"
                        ],
                        "correct" => 1
                    ],
                    [
                        "question" => "Que faites-vous lorsqu'un défi se présente à vous ?",
                        "answers" => [
                            "Vous trouvez des excuses pour ne pas le relever",
                            "Vous l'affrontez avec détermination, peu importe la difficulté",
                            "Vous attendez de voir comment les autres réagissent",
                            "Vous abandonnez dès que ça devient compliqué"
                        ],
                        "correct" => 1
                    ],
                    [
                        "question" => "Comment abordez-vous une conversation avec un inconnu ?",
                        "answers" => [
                            "Vous attendez que l’autre personne fasse le premier pas",
                            "Vous entamez la discussion avec assurance et curiosité",
                            "Vous hésitez et bafouillez en cherchant vos mots",
                            "Vous évitez les conversations avec des inconnus"
                        ],
                        "correct" => 1
                    ]
                ]
            ],
            [
                "title" => "Dominer ou être dominé ?",
                "description" => "Êtes-vous un leader ou un suiveur ? Ce quiz vous aidera à le savoir.",
                "questions" => [
                    [
                        "question" => "Quel est votre comportement en cas de désaccord ?",
                        "answers" => [
                            "Vous évitez le conflit à tout prix",
                            "Vous écoutez, argumentez avec logique et assertivité",
                            "Vous imposez votre point de vue sans écouter",
                            "Vous acceptez le point de vue des autres sans discussion"
                        ],
                        "correct" => 1
                    ],
                    [
                        "question" => "Comment réagissez-vous lorsque vous devez prendre une décision importante ?",
                        "answers" => [
                            "Vous attendez que quelqu'un d'autre décide pour vous",
                            "Vous analysez la situation et prenez une décision éclairée",
                            "Vous prenez une décision impulsive sans réfléchir",
                            "Vous demandez l’avis de tout le monde et suivez la majorité"
                        ],
                        "correct" => 1
                    ],
                    [
                        "question" => "Quel rôle prenez-vous dans un travail d'équipe ?",
                        "answers" => [
                            "Vous attendez que quelqu'un vous dise quoi faire",
                            "Vous organisez les tâches et motivez les autres",
                            "Vous critiquez sans proposer de solutions",
                            "Vous laissez les autres tout gérer"
                        ],
                        "correct" => 1
                    ],
                    [
                        "question" => "Comment réagissez-vous face à un défi ?",
                        "answers" => [
                            "Vous abandonnez dès que c'est difficile",
                            "Vous relevez le défi et trouvez une solution",
                            "Vous déléguez immédiatement à quelqu'un d'autre",
                            "Vous attendez de voir ce que font les autres avant d’agir"
                        ],
                        "correct" => 1
                    ],
                    [
                        "question" => "Lors d’une discussion, comment exprimez-vous vos idées ?",
                        "answers" => [
                            "Vous parlez peu et laissez les autres décider",
                            "Vous exprimez vos idées avec confiance et respect",
                            "Vous coupez la parole et imposez votre avis",
                            "Vous évitez les discussions par peur du jugement"
                        ],
                        "correct" => 1
                    ],
                    [
                        "question" => "Comment gérez-vous une situation où quelqu'un tente de vous manipuler ?",
                        "answers" => [
                            "Vous suivez ses ordres sans poser de questions",
                            "Vous identifiez la manipulation et répondez avec fermeté",
                            "Vous essayez de manipuler en retour",
                            "Vous acceptez la situation pour éviter les problèmes"
                        ],
                        "correct" => 1
                    ],
                    [
                        "question" => "Comment motivez-vous les autres autour de vous ?",
                        "answers" => [
                            "Vous ne vous impliquez pas dans la motivation des autres",
                            "Vous les encouragez et montrez l'exemple",
                            "Vous leur imposez votre manière de faire",
                            "Vous laissez les autres gérer seuls"
                        ],
                        "correct" => 1
                    ]
                ]
            ],
            [
                "title" => "Charisme et influence",
                "description" => "Testez votre capacité à captiver et influencer votre entourage.",
                "questions" => [
                    [
                        "question" => "Comment faites-vous une première impression forte ?",
                        "answers" => [
                            "En restant discret et évitant d'attirer l’attention",
                            "En parlant fort et en imposant votre présence",
                            "En utilisant un langage corporel confiant et en engageant la conversation",
                            "En attendant que quelqu’un vienne vous voir"
                        ],
                        "correct" => 2
                    ],
                    [
                        "question" => "Comment captez-vous l’attention d’un groupe ?",
                        "answers" => [
                            "En parlant avec assurance et en captivant votre audience",
                            "En criant plus fort que tout le monde",
                            "En évitant de trop parler pour ne pas déranger",
                            "En vous isolant et en espérant qu’on vous remarque"
                        ],
                        "correct" => 0
                    ],
                    [
                        "question" => "Quelle est la clé d’une communication charismatique ?",
                        "answers" => [
                            "Parler vite et sans pause",
                            "Écouter attentivement et parler avec conviction",
                            "Éviter le contact visuel pour ne pas intimider",
                            "Interrompre les autres pour dominer la conversation"
                        ],
                        "correct" => 1
                    ],
                    [
                        "question" => "Comment réagissez-vous face à un désaccord public ?",
                        "answers" => [
                            "Vous élevez la voix pour vous imposer",
                            "Vous gardez votre calme et expliquez votre point de vue clairement",
                            "Vous évitez de répondre pour ne pas créer de tensions",
                            "Vous changez de sujet pour esquiver le conflit"
                        ],
                        "correct" => 1
                    ],
                    [
                        "question" => "Quelle est votre posture lorsque vous entrez dans une pièce remplie de personnes ?",
                        "answers" => [
                            "Tête baissée pour éviter les regards",
                            "Bras croisés pour montrer que vous êtes sérieux",
                            "Vous regardez votre téléphone pour éviter de croiser des regards",
                            "Dos droit, regard franc et sourire naturel",
                        ],
                        "correct" => 3
                    ],
                    [
                        "question" => "Comment adaptez-vous votre discours selon votre interlocuteur ?",
                        "answers" => [
                            "En observant et en ajustant votre ton et vos mots",
                            "En parlant de la même façon à tout le monde",
                            "En évitant les discussions pour ne pas faire d’erreurs",
                            "En dominant la conversation quel que soit l’interlocuteur"
                        ],
                        "correct" => 0
                    ],
                    [
                        "question" => "Comment inspirez-vous confiance aux autres ?",
                        "answers" => [
                            "En étant authentique et en maintenant un langage corporel ouvert",
                            "En racontant des histoires exagérées pour impressionner",
                            "En évitant les conversations personnelles",
                            "En donnant des ordres sans justification"
                        ],
                        "correct" => 0
                    ]
                ]
            ],
            [
                "title" => "Contrôle émotionnel",
                "description" => "Découvrez si vous avez la maîtrise émotionnelle d’un véritable homme alpha.",
                "questions" => [
                    [
                        "question" => "Que faites-vous en cas de frustration intense ?",
                        "answers" => [
                            "Vous gardez votre calme, respirez et répondez avec contrôle",
                            "Vous fuyez la situation pour éviter toute confrontation",
                            "Vous explosez et laissez votre colère s'exprimer",
                            "Vous vous mettez sur la défensive et attaquez verbalement"
                        ],
                        "correct" => 2
                    ],
                    [
                        "question" => "Que faites-vous lorsque quelqu'un vous critique publiquement ?",
                        "answers" => [
                            "Vous éclatez de rire et faites un commentaire sarcastique",
                            "Vous restez stoïque, ne laissez rien paraître et répondez calmement",
                            "Vous quittez immédiatement la pièce, incapable de supporter l'humiliation",
                            "Vous réagissez avec un éclat de colère et répondez violemment"
                        ],
                        "correct" => 0
                    ],
                    [
                        "question" => "En cas de stress important, comment réagissez-vous ?",
                        "answers" => [
                            "Vous respirez profondément et gardez votre sang-froid",
                            "Vous courez vers la sortie, la panique vous envahit",
                            "Vous lancez un rugissement de frustration et brisez ce qui est autour de vous",
                            "Vous vous mettez dans un coin et commencez à pleurer"
                        ],
                        "correct" => 2
                    ],
                    [
                        "question" => "Que faites-vous lorsqu’un collègue tente de vous déstabiliser ?",
                        "answers" => [
                            "Vous gardez votre calme et répondez avec une pointe d'humour",
                            "Vous lui montrez que vous êtes le plus fort et que personne ne vous touche",
                            "Vous quittez le bureau en pleurant dans votre voiture",
                            "Vous le confrontez immédiatement et l’humiliez en public"
                        ],
                        "correct" => 1
                    ],
                    [
                        "question" => "En cas de conflit avec un ami, comment réagissez-vous ?",
                        "answers" => [
                            "Vous éclatez de rage et abandonnez la relation",
                            "Vous lui parlez calmement et tentez de résoudre la situation avec tact",
                            "Vous partez sans dire un mot, la colère bouillonnant en vous",
                            "Vous l’ignorez et attendez qu'il vienne s'excuser"
                        ],
                        "correct" => 0
                    ],
                    [
                        "question" => "Que faites-vous lors d’un échec personnel ?",
                        "answers" => [
                            "Vous pleurez dans votre lit pendant trois jours",
                            "Vous vous levez, souriez et recommencez avec plus de force",
                            "Vous frappez quelque chose pour extérioriser votre frustration",
                            "Vous vous cachez sous une couverture, incapable de faire face à la situation"
                        ],
                        "correct" => 1
                    ],
                    [
                        "question" => "Lors d’une situation tendue, quelle est votre réaction ?",
                        "answers" => [
                            "Vous commencez à hurler et à agresser verbalement les autres",
                            "Vous fuyez la situation en espérant qu’elle se résolve d’elle-même",
                            "Vous vous effondrez émotionnellement et ne savez pas quoi faire",
                            "Vous devenez calme comme une mer calme avant la tempête",
                        ],
                        "correct" => 3
                    ]
                ]
            ],
            [
                "title" => "Détermination et persévérance",
                "description" => "Évaluez si vous avez la véritable détermination d’un homme alpha prêt à conquérir le monde.",
                "questions" => [
                    [
                        "question" => "Vous entreprenez un projet ambitieux et rencontrez un obstacle majeur. Que faites-vous ?",
                        "answers" => [
                            "Vous abandonnez, après tout, pourquoi se fatiguer ?",
                            "Vous cherchez des solutions et foncez, comme un homme alpha. Rien n'arrête un vrai mec.",
                            "Vous attendez que quelqu’un d’autre règle le problème. C’est bien la vie.",
                            "Vous vous allongez sur votre canapé et demandez à quelqu’un de vous apporter une bière."
                        ],
                        "correct" => 1
                    ],
                    [
                        "question" => "Un obstacle vous bloque. Votre réaction ?",
                        "answers" => [
                            "Vous jetez l'éponge et vous cherchez une excuse. C’est trop difficile.",
                            "Vous vous ressaisissez, vous refaites tout de zéro. Les obstacles sont faits pour être franchis.",
                            "Vous vous dites que c’est la faute de la technologie. Vous aimez bien blâmer la technologie.",
                            "Vous envoyez un message à un ami pour vous plaindre, c’est plus facile que de résoudre le problème."
                        ],
                        "correct" => 1
                    ],
                    [
                        "question" => "Votre plan a échoué de manière spectaculaire. Vous ?",
                        "answers" => [
                            "Vous abandonnez et vous faites semblant que ce n'était pas important.",
                            "Vous riez, vous ajustez votre stratégie et vous attaquez à nouveau. Ce n'est qu'un petit échec.",
                            "Vous accusez les autres, après tout, il faut bien quelqu'un à blâmer.",
                            "Vous commencez à en parler à tout le monde, histoire d’avoir un peu de pitié."
                        ],
                        "correct" => 1
                    ],
                    [
                        "question" => "Vous avez atteint un objectif. Que faites-vous ?",
                        "answers" => [
                            "Vous vous reposez, vous vous offrez une petite pause bien méritée.",
                            "Vous levez les bras, puis vous partez attaquer un défi encore plus grand. Pas de répit pour un alpha.",
                            "Vous dites que c'était trop facile, puis vous vous installez devant la télé.",
                            "Vous vous remettez immédiatement à une autre tâche, histoire de ne jamais perdre ce rythme."
                        ],
                        "correct" => 1
                    ],
                    [
                        "question" => "Un proche vous dit qu’il ne croit pas en votre projet. Quelle est votre réaction ?",
                        "answers" => [
                            "Vous lui dites de se taire et vous lui montrez de quoi vous êtes capable.",
                            "Vous commencez à douter, après tout, il a sûrement raison.",
                            "Vous vous laissez démoraliser et passez à autre chose.",
                            "Vous l’ignorez et continuez comme si de rien n’était, vous êtes un lion dans une cage de moutons."
                        ],
                        "correct" => 0
                    ],
                    [
                        "question" => "Vous êtes fatigué et démotivé. Vous avez l’option de travailler ou de traîner. Que choisissez-vous ?",
                        "answers" => [
                            "Vous vous reposez. Vous avez bien mérité un peu de relaxation.",
                            "Vous mettez les bouchées doubles et vous écrasez tout sur votre passage. Vous êtes là pour gagner.",
                            "Vous vous laissez emporter par la procrastination, après tout, demain est un autre jour.",
                            "Vous appelez un ami pour discuter de tout sauf du travail, parce que ce n’est pas comme si vous en aviez besoin."
                        ],
                        "correct" => 1
                    ],
                    [
                        "question" => "Quel est votre comportement face à un défi imprévu ?",
                        "answers" => [
                            "Vous prenez une pause pour réfléchir... ou juste pour procrastiner.",
                            "Vous foncez, prêt à tout. Vous savez qu’un vrai alpha ne recule devant rien.",
                            "Vous laissez le problème se régler tout seul, parce que ce n’est pas vraiment votre responsabilité.",
                            "Vous jetez un coup d’œil sur les réseaux sociaux, en attendant que ça passe."
                        ],
                        "correct" => 1
                    ]
                ]
            ]
        ];
    }
}
