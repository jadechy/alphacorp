<?php

namespace App\Controller\Auth;

namespace App\Controller\Auth;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Persistence\ManagerRegistry;

use Symfony\Component\Uid\Uuid;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

use App\Entity\User;
use App\Form\RegistrationType;
use App\Enum\StatusUserEnum;

class AuthController extends AbstractController
{
    #[Route(path: '/login', name: 'app_login')]
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();

        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('auth/login.html.twig', [
            'last_username' => $lastUsername,
            'error' => $error,
        ]);
    }

    #[Route(path: '/logout', name: 'app_logout')]
    public function logout(): void
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }

    #[Route('/register', name: 'app_register')]
    public function register(Request $request, UserPasswordHasherInterface $passwordHasher, EntityManagerInterface $entityManager): Response
    {
        $user = new User();
        $form = $this->createForm(RegistrationType::class, $user);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            /** @var string $password */
            $password = $form->get('plainPassword')->getData();
            $user->setPlainPassword($password);

            $gender = $form->get('gender')->getData();
            if ($gender === 'male') {
                $user->setRoles(['ROLE_ALPHA']);
            } elseif ($gender === 'female') {
                $user->setRoles(['ROLE_SUPERVISOR']);
            }

            $user->setStatus(StatusUserEnum::ACTIVE);

            $entityManager->persist($user);
            $entityManager->flush();

            $this->addFlash('success', 'Votre compte a été créé avec succès.');
            return $this->redirectToRoute('app_login');
        }

        return $this->render('auth/register.html.twig', [
            'registrationForm' => $form->createView(),
        ]);
    }

    #[Route('/forgot', name: 'app_forgot')]
    public function forgot(Request $request, ManagerRegistry $doctrine, MailerInterface $mailer): Response
    {
        $email = $request->request->get('_email');

        if ($email) {
            $user = $doctrine->getRepository(User::class)->findOneBy(['email' => $email]);
            if (!$user) {
                $this->addFlash('error', 'Aucun utilisateur trouvé avec cette adresse email.');
                return $this->redirectToRoute('app_forgot');
            }

            $resetToken = Uuid::v4();
            $user->setResetToken($resetToken);

            $entityManager = $doctrine->getManager();
            $entityManager->persist($user);
            $entityManager->flush();

            $resetLink = $this->generateUrl(
                'app_reset',
                ['token' => $resetToken],
                UrlGeneratorInterface::ABSOLUTE_URL
            );

            $email = (new Email())
                ->from('contact@alphacorp.fr')
                ->to($user->getEmail())
                ->subject('Réinitialisation de votre mot de passe')
                ->html($this->renderView('emails/forgot.html.twig', [
                    'user' => $user,
                    'resetLink' => $resetLink, // Pass the reset link explicitly
                ]));
            $mailer->send($email);

            $this->addFlash('success', 'Un email de réinitialisation de mot de passe a été envoyé.');

            return $this->redirectToRoute('app_login');
        }

        return $this->render('auth/forgot.html.twig');
    }

    #[Route('/reset/{token}', name: 'app_reset')]
    public function reset(Request $request, string $token, ManagerRegistry $doctrine, UserPasswordHasherInterface $passwordHasher): Response
    {
        $user = $doctrine->getRepository(User::class)->findOneBy(['resetToken' => $token]);

        if (!$user) {
            throw $this->createNotFoundException('Jeton de réinitialisation invalide.');
        }
        if ($request->isMethod('POST')) {
            /** @var string $password */
            $password = $request->get('password');
            $repeatPassword = $request->get('repeat_password');

            if ($password !== $repeatPassword) {
                $this->addFlash('error', 'Les mots de passe ne correspondent pas.');
                return $this->redirectToRoute('app_reset', ['token' => $token]);
            }

            $user->setPlainPassword($password);
            $user->setResetToken(null);

            $entityManager = $doctrine->getManager();
            $entityManager->flush();

            $this->addFlash('success', 'Votre mot de passe a été réinitialisé avec succès.');
            return $this->redirectToRoute('app_login');
        }

        return $this->render('auth/reset.html.twig', [
            'token' => $token,
            'email' => $user->getEmail(),
        ]);
    }
}
