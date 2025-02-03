(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _js_filterResponses_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/filterResponses.js */ "./assets/js/filterResponses.js");
/* harmony import */ var _js_filterResponses_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_filterResponses_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_filterTopics_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/filterTopics.js */ "./assets/js/filterTopics.js");
/* harmony import */ var _js_filterTopics_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_filterTopics_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_quizNew_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/quizNew.js */ "./assets/js/quizNew.js");
/* harmony import */ var _js_quizNew_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_quizNew_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_deleteParticipantEvent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/deleteParticipantEvent.js */ "./assets/js/deleteParticipantEvent.js");
/* harmony import */ var _js_deleteParticipantEvent_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_deleteParticipantEvent_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_accordion_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/accordion.js */ "./assets/js/accordion.js");
/* harmony import */ var _js_accordion_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_accordion_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _js_header_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/header.js */ "./assets/js/header.js");
/* harmony import */ var _js_header_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_header_js__WEBPACK_IMPORTED_MODULE_6__);
// import "./bootstrap.js";

/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */







console.log("Turbo actif ?", typeof Turbo !== "undefined" ? "Oui" : "Non");
console.log("This log comes from assets/app.js - welcome to AssetMapper! 🎉");

/***/ }),

/***/ "./assets/js/accordion.js":
/*!********************************!*\
  !*** ./assets/js/accordion.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
document.querySelectorAll(".accordion-btn").forEach(function (button) {
  button.addEventListener("click", function () {
    var content = button.nextElementSibling;
    var icon = button.querySelector(".icon");
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      icon.style.transform = "rotate(0deg)";
    } else {
      document.querySelectorAll(".accordion-content").forEach(function (item) {
        return item.style.maxHeight = null;
      });
      document.querySelectorAll(".icon").forEach(function (item) {
        return item.style.transform = "rotate(0deg)";
      });
      content.style.maxHeight = content.scrollHeight + "px";
      icon.style.transform = "rotate(180deg)";
    }
  });
});

/***/ }),

/***/ "./assets/js/deleteParticipantEvent.js":
/*!*********************************************!*\
  !*** ./assets/js/deleteParticipantEvent.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
document.addEventListener("DOMContentLoaded", function () {
  // Cibler tous les éléments avec la classe "remove-participant"
  var removeButtons = document.querySelectorAll(".remove-participant");

  // Boucle sur chaque bouton pour ajouter un gestionnaire d'événements
  removeButtons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      var participantId = this.dataset.participantId; // Récupère l'ID du participant
      var eventId = this.dataset.eventId; // Récupère l'ID de l'événement
      console.log("lala");
      console.log(document.getElementById("participant-".concat(participantId)));
      // Effectuer la requête AJAX avec Fetch
      console.log(document.querySelector("[data-participant-id=\"".concat(participantId, "\"]")));
      fetch("/admin/event/".concat(eventId, "/remove-participant/").concat(participantId), {
        method: "DELETE",
        // Méthode DELETE
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (response) {
        console.log(response);
        if (response.ok) {
          document.querySelector("[data-participant-id=\"".concat(participantId, "\"]")).remove();

          // Si la requête réussie, supprimer l'élément participant du DOM
        } else {
          alert("Une erreur s'est produite.");
        }
      })["catch"](function (error) {
        console.error("Error:", error);
        alert("Une erreur s'est produite.");
      });
    });
  });
});

/***/ }),

/***/ "./assets/js/filterResponses.js":
/*!**************************************!*\
  !*** ./assets/js/filterResponses.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
document.addEventListener("DOMContentLoaded", function () {
  var statusFilter = document.getElementById("status");
  if (statusFilter) {
    statusFilter.addEventListener("change", function () {
      filterResponses(statusFilter.value);
    });
  } else {
    console.error("Le filtre avec l'ID 'status' est introuvable.");
    return;
  }
  function filterResponses(filterValue) {
    // Récupérez toutes les lignes du tableau
    var rows = document.querySelectorAll("tr[data-status]");
    rows.forEach(function (row) {
      var rowStatus = row.dataset.status;

      // Montrez ou cachez les lignes en fonction du filtre
      if (filterValue === "all" || filterValue === rowStatus) {
        row.classList.remove("hidden");
      } else {
        row.classList.add("hidden");
      }
    });
  }
});

/***/ }),

