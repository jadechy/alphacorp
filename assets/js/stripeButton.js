import { loadStripe } from "@stripe/stripe-js";

document.addEventListener("DOMContentLoaded", function () {
  const checkoutButton = document.getElementById("checkout-button");

  if (checkoutButton) {
    checkoutButton.addEventListener("click", async function () {
      try {
        // Vérifier si les attributs de données sont bien présents
        if (
          !checkoutButton.dataset.academyId ||
          !checkoutButton.dataset.stripeKey
        ) {
          console.error("Données manquantes sur le bouton de paiement.");
          return;
        }

        // Récupération de la session Stripe
        const response = await fetch(
          `/payment/${checkoutButton.dataset.academyId}`
        );
        const session = await response.json();

        // Charger Stripe (await nécessaire car loadStripe retourne une Promise)
        const stripe = await loadStripe(checkoutButton.dataset.stripeKey);

        if (!stripe) {
          console.error("Échec du chargement de Stripe.");
          return;
        }

        // Redirection vers le checkout Stripe
        const { error } = await stripe.redirectToCheckout({
          sessionId: session.id,
        });

        if (error) {
          console.error("Erreur Stripe:", error.message);
        }
      } catch (err) {
        console.error("Erreur lors du processus de paiement:", err);
      }
    });
  }
});
