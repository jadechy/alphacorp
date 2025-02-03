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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBR3hELFFBQVEsQ0FBQ2lDLGNBQWMsQ0FBQyxTQUFTLENBQUM7RUFDekQsU0FBU3NCLGNBQWNBLENBQUEsRUFBRztJQUN4QixJQUFJRSxTQUFTLEdBQUd6RCxRQUFRLENBQ3JCUSxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FDakNrRCxZQUFZLENBQUMsZ0JBQWdCLENBQUM7SUFDakMsSUFBSUMsS0FBSyxHQUFHM0QsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDMkQsTUFBTTtJQUNyRSxJQUFJQyxPQUFPLEdBQUdKLFNBQVMsQ0FBQ0ssT0FBTyxDQUFDLFdBQVcsRUFBRUgsS0FBSyxDQUFDO0lBQ25ELElBQUlJLFVBQVUsR0FBRy9ELFFBQVEsQ0FBQ2dFLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDOUNELFVBQVUsQ0FBQ3RCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQztJQUN2Q3FCLFVBQVUsQ0FBQ0UsU0FBUyxHQUNsQkosT0FBTyxHQUNQLDJFQUEyRTtJQUM3RUwsZ0JBQWdCLENBQUNVLFdBQVcsQ0FBQ0gsVUFBVSxDQUFDO0VBQzFDOztFQUVBO0VBQ0EsSUFBSVAsZ0JBQWdCLEVBQ2xCQSxnQkFBZ0IsQ0FBQ3BELGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFVK0QsS0FBSyxFQUFFO0lBQzFELElBQUlBLEtBQUssQ0FBQ0MsTUFBTSxDQUFDM0IsU0FBUyxDQUFDNEIsUUFBUSxDQUFDLGVBQWUsQ0FBQyxFQUFFO01BQ3BERixLQUFLLENBQUNDLE1BQU0sQ0FBQ0UsYUFBYSxDQUFDekMsTUFBTSxDQUFDLENBQUM7SUFDckM7RUFDRixDQUFDLENBQUM7QUFDTixDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQzdCRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZGVsZXRlUGFydGljaXBhbnRFdmVudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZmlsdGVyUmVzcG9uc2VzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9maWx0ZXJUb3BpY3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcXVpek5ldy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFwiLi9ib290c3RyYXAuanNcIjtcblxuLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBUaGlzIGZpbGUgd2lsbCBiZSBpbmNsdWRlZCBvbnRvIHRoZSBwYWdlIHZpYSB0aGUgaW1wb3J0bWFwKCkgVHdpZyBmdW5jdGlvbixcbiAqIHdoaWNoIHNob3VsZCBhbHJlYWR5IGJlIGluIHlvdXIgYmFzZS5odG1sLnR3aWcuXG4gKi9cbmltcG9ydCBcIi4vc3R5bGVzL2FwcC5jc3NcIjtcbmltcG9ydCBcIi4vanMvZmlsdGVyUmVzcG9uc2VzLmpzXCI7XG5pbXBvcnQgXCIuL2pzL2ZpbHRlclRvcGljcy5qc1wiO1xuaW1wb3J0IFwiLi9qcy9xdWl6TmV3LmpzXCI7XG5pbXBvcnQgXCIuL2pzL2RlbGV0ZVBhcnRpY2lwYW50RXZlbnQuanNcIjtcbmltcG9ydCBcIi4vanMvYWNjb3JkaW9uLmpzXCI7XG5pbXBvcnQgXCIuL2pzL2hlYWRlci5qc1wiO1xuIiwiZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hY2NvcmRpb24tYnRuXCIpLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gYnV0dG9uLm5leHRFbGVtZW50U2libGluZztcbiAgICBjb25zdCBpY29uID0gYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoXCIuaWNvblwiKTtcblxuICAgIGlmIChjb250ZW50LnN0eWxlLm1heEhlaWdodCkge1xuICAgICAgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBudWxsO1xuICAgICAgaWNvbi5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSgwZGVnKVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5hY2NvcmRpb24tY29udGVudFwiKVxuICAgICAgICAuZm9yRWFjaCgoaXRlbSkgPT4gKGl0ZW0uc3R5bGUubWF4SGVpZ2h0ID0gbnVsbCkpO1xuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaWNvblwiKVxuICAgICAgICAuZm9yRWFjaCgoaXRlbSkgPT4gKGl0ZW0uc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoMGRlZylcIikpO1xuXG4gICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IGNvbnRlbnQuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xuICAgICAgaWNvbi5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSgxODBkZWcpXCI7XG4gICAgfVxuICB9KTtcbn0pO1xuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAvLyBDaWJsZXIgdG91cyBsZXMgw6lsw6ltZW50cyBhdmVjIGxhIGNsYXNzZSBcInJlbW92ZS1wYXJ0aWNpcGFudFwiXG4gIGNvbnN0IHJlbW92ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJlbW92ZS1wYXJ0aWNpcGFudFwiKTtcblxuICAvLyBCb3VjbGUgc3VyIGNoYXF1ZSBib3V0b24gcG91ciBham91dGVyIHVuIGdlc3Rpb25uYWlyZSBkJ8OpdsOpbmVtZW50c1xuICByZW1vdmVCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgY29uc3QgcGFydGljaXBhbnRJZCA9IHRoaXMuZGF0YXNldC5wYXJ0aWNpcGFudElkOyAvLyBSw6ljdXDDqHJlIGwnSUQgZHUgcGFydGljaXBhbnRcbiAgICAgIGNvbnN0IGV2ZW50SWQgPSB0aGlzLmRhdGFzZXQuZXZlbnRJZDsgLy8gUsOpY3Vww6hyZSBsJ0lEIGRlIGwnw6l2w6luZW1lbnRcbiAgICAgIC8vIEVmZmVjdHVlciBsYSByZXF1w6p0ZSBBSkFYIGF2ZWMgRmV0Y2hcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wYXJ0aWNpcGFudC1pZD1cIiR7cGFydGljaXBhbnRJZH1cIl1gKVxuICAgICAgKTtcblxuICAgICAgZmV0Y2goYC9hZG1pbi9ldmVudC8ke2V2ZW50SWR9L3JlbW92ZS1wYXJ0aWNpcGFudC8ke3BhcnRpY2lwYW50SWR9YCwge1xuICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsIC8vIE3DqXRob2RlIERFTEVURVxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wYXJ0aWNpcGFudC1pZD1cIiR7cGFydGljaXBhbnRJZH1cIl1gKVxuICAgICAgICAgICAgICAucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgIC8vIFNpIGxhIHJlcXXDqnRlIHLDqXVzc2llLCBzdXBwcmltZXIgbCfDqWzDqW1lbnQgcGFydGljaXBhbnQgZHUgRE9NXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiVW5lIGVycmV1ciBzJ2VzdCBwcm9kdWl0ZS5cIik7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnJvcik7XG4gICAgICAgICAgYWxlcnQoXCJVbmUgZXJyZXVyIHMnZXN0IHByb2R1aXRlLlwiKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHN0YXR1c0ZpbHRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhdHVzXCIpO1xuXG4gIGlmIChzdGF0dXNGaWx0ZXIpIHtcbiAgICBzdGF0dXNGaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICBmaWx0ZXJSZXNwb25zZXMoc3RhdHVzRmlsdGVyLnZhbHVlKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZnVuY3Rpb24gZmlsdGVyUmVzcG9uc2VzKGZpbHRlclZhbHVlKSB7XG4gICAgLy8gUsOpY3Vww6lyZXogdG91dGVzIGxlcyBsaWduZXMgZHUgdGFibGVhdVxuICAgIGNvbnN0IHJvd3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwidHJbZGF0YS1zdGF0dXNdXCIpO1xuXG4gICAgcm93cy5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgIGNvbnN0IHJvd1N0YXR1cyA9IHJvdy5kYXRhc2V0LnN0YXR1cztcblxuICAgICAgLy8gTW9udHJleiBvdSBjYWNoZXogbGVzIGxpZ25lcyBlbiBmb25jdGlvbiBkdSBmaWx0cmVcbiAgICAgIGlmIChmaWx0ZXJWYWx1ZSA9PT0gXCJhbGxcIiB8fCBmaWx0ZXJWYWx1ZSA9PT0gcm93U3RhdHVzKSB7XG4gICAgICAgIHJvdy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn0pO1xuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICBjb25zdCBsYW5ndWVTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhbmd1ZVwiKTtcbiAgY29uc3QgY2F0ZWdvcnlTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhdGVnb3J5XCIpO1xuICBjb25zdCBzdGF0dXNTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXR1c1wiKTtcblxuICBpZiAobGFuZ3VlU2VsZWN0ICYmIGNhdGVnb3J5U2VsZWN0ICYmIHN0YXR1c1NlbGVjdCkge1xuICAgIGxhbmd1ZVNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgIGZpbHRyZVRvcGljcyhcbiAgICAgICAgbGFuZ3VlU2VsZWN0LnZhbHVlLFxuICAgICAgICBjYXRlZ29yeVNlbGVjdC52YWx1ZSxcbiAgICAgICAgc3RhdHVzU2VsZWN0LnZhbHVlXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgY2F0ZWdvcnlTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICBmaWx0cmVUb3BpY3MoXG4gICAgICAgIGxhbmd1ZVNlbGVjdC52YWx1ZSxcbiAgICAgICAgY2F0ZWdvcnlTZWxlY3QudmFsdWUsXG4gICAgICAgIHN0YXR1c1NlbGVjdC52YWx1ZVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHN0YXR1c1NlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgIGZpbHRyZVRvcGljcyhcbiAgICAgICAgbGFuZ3VlU2VsZWN0LnZhbHVlLFxuICAgICAgICBjYXRlZ29yeVNlbGVjdC52YWx1ZSxcbiAgICAgICAgc3RhdHVzU2VsZWN0LnZhbHVlXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZmlsdHJlVG9waWNzKGxhbmd1ZSwgY2F0ZWdvcnksIHN0YXR1cykge1xuICAgIGNvbnN0IHRvcGljcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0cltkYXRhLXN0YXR1c11cIik7XG5cbiAgICB0b3BpY3MuZm9yRWFjaCgodG9waWMpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgKGNhdGVnb3J5ID09PSB0b3BpYy5kYXRhc2V0LmNhdGVnb3J5IHx8IGNhdGVnb3J5ID09PSBcImFsbFwiKSAmJlxuICAgICAgICAobGFuZ3VlID09PSB0b3BpYy5kYXRhc2V0Lmxhbmd1ZSB8fCBsYW5ndWUgPT09IFwiYWxsXCIpICYmXG4gICAgICAgIChzdGF0dXMgPT09IHRvcGljLmRhdGFzZXQuc3RhdHVzIHx8IHN0YXR1cyA9PT0gXCJhbGxcIilcbiAgICAgICkge1xuICAgICAgICB0b3BpYy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9waWMuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSk7XG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnUtYnV0dG9uXCIpO1xuICBjb25zdCBtb2JpbGVNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2JpbGUtbWVudVwiKTtcbiAgY29uc3QgY2xvc2VNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1tZW51XCIpO1xuXG4gIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtb2JpbGVNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCItdHJhbnNsYXRlLXgtZnVsbFwiKTtcbiAgfSk7XG5cbiAgY2xvc2VNZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbW9iaWxlTWVudS5jbGFzc0xpc3QuYWRkKFwiLXRyYW5zbGF0ZS14LWZ1bGxcIik7XG4gIH0pO1xufSk7XG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gIGxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1hbnN3ZXJcIik7XG5cbiAgaWYgKGFkZEJ1dHRvbikge1xuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWpvdXRlclJlcG9uc2UpO1xuICB9XG5cbiAgbGV0IGFuc3dlcnNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuc3dlcnNcIik7XG4gIGZ1bmN0aW9uIGFqb3V0ZXJSZXBvbnNlKCkge1xuICAgIGxldCBwcm90b3R5cGUgPSBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wcm90b3R5cGVdXCIpXG4gICAgICAuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm90b3R5cGVcIik7XG4gICAgbGV0IGluZGV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNhbnN3ZXJzIC5hbnN3ZXItaXRlbVwiKS5sZW5ndGg7XG4gICAgbGV0IG5ld0Zvcm0gPSBwcm90b3R5cGUucmVwbGFjZSgvX19uYW1lX18vZywgaW5kZXgpO1xuICAgIGxldCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhbnN3ZXItaXRlbVwiKTtcbiAgICBuZXdFbGVtZW50LmlubmVySFRNTCA9XG4gICAgICBuZXdGb3JtICtcbiAgICAgICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInJlbW92ZS1hbnN3ZXIgYnRuLWRlbGV0ZVwiPlN1cHByaW1lcjwvYnV0dG9uPic7XG4gICAgYW5zd2Vyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdFbGVtZW50KTtcbiAgfVxuXG4gIC8vIEdlc3Rpb24gZGVzIHN1cHByZXNzaW9uc1xuICBpZiAoYW5zd2Vyc0NvbnRhaW5lcilcbiAgICBhbnN3ZXJzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicmVtb3ZlLWFuc3dlclwiKSkge1xuICAgICAgICBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9KTtcbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJidXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiY29udGVudCIsIm5leHRFbGVtZW50U2libGluZyIsImljb24iLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJtYXhIZWlnaHQiLCJ0cmFuc2Zvcm0iLCJpdGVtIiwic2Nyb2xsSGVpZ2h0IiwicmVtb3ZlQnV0dG9ucyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBhcnRpY2lwYW50SWQiLCJkYXRhc2V0IiwiZXZlbnRJZCIsImNvbnNvbGUiLCJsb2ciLCJjb25jYXQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsInJlbW92ZSIsImFsZXJ0IiwiZXJyb3IiLCJzdGF0dXNGaWx0ZXIiLCJnZXRFbGVtZW50QnlJZCIsImZpbHRlclJlc3BvbnNlcyIsInZhbHVlIiwiZmlsdGVyVmFsdWUiLCJyb3dzIiwicm93Iiwicm93U3RhdHVzIiwic3RhdHVzIiwiY2xhc3NMaXN0IiwiYWRkIiwibGFuZ3VlU2VsZWN0IiwiY2F0ZWdvcnlTZWxlY3QiLCJzdGF0dXNTZWxlY3QiLCJmaWx0cmVUb3BpY3MiLCJsYW5ndWUiLCJjYXRlZ29yeSIsInRvcGljcyIsInRvcGljIiwibWVudUJ1dHRvbiIsIm1vYmlsZU1lbnUiLCJjbG9zZU1lbnUiLCJhZGRCdXR0b24iLCJham91dGVyUmVwb25zZSIsImFuc3dlcnNDb250YWluZXIiLCJwcm90b3R5cGUiLCJnZXRBdHRyaWJ1dGUiLCJpbmRleCIsImxlbmd0aCIsIm5ld0Zvcm0iLCJyZXBsYWNlIiwibmV3RWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsImV2ZW50IiwidGFyZ2V0IiwiY29udGFpbnMiLCJwYXJlbnRFbGVtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==