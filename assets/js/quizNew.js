// document.addEventListener("DOMContentLoaded", function () {
//   const container = document.getElementById("groupe-reponse");

//   const reponseDiv = container.querySelector(".reponse");
//   if (reponseDiv) {
//     const prototype = reponseDiv.dataset.prototype;

//     if (!prototype) {
//       console.error("Prototype de réponse non trouvé !");
//       return;
//     }

//     const addButton = document.getElementById("add-reponse-btn");

//     function getCurrentIndex() {
//       return container.querySelectorAll('.reponse[id^="question_answers_"]')
//         .length;
//     }

//     addButton.addEventListener("click", () => {
//       let index = getCurrentIndex();

//       const newForm = prototype.replace(/__name__/g, index);

//       const newDiv = document.createElement("div");
//       newDiv.classList.add(
//         "reponse",
//         "bg-neutral-900",
//         "p-6",
//         "rounded",
//         "mb-4"
//       );
//       newDiv.setAttribute("id", `question_answers_${index}`);

//       const formContainer = document.createElement("div");
//       formContainer.innerHTML = newForm;
//       newDiv.appendChild(formContainer);

//       const input = newDiv.querySelector("input");
//       if (input) {
//         input.classList.add("input", "mb-3");
//       }
//       const checkboxDiv = newDiv.querySelector(
//         `#question_answers_${index} #question_answers_${index}> div:last-child`
//       );
//       console.log(checkboxDiv);
//       const wrapperCheckboxDiv = document.createElement("div");
//       wrapperCheckboxDiv.appendChild(checkboxDiv);
//       addDeleteButton(newDiv, wrapperCheckboxDiv);
//       wrapperCheckboxDiv.classList.add("flex", "justify-between");
//       newDiv.appendChild(wrapperCheckboxDiv);

//       container.appendChild(newDiv);
//     });

//     function addDeleteButton(reponseDiv, wrapperDiv) {
//       const deleteButton = document.createElement("button");
//       deleteButton.type = "button";
//       deleteButton.classList.add("btn-delete", "mt-2");
//       deleteButton.innerText = "Supprimer cette réponse";

//       deleteButton.addEventListener("click", () => {
//         reponseDiv.remove();
//         updateReponseNumbers();
//       });

//       wrapperDiv.appendChild(deleteButton);
//     }

//     function updateReponseNumbers() {
//       const reponses = container.querySelectorAll(
//         '.reponse[id^="question_answers_"]'
//       );

//       reponses.forEach((reponseDiv, i) => {
//         reponseDiv.setAttribute("id", `question_answers_${i}`);

//         const title = reponseDiv.querySelector("h2");
//         if (title) {
//           title.innerText = `Réponse ${i + 1}`;
//         }

//         const inputs = reponseDiv.querySelectorAll("input");
//         inputs.forEach((input) => {
//           if (input.name.includes("question[answers]")) {
//             input.name = input.name.replace(/\[\d+\]/, `[${i}]`);
//           }
//           if (input.id.includes("question_answers")) {
//             input.id = input.id.replace(/_\d+_/, `_${i}_`);
//           }
//         });

//         const oldDeleteButton = reponseDiv.querySelector(".btn-delete");
//         if (oldDeleteButton) oldDeleteButton.remove();

//         addDeleteButton(reponseDiv);
//       });

//       removeExtraDivs();
//     }

//     function removeExtraDivs() {
//       const emptyDivs = container.querySelectorAll(
//         '.reponse:not([id^="question_answers_"])'
//       );
//       emptyDivs.forEach((div) => div.remove());
//     }

//     updateReponseNumbers();
//   } else {
//     console.error(
//       "La div contenant le prototype des réponses n'a pas été trouvée."
//     );
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  let addButton = document.getElementById("add-answer");

  if (addButton) {
    addButton.addEventListener("click", ajouterReponse);
  }

  function ajouterReponse() {
    console.log("Bouton 'Ajouter une réponse' cliqué");

    let answersContainer = document.getElementById("answers");
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
  document
    .getElementById("answers")
    .addEventListener("click", function (event) {
      if (event.target.classList.contains("remove-answer")) {
        event.target.parentElement.remove();
        console.log("Réponse supprimée");
      }
    });
});