/***/ "./assets/js/filterTopics.js":
/*!***********************************!*\
  !*** ./assets/js/filterTopics.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
document.addEventListener("DOMContentLoaded", function () {
  var langueSelect = document.getElementById("langue");
  var categorySelect = document.getElementById("category");
  var statusSelect = document.getElementById("status");
  if (langueSelect && categorySelect && statusSelect) {
    langueSelect.addEventListener("change", function () {
      filtreTopics(langueSelect.value, categorySelect.value, statusSelect.value);
    });
    categorySelect.addEventListener("change", function () {
      filtreTopics(langueSelect.value, categorySelect.value, statusSelect.value);
    });
    statusSelect.addEventListener("change", function () {
      filtreTopics(langueSelect.value, categorySelect.value, statusSelect.value);
    });
  }
  function filtreTopics(langue, category, status) {
    var topics = document.querySelectorAll("tr[data-status]");
    topics.forEach(function (topic) {
      if ((category === topic.dataset.category || category === "all") && (langue === topic.dataset.langue || langue === "all") && (status === topic.dataset.status || status === "all")) {
        topic.classList.remove("hidden");
      } else {
        topic.classList.add("hidden");
      }
    });
  }
});

/***/ }),

/***/ "./assets/js/header.js":
/*!*****************************!*\
  !*** ./assets/js/header.js ***!
  \*****************************/
/***/ (() => {

document.addEventListener("DOMContentLoaded", function () {
  var menuButton = document.getElementById("menu-button");
  var mobileMenu = document.getElementById("mobile-menu");
  var closeMenu = document.getElementById("close-menu");
  menuButton.addEventListener("click", function () {
    mobileMenu.classList.remove("-translate-x-full");
  });
  closeMenu.addEventListener("click", function () {
    mobileMenu.classList.add("-translate-x-full");
  });
});

/***/ }),

