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
      // Effectuer la requête AJAX avec Fetch
      console.log(document.querySelector("[data-participant-id=\"".concat(participantId, "\"]")));
      fetch("/admin/event/".concat(eventId, "/remove-participant/").concat(participantId), {
        method: "DELETE",
        // Méthode DELETE
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (response) {
        if (response.ok) {
          document.querySelector("[data-participant-id=\"".concat(participantId, "\"]")).remove();

          // Si la requête réussie, supprimer l'élément participant du DOM
        } else {
          alert("Une erreur s'est produite.");
        }
      })["catch"](function (error) {
        // console.error("Error:", error);
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
document.addEventListener("DOMContentLoaded", function () {
  var addButton = document.getElementById("add-answer");
  if (addButton) {
    addButton.addEventListener("click", ajouterReponse);
  }
  var answersContainer = document.getElementById("answers");
  function ajouterReponse() {
    var prototype = document.querySelector("[data-prototype]").getAttribute("data-prototype");
    var index = document.querySelectorAll("#answers .answer-item").length;
    var newForm = prototype.replace(/__name__/g, index);
    var newElement = document.createElement("div");
    newElement.classList.add("answer-item");
    newElement.innerHTML = newForm + '<button type="button" class="remove-answer btn-delete">Supprimer</button>';
    answersContainer.appendChild(newElement);
  }

  // Gestion des suppressions
  if (answersContainer) answersContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("remove-answer")) {
      event.target.parentElement.remove();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzBCO0FBQ087QUFDSDtBQUNMO0FBQ2U7QUFDYjs7Ozs7Ozs7Ozs7Ozs7OztBQ2IzQkEsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDQyxPQUFPLENBQUMsVUFBQ0MsTUFBTSxFQUFLO0VBQzlEQSxNQUFNLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0lBQ3JDLElBQU1DLE9BQU8sR0FBR0YsTUFBTSxDQUFDRyxrQkFBa0I7SUFDekMsSUFBTUMsSUFBSSxHQUFHSixNQUFNLENBQUNLLGFBQWEsQ0FBQyxPQUFPLENBQUM7SUFFMUMsSUFBSUgsT0FBTyxDQUFDSSxLQUFLLENBQUNDLFNBQVMsRUFBRTtNQUMzQkwsT0FBTyxDQUFDSSxLQUFLLENBQUNDLFNBQVMsR0FBRyxJQUFJO01BQzlCSCxJQUFJLENBQUNFLEtBQUssQ0FBQ0UsU0FBUyxHQUFHLGNBQWM7SUFDdkMsQ0FBQyxNQUFNO01BQ0xYLFFBQVEsQ0FDTEMsZ0JBQWdCLENBQUMsb0JBQW9CLENBQUMsQ0FDdENDLE9BQU8sQ0FBQyxVQUFDVSxJQUFJO1FBQUEsT0FBTUEsSUFBSSxDQUFDSCxLQUFLLENBQUNDLFNBQVMsR0FBRyxJQUFJO01BQUEsQ0FBQyxDQUFDO01BQ25EVixRQUFRLENBQ0xDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUN6QkMsT0FBTyxDQUFDLFVBQUNVLElBQUk7UUFBQSxPQUFNQSxJQUFJLENBQUNILEtBQUssQ0FBQ0UsU0FBUyxHQUFHLGNBQWM7TUFBQSxDQUFDLENBQUM7TUFFN0ROLE9BQU8sQ0FBQ0ksS0FBSyxDQUFDQyxTQUFTLEdBQUdMLE9BQU8sQ0FBQ1EsWUFBWSxHQUFHLElBQUk7TUFDckROLElBQUksQ0FBQ0UsS0FBSyxDQUFDRSxTQUFTLEdBQUcsZ0JBQWdCO0lBQ3pDO0VBQ0YsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCRlgsUUFBUSxDQUFDSSxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFZO0VBQ3hEO0VBQ0EsSUFBTVUsYUFBYSxHQUFHZCxRQUFRLENBQUNDLGdCQUFnQixDQUFDLHFCQUFxQixDQUFDOztFQUV0RTtFQUNBYSxhQUFhLENBQUNaLE9BQU8sQ0FBQyxVQUFDQyxNQUFNLEVBQUs7SUFDaENBLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVVXLENBQUMsRUFBRTtNQUM1Q0EsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztNQUVsQixJQUFNQyxhQUFhLEdBQUcsSUFBSSxDQUFDQyxPQUFPLENBQUNELGFBQWEsQ0FBQyxDQUFDO01BQ2xELElBQU1FLE9BQU8sR0FBRyxJQUFJLENBQUNELE9BQU8sQ0FBQ0MsT0FBTyxDQUFDLENBQUM7TUFDdEM7TUFDQUMsT0FBTyxDQUFDQyxHQUFHLENBQ1RyQixRQUFRLENBQUNRLGFBQWEsMkJBQUFjLE1BQUEsQ0FBMEJMLGFBQWEsUUFBSSxDQUNuRSxDQUFDO01BRURNLEtBQUssaUJBQUFELE1BQUEsQ0FBaUJILE9BQU8sMEJBQUFHLE1BQUEsQ0FBdUJMLGFBQWEsR0FBSTtRQUNuRU8sTUFBTSxFQUFFLFFBQVE7UUFBRTtRQUNsQkMsT0FBTyxFQUFFO1VBQ1AsY0FBYyxFQUFFO1FBQ2xCO01BQ0YsQ0FBQyxDQUFDLENBQ0NDLElBQUksQ0FBQyxVQUFDQyxRQUFRLEVBQUs7UUFDbEIsSUFBSUEsUUFBUSxDQUFDQyxFQUFFLEVBQUU7VUFDZjVCLFFBQVEsQ0FDTFEsYUFBYSwyQkFBQWMsTUFBQSxDQUEwQkwsYUFBYSxRQUFJLENBQUMsQ0FDekRZLE1BQU0sQ0FBQyxDQUFDOztVQUVYO1FBQ0YsQ0FBQyxNQUFNO1VBQ0xDLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQztRQUNyQztNQUNGLENBQUMsQ0FBQyxTQUNJLENBQUMsVUFBQ0MsS0FBSyxFQUFLO1FBQ2hCO1FBQ0FELEtBQUssQ0FBQyw0QkFBNEIsQ0FBQztNQUNyQyxDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7RUFDSixDQUFDLENBQUM7QUFDSixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDRjlCLFFBQVEsQ0FBQ0ksZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBWTtFQUN4RCxJQUFNNEIsWUFBWSxHQUFHaEMsUUFBUSxDQUFDaUMsY0FBYyxDQUFDLFFBQVEsQ0FBQztFQUV0RCxJQUFJRCxZQUFZLEVBQUU7SUFDaEJBLFlBQVksQ0FBQzVCLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxZQUFNO01BQzVDOEIsZUFBZSxDQUFDRixZQUFZLENBQUNHLEtBQUssQ0FBQztJQUNyQyxDQUFDLENBQUM7RUFDSixDQUFDLE1BQU07SUFDTDtFQUNGO0VBQ0EsU0FBU0QsZUFBZUEsQ0FBQ0UsV0FBVyxFQUFFO0lBQ3BDO0lBQ0EsSUFBTUMsSUFBSSxHQUFHckMsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQztJQUV6RG9DLElBQUksQ0FBQ25DLE9BQU8sQ0FBQyxVQUFDb0MsR0FBRyxFQUFLO01BQ3BCLElBQU1DLFNBQVMsR0FBR0QsR0FBRyxDQUFDcEIsT0FBTyxDQUFDc0IsTUFBTTs7TUFFcEM7TUFDQSxJQUFJSixXQUFXLEtBQUssS0FBSyxJQUFJQSxXQUFXLEtBQUtHLFNBQVMsRUFBRTtRQUN0REQsR0FBRyxDQUFDRyxTQUFTLENBQUNaLE1BQU0sQ0FBQyxRQUFRLENBQUM7TUFDaEMsQ0FBQyxNQUFNO1FBQ0xTLEdBQUcsQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO01BQzdCO0lBQ0YsQ0FBQyxDQUFDO0VBQ0o7QUFDRixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3pCRjFDLFFBQVEsQ0FBQ0ksZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBWTtFQUN4RCxJQUFNdUMsWUFBWSxHQUFHM0MsUUFBUSxDQUFDaUMsY0FBYyxDQUFDLFFBQVEsQ0FBQztFQUN0RCxJQUFNVyxjQUFjLEdBQUc1QyxRQUFRLENBQUNpQyxjQUFjLENBQUMsVUFBVSxDQUFDO0VBQzFELElBQU1ZLFlBQVksR0FBRzdDLFFBQVEsQ0FBQ2lDLGNBQWMsQ0FBQyxRQUFRLENBQUM7RUFFdEQsSUFBSVUsWUFBWSxJQUFJQyxjQUFjLElBQUlDLFlBQVksRUFBRTtJQUNsREYsWUFBWSxDQUFDdkMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFlBQU07TUFDNUMwQyxZQUFZLENBQ1ZILFlBQVksQ0FBQ1IsS0FBSyxFQUNsQlMsY0FBYyxDQUFDVCxLQUFLLEVBQ3BCVSxZQUFZLENBQUNWLEtBQ2YsQ0FBQztJQUNILENBQUMsQ0FBQztJQUVGUyxjQUFjLENBQUN4QyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsWUFBTTtNQUM5QzBDLFlBQVksQ0FDVkgsWUFBWSxDQUFDUixLQUFLLEVBQ2xCUyxjQUFjLENBQUNULEtBQUssRUFDcEJVLFlBQVksQ0FBQ1YsS0FDZixDQUFDO0lBQ0gsQ0FBQyxDQUFDO0lBRUZVLFlBQVksQ0FBQ3pDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxZQUFNO01BQzVDMEMsWUFBWSxDQUNWSCxZQUFZLENBQUNSLEtBQUssRUFDbEJTLGNBQWMsQ0FBQ1QsS0FBSyxFQUNwQlUsWUFBWSxDQUFDVixLQUNmLENBQUM7SUFDSCxDQUFDLENBQUM7RUFDSjtFQUVBLFNBQVNXLFlBQVlBLENBQUNDLE1BQU0sRUFBRUMsUUFBUSxFQUFFUixNQUFNLEVBQUU7SUFDOUMsSUFBTVMsTUFBTSxHQUFHakQsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQztJQUUzRGdELE1BQU0sQ0FBQy9DLE9BQU8sQ0FBQyxVQUFDZ0QsS0FBSyxFQUFLO01BQ3hCLElBQ0UsQ0FBQ0YsUUFBUSxLQUFLRSxLQUFLLENBQUNoQyxPQUFPLENBQUM4QixRQUFRLElBQUlBLFFBQVEsS0FBSyxLQUFLLE1BQ3pERCxNQUFNLEtBQUtHLEtBQUssQ0FBQ2hDLE9BQU8sQ0FBQzZCLE1BQU0sSUFBSUEsTUFBTSxLQUFLLEtBQUssQ0FBQyxLQUNwRFAsTUFBTSxLQUFLVSxLQUFLLENBQUNoQyxPQUFPLENBQUNzQixNQUFNLElBQUlBLE1BQU0sS0FBSyxLQUFLLENBQUMsRUFDckQ7UUFDQVUsS0FBSyxDQUFDVCxTQUFTLENBQUNaLE1BQU0sQ0FBQyxRQUFRLENBQUM7TUFDbEMsQ0FBQyxNQUFNO1FBQ0xxQixLQUFLLENBQUNULFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztNQUMvQjtJQUNGLENBQUMsQ0FBQztFQUNKO0FBQ0YsQ0FBQyxDQUFDOzs7Ozs7Ozs7O0FDOUNGMUMsUUFBUSxDQUFDSSxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFZO0VBQ3hELElBQU0rQyxVQUFVLEdBQUduRCxRQUFRLENBQUNpQyxjQUFjLENBQUMsYUFBYSxDQUFDO0VBQ3pELElBQU1tQixVQUFVLEdBQUdwRCxRQUFRLENBQUNpQyxjQUFjLENBQUMsYUFBYSxDQUFDO0VBQ3pELElBQU1vQixTQUFTLEdBQUdyRCxRQUFRLENBQUNpQyxjQUFjLENBQUMsWUFBWSxDQUFDO0VBRXZEa0IsVUFBVSxDQUFDL0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07SUFDekNnRCxVQUFVLENBQUNYLFNBQVMsQ0FBQ1osTUFBTSxDQUFDLG1CQUFtQixDQUFDO0VBQ2xELENBQUMsQ0FBQztFQUVGd0IsU0FBUyxDQUFDakQsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07SUFDeENnRCxVQUFVLENBQUNYLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixDQUFDO0VBQy9DLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDWkYxQyxRQUFRLENBQUNJLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVk7RUFDeEQsSUFBSWtELFNBQVMsR0FBR3RELFFBQVEsQ0FBQ2lDLGNBQWMsQ0FBQyxZQUFZLENBQUM7RUFFckQsSUFBSXFCLFNBQVMsRUFBRTtJQUNiQSxTQUFTLENBQUNsRCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVtRCxjQUFjLENBQUM7RUFDckQ7RUFFQSxJQUFJQyxnQkFBZ0IsR0FBR3hELFFBQVEsQ0FBQ2lDLGNBQWMsQ0FBQyxTQUFTLENBQUM7RUFDekQsU0FBU3NCLGNBQWNBLENBQUEsRUFBRztJQUN4QixJQUFJRSxTQUFTLEdBQUd6RCxRQUFRLENBQ3JCUSxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FDakNrRCxZQUFZLENBQUMsZ0JBQWdCLENBQUM7SUFDakMsSUFBSUMsS0FBSyxHQUFHM0QsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDMkQsTUFBTTtJQUNyRSxJQUFJQyxPQUFPLEdBQUdKLFNBQVMsQ0FBQ0ssT0FBTyxDQUFDLFdBQVcsRUFBRUgsS0FBSyxDQUFDO0lBQ25ELElBQUlJLFVBQVUsR0FBRy9ELFFBQVEsQ0FBQ2dFLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDOUNELFVBQVUsQ0FBQ3RCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQztJQUN2Q3FCLFVBQVUsQ0FBQ0UsU0FBUyxHQUNsQkosT0FBTyxHQUNQLDJFQUEyRTtJQUM3RUwsZ0JBQWdCLENBQUNVLFdBQVcsQ0FBQ0gsVUFBVSxDQUFDO0VBQzFDOztFQUVBO0VBQ0EsSUFBSVAsZ0JBQWdCLEVBQ2xCQSxnQkFBZ0IsQ0FBQ3BELGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFVK0QsS0FBSyxFQUFFO0lBQzFELElBQUlBLEtBQUssQ0FBQ0MsTUFBTSxDQUFDM0IsU0FBUyxDQUFDNEIsUUFBUSxDQUFDLGVBQWUsQ0FBQyxFQUFFO01BQ3BERixLQUFLLENBQUNDLE1BQU0sQ0FBQ0UsYUFBYSxDQUFDekMsTUFBTSxDQUFDLENBQUM7SUFDckM7RUFDRixDQUFDLENBQUM7QUFDTixDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQzdCRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZGVsZXRlUGFydGljaXBhbnRFdmVudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZmlsdGVyUmVzcG9uc2VzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9maWx0ZXJUb3BpY3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcXVpek5ldy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3M/NmJlNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgXCIuL2Jvb3RzdHJhcC5qc1wiO1xuXG4vKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFRoaXMgZmlsZSB3aWxsIGJlIGluY2x1ZGVkIG9udG8gdGhlIHBhZ2UgdmlhIHRoZSBpbXBvcnRtYXAoKSBUd2lnIGZ1bmN0aW9uLFxuICogd2hpY2ggc2hvdWxkIGFscmVhZHkgYmUgaW4geW91ciBiYXNlLmh0bWwudHdpZy5cbiAqL1xuaW1wb3J0IFwiLi9zdHlsZXMvYXBwLmNzc1wiO1xuaW1wb3J0IFwiLi9qcy9maWx0ZXJSZXNwb25zZXMuanNcIjtcbmltcG9ydCBcIi4vanMvZmlsdGVyVG9waWNzLmpzXCI7XG5pbXBvcnQgXCIuL2pzL3F1aXpOZXcuanNcIjtcbmltcG9ydCBcIi4vanMvZGVsZXRlUGFydGljaXBhbnRFdmVudC5qc1wiO1xuaW1wb3J0IFwiLi9qcy9hY2NvcmRpb24uanNcIjtcbmltcG9ydCBcIi4vanMvaGVhZGVyLmpzXCI7XG4iLCJkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFjY29yZGlvbi1idG5cIikuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBidXR0b24ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIGNvbnN0IGljb24gPSBidXR0b24ucXVlcnlTZWxlY3RvcihcIi5pY29uXCIpO1xuXG4gICAgaWYgKGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0KSB7XG4gICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IG51bGw7XG4gICAgICBpY29uLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKDBkZWcpXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFjY29yZGlvbi1jb250ZW50XCIpXG4gICAgICAgIC5mb3JFYWNoKChpdGVtKSA9PiAoaXRlbS5zdHlsZS5tYXhIZWlnaHQgPSBudWxsKSk7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5pY29uXCIpXG4gICAgICAgIC5mb3JFYWNoKChpdGVtKSA9PiAoaXRlbS5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSgwZGVnKVwiKSk7XG5cbiAgICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gY29udGVudC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XG4gICAgICBpY29uLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKDE4MGRlZylcIjtcbiAgICB9XG4gIH0pO1xufSk7XG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gIC8vIENpYmxlciB0b3VzIGxlcyDDqWzDqW1lbnRzIGF2ZWMgbGEgY2xhc3NlIFwicmVtb3ZlLXBhcnRpY2lwYW50XCJcbiAgY29uc3QgcmVtb3ZlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmVtb3ZlLXBhcnRpY2lwYW50XCIpO1xuXG4gIC8vIEJvdWNsZSBzdXIgY2hhcXVlIGJvdXRvbiBwb3VyIGFqb3V0ZXIgdW4gZ2VzdGlvbm5haXJlIGQnw6l2w6luZW1lbnRzXG4gIHJlbW92ZUJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBjb25zdCBwYXJ0aWNpcGFudElkID0gdGhpcy5kYXRhc2V0LnBhcnRpY2lwYW50SWQ7IC8vIFLDqWN1cMOocmUgbCdJRCBkdSBwYXJ0aWNpcGFudFxuICAgICAgY29uc3QgZXZlbnRJZCA9IHRoaXMuZGF0YXNldC5ldmVudElkOyAvLyBSw6ljdXDDqHJlIGwnSUQgZGUgbCfDqXbDqW5lbWVudFxuICAgICAgLy8gRWZmZWN0dWVyIGxhIHJlcXXDqnRlIEFKQVggYXZlYyBGZXRjaFxuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBhcnRpY2lwYW50LWlkPVwiJHtwYXJ0aWNpcGFudElkfVwiXWApXG4gICAgICApO1xuXG4gICAgICBmZXRjaChgL2FkbWluL2V2ZW50LyR7ZXZlbnRJZH0vcmVtb3ZlLXBhcnRpY2lwYW50LyR7cGFydGljaXBhbnRJZH1gLCB7XG4gICAgICAgIG1ldGhvZDogXCJERUxFVEVcIiwgLy8gTcOpdGhvZGUgREVMRVRFXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBhcnRpY2lwYW50LWlkPVwiJHtwYXJ0aWNpcGFudElkfVwiXWApXG4gICAgICAgICAgICAgIC5yZW1vdmUoKTtcblxuICAgICAgICAgICAgLy8gU2kgbGEgcmVxdcOqdGUgcsOpdXNzaWUsIHN1cHByaW1lciBsJ8OpbMOpbWVudCBwYXJ0aWNpcGFudCBkdSBET01cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQoXCJVbmUgZXJyZXVyIHMnZXN0IHByb2R1aXRlLlwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAvLyBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycm9yKTtcbiAgICAgICAgICBhbGVydChcIlVuZSBlcnJldXIgcydlc3QgcHJvZHVpdGUuXCIpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59KTtcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgc3RhdHVzRmlsdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGF0dXNcIik7XG5cbiAgaWYgKHN0YXR1c0ZpbHRlcikge1xuICAgIHN0YXR1c0ZpbHRlci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgIGZpbHRlclJlc3BvbnNlcyhzdGF0dXNGaWx0ZXIudmFsdWUpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybjtcbiAgfVxuICBmdW5jdGlvbiBmaWx0ZXJSZXNwb25zZXMoZmlsdGVyVmFsdWUpIHtcbiAgICAvLyBSw6ljdXDDqXJleiB0b3V0ZXMgbGVzIGxpZ25lcyBkdSB0YWJsZWF1XG4gICAgY29uc3Qgcm93cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0cltkYXRhLXN0YXR1c11cIik7XG5cbiAgICByb3dzLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgY29uc3Qgcm93U3RhdHVzID0gcm93LmRhdGFzZXQuc3RhdHVzO1xuXG4gICAgICAvLyBNb250cmV6IG91IGNhY2hleiBsZXMgbGlnbmVzIGVuIGZvbmN0aW9uIGR1IGZpbHRyZVxuICAgICAgaWYgKGZpbHRlclZhbHVlID09PSBcImFsbFwiIHx8IGZpbHRlclZhbHVlID09PSByb3dTdGF0dXMpIHtcbiAgICAgICAgcm93LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByb3cuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSk7XG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGxhbmd1ZVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGFuZ3VlXCIpO1xuICBjb25zdCBjYXRlZ29yeVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2F0ZWdvcnlcIik7XG4gIGNvbnN0IHN0YXR1c1NlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhdHVzXCIpO1xuXG4gIGlmIChsYW5ndWVTZWxlY3QgJiYgY2F0ZWdvcnlTZWxlY3QgJiYgc3RhdHVzU2VsZWN0KSB7XG4gICAgbGFuZ3VlU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgZmlsdHJlVG9waWNzKFxuICAgICAgICBsYW5ndWVTZWxlY3QudmFsdWUsXG4gICAgICAgIGNhdGVnb3J5U2VsZWN0LnZhbHVlLFxuICAgICAgICBzdGF0dXNTZWxlY3QudmFsdWVcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICBjYXRlZ29yeVNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgIGZpbHRyZVRvcGljcyhcbiAgICAgICAgbGFuZ3VlU2VsZWN0LnZhbHVlLFxuICAgICAgICBjYXRlZ29yeVNlbGVjdC52YWx1ZSxcbiAgICAgICAgc3RhdHVzU2VsZWN0LnZhbHVlXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgc3RhdHVzU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgZmlsdHJlVG9waWNzKFxuICAgICAgICBsYW5ndWVTZWxlY3QudmFsdWUsXG4gICAgICAgIGNhdGVnb3J5U2VsZWN0LnZhbHVlLFxuICAgICAgICBzdGF0dXNTZWxlY3QudmFsdWVcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBmaWx0cmVUb3BpY3MobGFuZ3VlLCBjYXRlZ29yeSwgc3RhdHVzKSB7XG4gICAgY29uc3QgdG9waWNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInRyW2RhdGEtc3RhdHVzXVwiKTtcblxuICAgIHRvcGljcy5mb3JFYWNoKCh0b3BpYykgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICAoY2F0ZWdvcnkgPT09IHRvcGljLmRhdGFzZXQuY2F0ZWdvcnkgfHwgY2F0ZWdvcnkgPT09IFwiYWxsXCIpICYmXG4gICAgICAgIChsYW5ndWUgPT09IHRvcGljLmRhdGFzZXQubGFuZ3VlIHx8IGxhbmd1ZSA9PT0gXCJhbGxcIikgJiZcbiAgICAgICAgKHN0YXR1cyA9PT0gdG9waWMuZGF0YXNldC5zdGF0dXMgfHwgc3RhdHVzID09PSBcImFsbFwiKVxuICAgICAgKSB7XG4gICAgICAgIHRvcGljLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b3BpYy5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59KTtcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudS1idXR0b25cIik7XG4gIGNvbnN0IG1vYmlsZU1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vYmlsZS1tZW51XCIpO1xuICBjb25zdCBjbG9zZU1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLW1lbnVcIik7XG5cbiAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIi10cmFuc2xhdGUteC1mdWxsXCIpO1xuICB9KTtcblxuICBjbG9zZU1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtb2JpbGVNZW51LmNsYXNzTGlzdC5hZGQoXCItdHJhbnNsYXRlLXgtZnVsbFwiKTtcbiAgfSk7XG59KTtcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgbGV0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLWFuc3dlclwiKTtcblxuICBpZiAoYWRkQnV0dG9uKSB7XG4gICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBham91dGVyUmVwb25zZSk7XG4gIH1cblxuICBsZXQgYW5zd2Vyc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5zd2Vyc1wiKTtcbiAgZnVuY3Rpb24gYWpvdXRlclJlcG9uc2UoKSB7XG4gICAgbGV0IHByb3RvdHlwZSA9IGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIltkYXRhLXByb3RvdHlwZV1cIilcbiAgICAgIC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb3RvdHlwZVwiKTtcbiAgICBsZXQgaW5kZXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2Fuc3dlcnMgLmFuc3dlci1pdGVtXCIpLmxlbmd0aDtcbiAgICBsZXQgbmV3Rm9ybSA9IHByb3RvdHlwZS5yZXBsYWNlKC9fX25hbWVfXy9nLCBpbmRleCk7XG4gICAgbGV0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFuc3dlci1pdGVtXCIpO1xuICAgIG5ld0VsZW1lbnQuaW5uZXJIVE1MID1cbiAgICAgIG5ld0Zvcm0gK1xuICAgICAgJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwicmVtb3ZlLWFuc3dlciBidG4tZGVsZXRlXCI+U3VwcHJpbWVyPC9idXR0b24+JztcbiAgICBhbnN3ZXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpO1xuICB9XG5cbiAgLy8gR2VzdGlvbiBkZXMgc3VwcHJlc3Npb25zXG4gIGlmIChhbnN3ZXJzQ29udGFpbmVyKVxuICAgIGFuc3dlcnNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJyZW1vdmUtYW5zd2VyXCIpKSB7XG4gICAgICAgIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH0pO1xufSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb250ZW50IiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiaWNvbiIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsIm1heEhlaWdodCIsInRyYW5zZm9ybSIsIml0ZW0iLCJzY3JvbGxIZWlnaHQiLCJyZW1vdmVCdXR0b25zIiwiZSIsInByZXZlbnREZWZhdWx0IiwicGFydGljaXBhbnRJZCIsImRhdGFzZXQiLCJldmVudElkIiwiY29uc29sZSIsImxvZyIsImNvbmNhdCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwicmVtb3ZlIiwiYWxlcnQiLCJlcnJvciIsInN0YXR1c0ZpbHRlciIsImdldEVsZW1lbnRCeUlkIiwiZmlsdGVyUmVzcG9uc2VzIiwidmFsdWUiLCJmaWx0ZXJWYWx1ZSIsInJvd3MiLCJyb3ciLCJyb3dTdGF0dXMiLCJzdGF0dXMiLCJjbGFzc0xpc3QiLCJhZGQiLCJsYW5ndWVTZWxlY3QiLCJjYXRlZ29yeVNlbGVjdCIsInN0YXR1c1NlbGVjdCIsImZpbHRyZVRvcGljcyIsImxhbmd1ZSIsImNhdGVnb3J5IiwidG9waWNzIiwidG9waWMiLCJtZW51QnV0dG9uIiwibW9iaWxlTWVudSIsImNsb3NlTWVudSIsImFkZEJ1dHRvbiIsImFqb3V0ZXJSZXBvbnNlIiwiYW5zd2Vyc0NvbnRhaW5lciIsInByb3RvdHlwZSIsImdldEF0dHJpYnV0ZSIsImluZGV4IiwibGVuZ3RoIiwibmV3Rm9ybSIsInJlcGxhY2UiLCJuZXdFbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiZXZlbnQiLCJ0YXJnZXQiLCJjb250YWlucyIsInBhcmVudEVsZW1lbnQiXSwic291cmNlUm9vdCI6IiJ9