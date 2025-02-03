document.addEventListener("DOMContentLoaded", function () {
  // Cibler tous les éléments avec la classe "remove-participant"
  const removeButtons = document.querySelectorAll(".remove-participant");

  // Boucle sur chaque bouton pour ajouter un gestionnaire d'événements
  removeButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();

      const participantId = this.dataset.participantId; // Récupère l'ID du participant
      const eventId = this.dataset.eventId; // Récupère l'ID de l'événement
      // Effectuer la requête AJAX avec Fetch
      console.log(
        document.querySelector(`[data-participant-id="${participantId}"]`)
      );

      fetch(`/admin/event/${eventId}/remove-participant/${participantId}`, {
        method: "DELETE", // Méthode DELETE
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            document
              .querySelector(`[data-participant-id="${participantId}"]`)
              .remove();

            // Si la requête réussie, supprimer l'élément participant du DOM
          } else {
            alert("Une erreur s'est produite.");
          }
        })
        .catch((error) => {
          // console.error("Error:", error);
          alert("Une erreur s'est produite.");
        });
    });
  });
});