/***/ "./assets/js/quizNew.js":
/*!******************************!*\
  !*** ./assets/js/quizNew.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
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
  var addButton = document.getElementById("add-answer");
  if (addButton) {
    addButton.addEventListener("click", ajouterReponse);
  }
  function ajouterReponse() {
    console.log("Bouton 'Ajouter une réponse' cliqué");
    var answersContainer = document.getElementById("answers");
    var prototype = document.querySelector("[data-prototype]").getAttribute("data-prototype");
    var index = document.querySelectorAll("#answers .answer-item").length;
    var newForm = prototype.replace(/__name__/g, index);
    var newElement = document.createElement("div");
    newElement.classList.add("answer-item");
    newElement.innerHTML = newForm + '<button type="button" class="remove-answer btn-delete">Supprimer</button>';
    answersContainer.appendChild(newElement);
  }

  // Gestion des suppressions
  document.getElementById("answers").addEventListener("click", function (event) {
    if (event.target.classList.contains("remove-answer")) {
      event.target.parentElement.remove();
      console.log("Réponse supprimée");
    }
  });
});

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-9e2fdd"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQztJQUVsRCxJQUFJd0QsZ0JBQWdCLEdBQUd0RCxRQUFRLENBQUNvQixjQUFjLENBQUMsU0FBUyxDQUFDO0lBQ3pELElBQUltQyxTQUFTLEdBQUd2RCxRQUFRLENBQ3JCUSxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FDakNnRCxZQUFZLENBQUMsZ0JBQWdCLENBQUM7SUFDakMsSUFBSUMsS0FBSyxHQUFHekQsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDeUQsTUFBTTtJQUNyRSxJQUFJQyxPQUFPLEdBQUdKLFNBQVMsQ0FBQ0ssT0FBTyxDQUFDLFdBQVcsRUFBRUgsS0FBSyxDQUFDO0lBQ25ELElBQUlJLFVBQVUsR0FBRzdELFFBQVEsQ0FBQzhELGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDOUNELFVBQVUsQ0FBQ3RCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQztJQUN2Q3FCLFVBQVUsQ0FBQ0UsU0FBUyxHQUNsQkosT0FBTyxHQUNQLDJFQUEyRTtJQUM3RUwsZ0JBQWdCLENBQUNVLFdBQVcsQ0FBQ0gsVUFBVSxDQUFDO0VBQzFDOztFQUVBO0VBQ0E3RCxRQUFRLENBQ0xvQixjQUFjLENBQUMsU0FBUyxDQUFDLENBQ3pCaEIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVU2RCxLQUFLLEVBQUU7SUFDMUMsSUFBSUEsS0FBSyxDQUFDQyxNQUFNLENBQUMzQixTQUFTLENBQUM0QixRQUFRLENBQUMsZUFBZSxDQUFDLEVBQUU7TUFDcERGLEtBQUssQ0FBQ0MsTUFBTSxDQUFDRSxhQUFhLENBQUN4QyxNQUFNLENBQUMsQ0FBQztNQUNuQy9CLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixDQUFDO0lBQ2xDO0VBQ0YsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUNySkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hY2NvcmRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2RlbGV0ZVBhcnRpY2lwYW50RXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2ZpbHRlclJlc3BvbnNlcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZmlsdGVyVG9waWNzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3F1aXpOZXcuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzPzZiZTYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFwiLi9ib290c3RyYXAuanNcIjtcblxuLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBUaGlzIGZpbGUgd2lsbCBiZSBpbmNsdWRlZCBvbnRvIHRoZSBwYWdlIHZpYSB0aGUgaW1wb3J0bWFwKCkgVHdpZyBmdW5jdGlvbixcbiAqIHdoaWNoIHNob3VsZCBhbHJlYWR5IGJlIGluIHlvdXIgYmFzZS5odG1sLnR3aWcuXG4gKi9cbmltcG9ydCBcIi4vc3R5bGVzL2FwcC5jc3NcIjtcbmltcG9ydCBcIi4vanMvZmlsdGVyUmVzcG9uc2VzLmpzXCI7XG5pbXBvcnQgXCIuL2pzL2ZpbHRlclRvcGljcy5qc1wiO1xuaW1wb3J0IFwiLi9qcy9xdWl6TmV3LmpzXCI7XG5pbXBvcnQgXCIuL2pzL2RlbGV0ZVBhcnRpY2lwYW50RXZlbnQuanNcIjtcbmltcG9ydCBcIi4vanMvYWNjb3JkaW9uLmpzXCI7XG5pbXBvcnQgXCIuL2pzL2hlYWRlci5qc1wiO1xuXG5jb25zb2xlLmxvZyhcIlR1cmJvIGFjdGlmID9cIiwgdHlwZW9mIFR1cmJvICE9PSBcInVuZGVmaW5lZFwiID8gXCJPdWlcIiA6IFwiTm9uXCIpO1xuXG5jb25zb2xlLmxvZyhcIlRoaXMgbG9nIGNvbWVzIGZyb20gYXNzZXRzL2FwcC5qcyAtIHdlbGNvbWUgdG8gQXNzZXRNYXBwZXIhIPCfjolcIik7XG4iLCJkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFjY29yZGlvbi1idG5cIikuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBidXR0b24ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIGNvbnN0IGljb24gPSBidXR0b24ucXVlcnlTZWxlY3RvcihcIi5pY29uXCIpO1xuXG4gICAgaWYgKGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0KSB7XG4gICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IG51bGw7XG4gICAgICBpY29uLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKDBkZWcpXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFjY29yZGlvbi1jb250ZW50XCIpXG4gICAgICAgIC5mb3JFYWNoKChpdGVtKSA9PiAoaXRlbS5zdHlsZS5tYXhIZWlnaHQgPSBudWxsKSk7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5pY29uXCIpXG4gICAgICAgIC5mb3JFYWNoKChpdGVtKSA9PiAoaXRlbS5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSgwZGVnKVwiKSk7XG5cbiAgICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gY29udGVudC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XG4gICAgICBpY29uLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKDE4MGRlZylcIjtcbiAgICB9XG4gIH0pO1xufSk7XG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gIC8vIENpYmxlciB0b3VzIGxlcyDDqWzDqW1lbnRzIGF2ZWMgbGEgY2xhc3NlIFwicmVtb3ZlLXBhcnRpY2lwYW50XCJcbiAgY29uc3QgcmVtb3ZlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmVtb3ZlLXBhcnRpY2lwYW50XCIpO1xuXG4gIC8vIEJvdWNsZSBzdXIgY2hhcXVlIGJvdXRvbiBwb3VyIGFqb3V0ZXIgdW4gZ2VzdGlvbm5haXJlIGQnw6l2w6luZW1lbnRzXG4gIHJlbW92ZUJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBjb25zdCBwYXJ0aWNpcGFudElkID0gdGhpcy5kYXRhc2V0LnBhcnRpY2lwYW50SWQ7IC8vIFLDqWN1cMOocmUgbCdJRCBkdSBwYXJ0aWNpcGFudFxuICAgICAgY29uc3QgZXZlbnRJZCA9IHRoaXMuZGF0YXNldC5ldmVudElkOyAvLyBSw6ljdXDDqHJlIGwnSUQgZGUgbCfDqXbDqW5lbWVudFxuICAgICAgY29uc29sZS5sb2coXCJsYWxhXCIpO1xuICAgICAgY29uc29sZS5sb2coZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHBhcnRpY2lwYW50LSR7cGFydGljaXBhbnRJZH1gKSk7XG4gICAgICAvLyBFZmZlY3R1ZXIgbGEgcmVxdcOqdGUgQUpBWCBhdmVjIEZldGNoXG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcGFydGljaXBhbnQtaWQ9XCIke3BhcnRpY2lwYW50SWR9XCJdYClcbiAgICAgICk7XG5cbiAgICAgIGZldGNoKGAvYWRtaW4vZXZlbnQvJHtldmVudElkfS9yZW1vdmUtcGFydGljaXBhbnQvJHtwYXJ0aWNpcGFudElkfWAsIHtcbiAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLCAvLyBNw6l0aG9kZSBERUxFVEVcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBhcnRpY2lwYW50LWlkPVwiJHtwYXJ0aWNpcGFudElkfVwiXWApXG4gICAgICAgICAgICAgIC5yZW1vdmUoKTtcblxuICAgICAgICAgICAgLy8gU2kgbGEgcmVxdcOqdGUgcsOpdXNzaWUsIHN1cHByaW1lciBsJ8OpbMOpbWVudCBwYXJ0aWNpcGFudCBkdSBET01cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQoXCJVbmUgZXJyZXVyIHMnZXN0IHByb2R1aXRlLlwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycm9yKTtcbiAgICAgICAgICBhbGVydChcIlVuZSBlcnJldXIgcydlc3QgcHJvZHVpdGUuXCIpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59KTtcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgc3RhdHVzRmlsdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGF0dXNcIik7XG5cbiAgaWYgKHN0YXR1c0ZpbHRlcikge1xuICAgIHN0YXR1c0ZpbHRlci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgIGZpbHRlclJlc3BvbnNlcyhzdGF0dXNGaWx0ZXIudmFsdWUpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJMZSBmaWx0cmUgYXZlYyBsJ0lEICdzdGF0dXMnIGVzdCBpbnRyb3V2YWJsZS5cIik7XG4gICAgcmV0dXJuO1xuICB9XG4gIGZ1bmN0aW9uIGZpbHRlclJlc3BvbnNlcyhmaWx0ZXJWYWx1ZSkge1xuICAgIC8vIFLDqWN1cMOpcmV6IHRvdXRlcyBsZXMgbGlnbmVzIGR1IHRhYmxlYXVcbiAgICBjb25zdCByb3dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInRyW2RhdGEtc3RhdHVzXVwiKTtcblxuICAgIHJvd3MuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICBjb25zdCByb3dTdGF0dXMgPSByb3cuZGF0YXNldC5zdGF0dXM7XG5cbiAgICAgIC8vIE1vbnRyZXogb3UgY2FjaGV6IGxlcyBsaWduZXMgZW4gZm9uY3Rpb24gZHUgZmlsdHJlXG4gICAgICBpZiAoZmlsdGVyVmFsdWUgPT09IFwiYWxsXCIgfHwgZmlsdGVyVmFsdWUgPT09IHJvd1N0YXR1cykge1xuICAgICAgICByb3cuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59KTtcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgbGFuZ3VlU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsYW5ndWVcIik7XG4gIGNvbnN0IGNhdGVnb3J5U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXRlZ29yeVwiKTtcbiAgY29uc3Qgc3RhdHVzU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGF0dXNcIik7XG5cbiAgaWYgKGxhbmd1ZVNlbGVjdCAmJiBjYXRlZ29yeVNlbGVjdCAmJiBzdGF0dXNTZWxlY3QpIHtcbiAgICBsYW5ndWVTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICBmaWx0cmVUb3BpY3MoXG4gICAgICAgIGxhbmd1ZVNlbGVjdC52YWx1ZSxcbiAgICAgICAgY2F0ZWdvcnlTZWxlY3QudmFsdWUsXG4gICAgICAgIHN0YXR1c1NlbGVjdC52YWx1ZVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIGNhdGVnb3J5U2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgZmlsdHJlVG9waWNzKFxuICAgICAgICBsYW5ndWVTZWxlY3QudmFsdWUsXG4gICAgICAgIGNhdGVnb3J5U2VsZWN0LnZhbHVlLFxuICAgICAgICBzdGF0dXNTZWxlY3QudmFsdWVcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICBzdGF0dXNTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICBmaWx0cmVUb3BpY3MoXG4gICAgICAgIGxhbmd1ZVNlbGVjdC52YWx1ZSxcbiAgICAgICAgY2F0ZWdvcnlTZWxlY3QudmFsdWUsXG4gICAgICAgIHN0YXR1c1NlbGVjdC52YWx1ZVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbHRyZVRvcGljcyhsYW5ndWUsIGNhdGVnb3J5LCBzdGF0dXMpIHtcbiAgICBjb25zdCB0b3BpY3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwidHJbZGF0YS1zdGF0dXNdXCIpO1xuXG4gICAgdG9waWNzLmZvckVhY2goKHRvcGljKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIChjYXRlZ29yeSA9PT0gdG9waWMuZGF0YXNldC5jYXRlZ29yeSB8fCBjYXRlZ29yeSA9PT0gXCJhbGxcIikgJiZcbiAgICAgICAgKGxhbmd1ZSA9PT0gdG9waWMuZGF0YXNldC5sYW5ndWUgfHwgbGFuZ3VlID09PSBcImFsbFwiKSAmJlxuICAgICAgICAoc3RhdHVzID09PSB0b3BpYy5kYXRhc2V0LnN0YXR1cyB8fCBzdGF0dXMgPT09IFwiYWxsXCIpXG4gICAgICApIHtcbiAgICAgICAgdG9waWMuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvcGljLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn0pO1xuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51LWJ1dHRvblwiKTtcbiAgY29uc3QgbW9iaWxlTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9iaWxlLW1lbnVcIik7XG4gIGNvbnN0IGNsb3NlTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtbWVudVwiKTtcblxuICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbW9iaWxlTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiLXRyYW5zbGF0ZS14LWZ1bGxcIik7XG4gIH0pO1xuXG4gIGNsb3NlTWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LmFkZChcIi10cmFuc2xhdGUteC1mdWxsXCIpO1xuICB9KTtcbn0pO1xuIiwiLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuLy8gICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyb3VwZS1yZXBvbnNlXCIpO1xuXG4vLyAgIGNvbnN0IHJlcG9uc2VEaXYgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5yZXBvbnNlXCIpO1xuLy8gICBpZiAocmVwb25zZURpdikge1xuLy8gICAgIGNvbnN0IHByb3RvdHlwZSA9IHJlcG9uc2VEaXYuZGF0YXNldC5wcm90b3R5cGU7XG5cbi8vICAgICBpZiAoIXByb3RvdHlwZSkge1xuLy8gICAgICAgY29uc29sZS5lcnJvcihcIlByb3RvdHlwZSBkZSByw6lwb25zZSBub24gdHJvdXbDqSAhXCIpO1xuLy8gICAgICAgcmV0dXJuO1xuLy8gICAgIH1cblxuLy8gICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXJlcG9uc2UtYnRuXCIpO1xuXG4vLyAgICAgZnVuY3Rpb24gZ2V0Q3VycmVudEluZGV4KCkge1xuLy8gICAgICAgcmV0dXJuIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcucmVwb25zZVtpZF49XCJxdWVzdGlvbl9hbnN3ZXJzX1wiXScpXG4vLyAgICAgICAgIC5sZW5ndGg7XG4vLyAgICAgfVxuXG4vLyAgICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4vLyAgICAgICBsZXQgaW5kZXggPSBnZXRDdXJyZW50SW5kZXgoKTtcblxuLy8gICAgICAgY29uc3QgbmV3Rm9ybSA9IHByb3RvdHlwZS5yZXBsYWNlKC9fX25hbWVfXy9nLCBpbmRleCk7XG5cbi8vICAgICAgIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgICAgICBuZXdEaXYuY2xhc3NMaXN0LmFkZChcbi8vICAgICAgICAgXCJyZXBvbnNlXCIsXG4vLyAgICAgICAgIFwiYmctbmV1dHJhbC05MDBcIixcbi8vICAgICAgICAgXCJwLTZcIixcbi8vICAgICAgICAgXCJyb3VuZGVkXCIsXG4vLyAgICAgICAgIFwibWItNFwiXG4vLyAgICAgICApO1xuLy8gICAgICAgbmV3RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIGBxdWVzdGlvbl9hbnN3ZXJzXyR7aW5kZXh9YCk7XG5cbi8vICAgICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICAgICAgZm9ybUNvbnRhaW5lci5pbm5lckhUTUwgPSBuZXdGb3JtO1xuLy8gICAgICAgbmV3RGl2LmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xuXG4vLyAgICAgICBjb25zdCBpbnB1dCA9IG5ld0Rpdi5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG4vLyAgICAgICBpZiAoaW5wdXQpIHtcbi8vICAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZChcImlucHV0XCIsIFwibWItM1wiKTtcbi8vICAgICAgIH1cbi8vICAgICAgIGNvbnN0IGNoZWNrYm94RGl2ID0gbmV3RGl2LnF1ZXJ5U2VsZWN0b3IoXG4vLyAgICAgICAgIGAjcXVlc3Rpb25fYW5zd2Vyc18ke2luZGV4fSAjcXVlc3Rpb25fYW5zd2Vyc18ke2luZGV4fT4gZGl2Omxhc3QtY2hpbGRgXG4vLyAgICAgICApO1xuLy8gICAgICAgY29uc29sZS5sb2coY2hlY2tib3hEaXYpO1xuLy8gICAgICAgY29uc3Qgd3JhcHBlckNoZWNrYm94RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbi8vICAgICAgIHdyYXBwZXJDaGVja2JveERpdi5hcHBlbmRDaGlsZChjaGVja2JveERpdik7XG4vLyAgICAgICBhZGREZWxldGVCdXR0b24obmV3RGl2LCB3cmFwcGVyQ2hlY2tib3hEaXYpO1xuLy8gICAgICAgd3JhcHBlckNoZWNrYm94RGl2LmNsYXNzTGlzdC5hZGQoXCJmbGV4XCIsIFwianVzdGlmeS1iZXR3ZWVuXCIpO1xuLy8gICAgICAgbmV3RGl2LmFwcGVuZENoaWxkKHdyYXBwZXJDaGVja2JveERpdik7XG5cbi8vICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdEaXYpO1xuLy8gICAgIH0pO1xuXG4vLyAgICAgZnVuY3Rpb24gYWRkRGVsZXRlQnV0dG9uKHJlcG9uc2VEaXYsIHdyYXBwZXJEaXYpIHtcbi8vICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4vLyAgICAgICBkZWxldGVCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4vLyAgICAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImJ0bi1kZWxldGVcIiwgXCJtdC0yXCIpO1xuLy8gICAgICAgZGVsZXRlQnV0dG9uLmlubmVyVGV4dCA9IFwiU3VwcHJpbWVyIGNldHRlIHLDqXBvbnNlXCI7XG5cbi8vICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuLy8gICAgICAgICByZXBvbnNlRGl2LnJlbW92ZSgpO1xuLy8gICAgICAgICB1cGRhdGVSZXBvbnNlTnVtYmVycygpO1xuLy8gICAgICAgfSk7XG5cbi8vICAgICAgIHdyYXBwZXJEaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbi8vICAgICB9XG5cbi8vICAgICBmdW5jdGlvbiB1cGRhdGVSZXBvbnNlTnVtYmVycygpIHtcbi8vICAgICAgIGNvbnN0IHJlcG9uc2VzID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXG4vLyAgICAgICAgICcucmVwb25zZVtpZF49XCJxdWVzdGlvbl9hbnN3ZXJzX1wiXSdcbi8vICAgICAgICk7XG5cbi8vICAgICAgIHJlcG9uc2VzLmZvckVhY2goKHJlcG9uc2VEaXYsIGkpID0+IHtcbi8vICAgICAgICAgcmVwb25zZURpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgcXVlc3Rpb25fYW5zd2Vyc18ke2l9YCk7XG5cbi8vICAgICAgICAgY29uc3QgdGl0bGUgPSByZXBvbnNlRGl2LnF1ZXJ5U2VsZWN0b3IoXCJoMlwiKTtcbi8vICAgICAgICAgaWYgKHRpdGxlKSB7XG4vLyAgICAgICAgICAgdGl0bGUuaW5uZXJUZXh0ID0gYFLDqXBvbnNlICR7aSArIDF9YDtcbi8vICAgICAgICAgfVxuXG4vLyAgICAgICAgIGNvbnN0IGlucHV0cyA9IHJlcG9uc2VEaXYucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpO1xuLy8gICAgICAgICBpbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbi8vICAgICAgICAgICBpZiAoaW5wdXQubmFtZS5pbmNsdWRlcyhcInF1ZXN0aW9uW2Fuc3dlcnNdXCIpKSB7XG4vLyAgICAgICAgICAgICBpbnB1dC5uYW1lID0gaW5wdXQubmFtZS5yZXBsYWNlKC9cXFtcXGQrXFxdLywgYFske2l9XWApO1xuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgICBpZiAoaW5wdXQuaWQuaW5jbHVkZXMoXCJxdWVzdGlvbl9hbnN3ZXJzXCIpKSB7XG4vLyAgICAgICAgICAgICBpbnB1dC5pZCA9IGlucHV0LmlkLnJlcGxhY2UoL19cXGQrXy8sIGBfJHtpfV9gKTtcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgIH0pO1xuXG4vLyAgICAgICAgIGNvbnN0IG9sZERlbGV0ZUJ1dHRvbiA9IHJlcG9uc2VEaXYucXVlcnlTZWxlY3RvcihcIi5idG4tZGVsZXRlXCIpO1xuLy8gICAgICAgICBpZiAob2xkRGVsZXRlQnV0dG9uKSBvbGREZWxldGVCdXR0b24ucmVtb3ZlKCk7XG5cbi8vICAgICAgICAgYWRkRGVsZXRlQnV0dG9uKHJlcG9uc2VEaXYpO1xuLy8gICAgICAgfSk7XG5cbi8vICAgICAgIHJlbW92ZUV4dHJhRGl2cygpO1xuLy8gICAgIH1cblxuLy8gICAgIGZ1bmN0aW9uIHJlbW92ZUV4dHJhRGl2cygpIHtcbi8vICAgICAgIGNvbnN0IGVtcHR5RGl2cyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFxuLy8gICAgICAgICAnLnJlcG9uc2U6bm90KFtpZF49XCJxdWVzdGlvbl9hbnN3ZXJzX1wiXSknXG4vLyAgICAgICApO1xuLy8gICAgICAgZW1wdHlEaXZzLmZvckVhY2goKGRpdikgPT4gZGl2LnJlbW92ZSgpKTtcbi8vICAgICB9XG5cbi8vICAgICB1cGRhdGVSZXBvbnNlTnVtYmVycygpO1xuLy8gICB9IGVsc2Uge1xuLy8gICAgIGNvbnNvbGUuZXJyb3IoXG4vLyAgICAgICBcIkxhIGRpdiBjb250ZW5hbnQgbGUgcHJvdG90eXBlIGRlcyByw6lwb25zZXMgbidhIHBhcyDDqXTDqSB0cm91dsOpZS5cIlxuLy8gICAgICk7XG4vLyAgIH1cbi8vIH0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gIGxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1hbnN3ZXJcIik7XG5cbiAgaWYgKGFkZEJ1dHRvbikge1xuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWpvdXRlclJlcG9uc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWpvdXRlclJlcG9uc2UoKSB7XG4gICAgY29uc29sZS5sb2coXCJCb3V0b24gJ0Fqb3V0ZXIgdW5lIHLDqXBvbnNlJyBjbGlxdcOpXCIpO1xuXG4gICAgbGV0IGFuc3dlcnNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuc3dlcnNcIik7XG4gICAgbGV0IHByb3RvdHlwZSA9IGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIltkYXRhLXByb3RvdHlwZV1cIilcbiAgICAgIC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb3RvdHlwZVwiKTtcbiAgICBsZXQgaW5kZXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2Fuc3dlcnMgLmFuc3dlci1pdGVtXCIpLmxlbmd0aDtcbiAgICBsZXQgbmV3Rm9ybSA9IHByb3RvdHlwZS5yZXBsYWNlKC9fX25hbWVfXy9nLCBpbmRleCk7XG4gICAgbGV0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFuc3dlci1pdGVtXCIpO1xuICAgIG5ld0VsZW1lbnQuaW5uZXJIVE1MID1cbiAgICAgIG5ld0Zvcm0gK1xuICAgICAgJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwicmVtb3ZlLWFuc3dlciBidG4tZGVsZXRlXCI+U3VwcHJpbWVyPC9idXR0b24+JztcbiAgICBhbnN3ZXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpO1xuICB9XG5cbiAgLy8gR2VzdGlvbiBkZXMgc3VwcHJlc3Npb25zXG4gIGRvY3VtZW50XG4gICAgLmdldEVsZW1lbnRCeUlkKFwiYW5zd2Vyc1wiKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInJlbW92ZS1hbnN3ZXJcIikpIHtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUsOpcG9uc2Ugc3VwcHJpbcOpZVwiKTtcbiAgICAgIH1cbiAgICB9KTtcbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJUdXJibyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJidXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiY29udGVudCIsIm5leHRFbGVtZW50U2libGluZyIsImljb24iLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJtYXhIZWlnaHQiLCJ0cmFuc2Zvcm0iLCJpdGVtIiwic2Nyb2xsSGVpZ2h0IiwicmVtb3ZlQnV0dG9ucyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBhcnRpY2lwYW50SWQiLCJkYXRhc2V0IiwiZXZlbnRJZCIsImdldEVsZW1lbnRCeUlkIiwiY29uY2F0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJyZW1vdmUiLCJhbGVydCIsImVycm9yIiwic3RhdHVzRmlsdGVyIiwiZmlsdGVyUmVzcG9uc2VzIiwidmFsdWUiLCJmaWx0ZXJWYWx1ZSIsInJvd3MiLCJyb3ciLCJyb3dTdGF0dXMiLCJzdGF0dXMiLCJjbGFzc0xpc3QiLCJhZGQiLCJsYW5ndWVTZWxlY3QiLCJjYXRlZ29yeVNlbGVjdCIsInN0YXR1c1NlbGVjdCIsImZpbHRyZVRvcGljcyIsImxhbmd1ZSIsImNhdGVnb3J5IiwidG9waWNzIiwidG9waWMiLCJtZW51QnV0dG9uIiwibW9iaWxlTWVudSIsImNsb3NlTWVudSIsImFkZEJ1dHRvbiIsImFqb3V0ZXJSZXBvbnNlIiwiYW5zd2Vyc0NvbnRhaW5lciIsInByb3RvdHlwZSIsImdldEF0dHJpYnV0ZSIsImluZGV4IiwibGVuZ3RoIiwibmV3Rm9ybSIsInJlcGxhY2UiLCJuZXdFbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiZXZlbnQiLCJ0YXJnZXQiLCJjb250YWlucyIsInBhcmVudEVsZW1lbnQiXSwic291cmNlUm9vdCI6IiJ9