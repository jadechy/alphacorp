<?php

namespace App\EventSubscriber;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Routing\RouterInterface;

use App\Enum\StatusUserEnum;

class BannedUserSubscriber implements EventSubscriberInterface
{
    private TokenStorageInterface $tokenStorage;
    private RouterInterface $router;

    public function __construct(TokenStorageInterface $tokenStorage, RouterInterface $router)
    {
        $this->tokenStorage = $tokenStorage;
        $this->router = $router;
    }

    public function onKernelRequest(RequestEvent $event)
    {
        $token = $this->tokenStorage->getToken();
        $user = $token ? $token->getUser() : null;

        if ($user && method_exists($user, 'getStatus') && $user->getStatus() === StatusUserEnum::BANNED) {
            $request = $event->getRequest();
    
            $currentRoute = $request->attributes->get('_route');
            if ($currentRoute !== 'app_user_banned' && $currentRoute !== null) {
                $response = new RedirectResponse($this->router->generate('app_user_banned'));
                $event->setResponse($response);
            }
        }
    }

    public static function getSubscribedEvents()
    {
        return [
            KernelEvents::REQUEST => 'onKernelRequest',
        ];
    }
}
