<?php

namespace App\Service;

use App\Entity\Academy;
use Stripe\Stripe;
use Stripe\Checkout\Session;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class StripeService
{

    public function __construct(private string $secretKey, private UrlGeneratorInterface $urlGenerator)
    {
    }

    public function createCheckoutSession(Academy $academy): Session
    {
        Stripe::setApiKey($this->secretKey);

        return Session::create([
            'payment_method_types' => ['card'],
            'line_items' => [[
                'price_data' => [
                    'currency' => 'eur',
                    'product_data' => [
                        'name' => $academy->getTitle(),
                    ],
                    'unit_amount' => $academy->getPrice() * 100,
                ],
                'quantity' => 1,
            ]],
            'mode' => 'payment',
            'success_url' => $this->urlGenerator->generate('app_payment_success', [
                'id' => $academy->getId()
            ], UrlGeneratorInterface::ABSOLUTE_URL),
            'cancel_url' => $this->urlGenerator->generate('app_payment_cancel', [
                'id' => $academy->getId()
            ], UrlGeneratorInterface::ABSOLUTE_URL),
        ]);
    }
}
