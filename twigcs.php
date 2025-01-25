<?php

use FriendsOfTwig\Twigcs\Ruleset\Official;
use FriendsOfTwig\Twigcs\Config\Config;

$config = new Config();
$config
    ->setFinder(
        Config::createDefaultFinder()
            ->in(['templates']) // Chemin où se trouvent vos fichiers Twig
    )
    ->setRuleset(new Official()); // Règles officielles de Twig

return $config;
