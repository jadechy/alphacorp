document.addEventListener("DOMContentLoaded", function () {
  let addButton = document.getElementById("add-answer");

  if (addButton) {
    addButton.addEventListener("click", ajouterReponse);
  }

  let answersContainer = document.getElementById("answers");
  function ajouterReponse() {
    let prototype = document
      .querySelector("[data-prototype]")
      .getAttribute("data-prototype");
    let index = document.querySelectorAll("#answers .answer-item").length;
    let newForm = prototype.replace(/__name__/g, index);
    let newElement = document.createElement("div");
    newElement.classList.add("answer-item");
    newElement.innerHTML =
      newForm +
      '<button type="button" class="remove-answer btn-delete">Supprimer</button>';
    answersContainer.appendChild(newElement);
  }

  // Gestion des suppressions
  if (answersContainer)
    answersContainer.addEventListener("click", function (event) {
      if (event.target.classList.contains("remove-answer")) {
        event.target.parentElement.remove();
      }
    });
});
