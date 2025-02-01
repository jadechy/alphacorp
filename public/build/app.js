(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./csrf_protection_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/csrf_protection_controller.js",
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _symfony_ux_turbo_dist_turbo_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/ux-turbo/dist/turbo_controller.js */ "./vendor/symfony/ux-turbo/assets/dist/turbo_controller.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'symfony--ux-turbo--turbo-core': _symfony_ux_turbo_dist_turbo_controller_js__WEBPACK_IMPORTED_MODULE_0__["default"],
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/csrf_protection_controller.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/csrf_protection_controller.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ controller)
/* harmony export */ });
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");

const controller = class extends _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller {
    constructor(context) {
        super(context);
        this.__stimulusLazyController = true;
    }
    initialize() {
        if (this.application.controllers.find((controller) => {
            return controller.identifier === this.identifier && controller.__stimulusLazyController;
        })) {
            return;
        }
        Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_core-js_modules_es_array-buffer_constructor_js-node_modules_core-js_modu-9588e1"), __webpack_require__.e("assets_controllers_csrf_protection_controller_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./assets/controllers/csrf_protection_controller.js */ "./assets/controllers/csrf_protection_controller.js")).then((controller) => {
            this.application.register(this.identifier, controller.default);
        });
    }
};


/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }



















function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);


/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap.js */ "./assets/bootstrap.js");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _js_filterResponses_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/filterResponses.js */ "./assets/js/filterResponses.js");
/* harmony import */ var _js_filterResponses_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_filterResponses_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_filterTopics_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/filterTopics.js */ "./assets/js/filterTopics.js");
/* harmony import */ var _js_filterTopics_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_filterTopics_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_deleteParticipantEvent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/deleteParticipantEvent.js */ "./assets/js/deleteParticipantEvent.js");
/* harmony import */ var _js_deleteParticipantEvent_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_deleteParticipantEvent_js__WEBPACK_IMPORTED_MODULE_4__);


/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */




console.log("This log comes from assets/app.js - welcome to AssetMapper! 🎉");

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   app: () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));
// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

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

/***/ "./vendor/symfony/ux-turbo/assets/dist/turbo_controller.js":
/*!*****************************************************************!*\
  !*** ./vendor/symfony/ux-turbo/assets/dist/turbo_controller.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ turbo_controller)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var _hotwired_turbo__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @hotwired/turbo */ "./node_modules/@hotwired/turbo/dist/turbo.es2017-esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }



















function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var turbo_controller = /*#__PURE__*/function (_Controller) {
  function turbo_controller() {
    _classCallCheck(this, turbo_controller);
    return _callSuper(this, turbo_controller, arguments);
  }
  _inherits(turbo_controller, _Controller);
  return _createClass(turbo_controller);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);


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
/******/ __webpack_require__.O(0, ["vendors-node_modules_hotwired_turbo_dist_turbo_es2017-esm_js-node_modules_symfony_stimulus-br-640d05"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCc0U7QUFDdEUsaUVBQWU7QUFDZixtQ0FBbUMsa0ZBQVk7QUFDL0MsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0grQztBQUNoRCxpQ0FBaUMsMERBQVU7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFFBQVEsMFlBQTJFO0FBQ25GO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCZ0Q7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBLElBQUFDLFFBQUEsMEJBQUFDLFdBQUE7RUFBQSxTQUFBRCxTQUFBO0lBQUFFLGVBQUEsT0FBQUYsUUFBQTtJQUFBLE9BQUFHLFVBQUEsT0FBQUgsUUFBQSxFQUFBSSxTQUFBO0VBQUE7RUFBQUMsU0FBQSxDQUFBTCxRQUFBLEVBQUFDLFdBQUE7RUFBQSxPQUFBSyxZQUFBLENBQUFOLFFBQUE7SUFBQU8sR0FBQTtJQUFBQyxLQUFBLEVBVUksU0FBQUMsT0FBT0EsQ0FBQSxFQUFHO01BQ04sSUFBSSxDQUFDQyxPQUFPLENBQUNDLFdBQVcsR0FBRyxtRUFBbUU7SUFDbEc7RUFBQztBQUFBLEVBSHdCWiwyREFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWGY7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMwQjtBQUNPO0FBQ0g7QUFDVTtBQUN4Q2MsT0FBTyxDQUFDQyxHQUFHLENBQUMsZ0VBQWdFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaakI7O0FBRTVEO0FBQ08sSUFBTUUsR0FBRyxHQUFHRCwwRUFBZ0IsQ0FBQ0UseUlBSW5DLENBQUM7QUFDRjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBRSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVk7RUFDeEQ7RUFDQSxJQUFNQyxhQUFhLEdBQUdGLFFBQVEsQ0FBQ0csZ0JBQWdCLENBQUMscUJBQXFCLENBQUM7O0VBRXRFO0VBQ0FELGFBQWEsQ0FBQ0UsT0FBTyxDQUFDLFVBQUNDLE1BQU0sRUFBSztJQUNoQ0EsTUFBTSxDQUFDSixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBVUssQ0FBQyxFQUFFO01BQzVDQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO01BRWxCLElBQU1DLGFBQWEsR0FBRyxJQUFJLENBQUNDLE9BQU8sQ0FBQ0QsYUFBYSxDQUFDLENBQUM7TUFDbEQsSUFBTUUsT0FBTyxHQUFHLElBQUksQ0FBQ0QsT0FBTyxDQUFDQyxPQUFPLENBQUMsQ0FBQztNQUN0Q2hCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztNQUNuQkQsT0FBTyxDQUFDQyxHQUFHLENBQUNLLFFBQVEsQ0FBQ1csY0FBYyxnQkFBQUMsTUFBQSxDQUFnQkosYUFBYSxDQUFFLENBQUMsQ0FBQztNQUNwRTtNQUNBZCxPQUFPLENBQUNDLEdBQUcsQ0FDVEssUUFBUSxDQUFDYSxhQUFhLDJCQUFBRCxNQUFBLENBQTBCSixhQUFhLFFBQUksQ0FDbkUsQ0FBQztNQUVETSxLQUFLLGlCQUFBRixNQUFBLENBQWlCRixPQUFPLDBCQUFBRSxNQUFBLENBQXVCSixhQUFhLEdBQUk7UUFDbkVPLE1BQU0sRUFBRSxRQUFRO1FBQUU7UUFDbEJDLE9BQU8sRUFBRTtVQUNQLGNBQWMsRUFBRTtRQUNsQjtNQUNGLENBQUMsQ0FBQyxDQUNDQyxJQUFJLENBQUMsVUFBQ0MsUUFBUSxFQUFLO1FBQ2xCeEIsT0FBTyxDQUFDQyxHQUFHLENBQUN1QixRQUFRLENBQUM7UUFDckIsSUFBSUEsUUFBUSxDQUFDQyxFQUFFLEVBQUU7VUFDZm5CLFFBQVEsQ0FDTGEsYUFBYSwyQkFBQUQsTUFBQSxDQUEwQkosYUFBYSxRQUFJLENBQUMsQ0FDekRZLE1BQU0sQ0FBQyxDQUFDOztVQUVYO1FBQ0YsQ0FBQyxNQUFNO1VBQ0xDLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQztRQUNyQztNQUNGLENBQUMsQ0FBQyxTQUNJLENBQUMsVUFBQ0MsS0FBSyxFQUFLO1FBQ2hCNUIsT0FBTyxDQUFDNEIsS0FBSyxDQUFDLFFBQVEsRUFBRUEsS0FBSyxDQUFDO1FBQzlCRCxLQUFLLENBQUMsNEJBQTRCLENBQUM7TUFDckMsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUMxQ0ZyQixRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVk7RUFDeEQsSUFBTXNCLFlBQVksR0FBR3ZCLFFBQVEsQ0FBQ1csY0FBYyxDQUFDLFFBQVEsQ0FBQztFQUV0RCxJQUFJWSxZQUFZLEVBQUU7SUFDaEJBLFlBQVksQ0FBQ3RCLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxZQUFNO01BQzVDdUIsZUFBZSxDQUFDRCxZQUFZLENBQUNsQyxLQUFLLENBQUM7SUFDckMsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxNQUFNO0lBQ0xLLE9BQU8sQ0FBQzRCLEtBQUssQ0FBQywrQ0FBK0MsQ0FBQztJQUM5RDtFQUNGO0VBQ0EsU0FBU0UsZUFBZUEsQ0FBQ0MsV0FBVyxFQUFFO0lBQ3BDO0lBQ0EsSUFBTUMsSUFBSSxHQUFHMUIsUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQztJQUV6RHVCLElBQUksQ0FBQ3RCLE9BQU8sQ0FBQyxVQUFDdUIsR0FBRyxFQUFLO01BQ3BCLElBQU1DLFNBQVMsR0FBR0QsR0FBRyxDQUFDbEIsT0FBTyxDQUFDb0IsTUFBTTs7TUFFcEM7TUFDQSxJQUFJSixXQUFXLEtBQUssS0FBSyxJQUFJQSxXQUFXLEtBQUtHLFNBQVMsRUFBRTtRQUN0REQsR0FBRyxDQUFDRyxTQUFTLENBQUNWLE1BQU0sQ0FBQyxRQUFRLENBQUM7TUFDaEMsQ0FBQyxNQUFNO1FBQ0xPLEdBQUcsQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO01BQzdCO0lBQ0YsQ0FBQyxDQUFDO0VBQ0o7QUFDRixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzFCRi9CLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBWTtFQUN4RCxJQUFNK0IsWUFBWSxHQUFHaEMsUUFBUSxDQUFDVyxjQUFjLENBQUMsUUFBUSxDQUFDO0VBQ3RELElBQU1zQixjQUFjLEdBQUdqQyxRQUFRLENBQUNXLGNBQWMsQ0FBQyxVQUFVLENBQUM7RUFDMUQsSUFBTXVCLFlBQVksR0FBR2xDLFFBQVEsQ0FBQ1csY0FBYyxDQUFDLFFBQVEsQ0FBQztFQUV0RCxJQUFJcUIsWUFBWSxJQUFJQyxjQUFjLElBQUlDLFlBQVksRUFBRTtJQUNsREYsWUFBWSxDQUFDL0IsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFlBQU07TUFDNUNrQyxZQUFZLENBQ1ZILFlBQVksQ0FBQzNDLEtBQUssRUFDbEI0QyxjQUFjLENBQUM1QyxLQUFLLEVBQ3BCNkMsWUFBWSxDQUFDN0MsS0FDZixDQUFDO0lBQ0gsQ0FBQyxDQUFDO0lBRUY0QyxjQUFjLENBQUNoQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsWUFBTTtNQUM5Q2tDLFlBQVksQ0FDVkgsWUFBWSxDQUFDM0MsS0FBSyxFQUNsQjRDLGNBQWMsQ0FBQzVDLEtBQUssRUFDcEI2QyxZQUFZLENBQUM3QyxLQUNmLENBQUM7SUFDSCxDQUFDLENBQUM7SUFFRjZDLFlBQVksQ0FBQ2pDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxZQUFNO01BQzVDa0MsWUFBWSxDQUNWSCxZQUFZLENBQUMzQyxLQUFLLEVBQ2xCNEMsY0FBYyxDQUFDNUMsS0FBSyxFQUNwQjZDLFlBQVksQ0FBQzdDLEtBQ2YsQ0FBQztJQUNILENBQUMsQ0FBQztFQUNKO0VBRUEsU0FBUzhDLFlBQVlBLENBQUNDLE1BQU0sRUFBRUMsUUFBUSxFQUFFUixNQUFNLEVBQUU7SUFDOUMsSUFBTVMsTUFBTSxHQUFHdEMsUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQztJQUUzRG1DLE1BQU0sQ0FBQ2xDLE9BQU8sQ0FBQyxVQUFDbUMsS0FBSyxFQUFLO01BQ3hCLElBQ0UsQ0FBQ0YsUUFBUSxLQUFLRSxLQUFLLENBQUM5QixPQUFPLENBQUM0QixRQUFRLElBQUlBLFFBQVEsS0FBSyxLQUFLLE1BQ3pERCxNQUFNLEtBQUtHLEtBQUssQ0FBQzlCLE9BQU8sQ0FBQzJCLE1BQU0sSUFBSUEsTUFBTSxLQUFLLEtBQUssQ0FBQyxLQUNwRFAsTUFBTSxLQUFLVSxLQUFLLENBQUM5QixPQUFPLENBQUNvQixNQUFNLElBQUlBLE1BQU0sS0FBSyxLQUFLLENBQUMsRUFDckQ7UUFDQVUsS0FBSyxDQUFDVCxTQUFTLENBQUNWLE1BQU0sQ0FBQyxRQUFRLENBQUM7TUFDbEMsQ0FBQyxNQUFNO1FBQ0xtQixLQUFLLENBQUNULFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztNQUMvQjtJQUNGLENBQUMsQ0FBQztFQUNKO0FBQ0YsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QzhDO0FBQ3ZCO0FBQUEsSUFFbkJTLGdCQUFnQiwwQkFBQTFELFdBQUE7RUFBQSxTQUFBMEQsaUJBQUE7SUFBQXpELGVBQUEsT0FBQXlELGdCQUFBO0lBQUEsT0FBQXhELFVBQUEsT0FBQXdELGdCQUFBLEVBQUF2RCxTQUFBO0VBQUE7RUFBQUMsU0FBQSxDQUFBc0QsZ0JBQUEsRUFBQTFELFdBQUE7RUFBQSxPQUFBSyxZQUFBLENBQUFxRCxnQkFBQTtBQUFBLEVBQVM1RCwyREFBVTs7Ozs7Ozs7Ozs7OztBQ0h6QyIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuW2p0XXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9jc3JmX3Byb3RlY3Rpb25fY29udHJvbGxlci5qcz81YjAzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZGVsZXRlUGFydGljaXBhbnRFdmVudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZmlsdGVyUmVzcG9uc2VzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9maWx0ZXJUb3BpY3MuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtdHVyYm8vYXNzZXRzL2Rpc3QvdHVyYm9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3M/NmJlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vY3NyZl9wcm90ZWN0aW9uX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9jc3JmX3Byb3RlY3Rpb25fY29udHJvbGxlci5qc1wiLFxuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJpbXBvcnQgY29udHJvbGxlcl8wIGZyb20gJ0BzeW1mb255L3V4LXR1cmJvL2Rpc3QvdHVyYm9fY29udHJvbGxlci5qcyc7XG5leHBvcnQgZGVmYXVsdCB7XG4gICdzeW1mb255LS11eC10dXJiby0tdHVyYm8tY29yZSc6IGNvbnRyb2xsZXJfMCxcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5jb25zdCBjb250cm9sbGVyID0gY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgICAgICB0aGlzLl9fc3RpbXVsdXNMYXp5Q29udHJvbGxlciA9IHRydWU7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGlmICh0aGlzLmFwcGxpY2F0aW9uLmNvbnRyb2xsZXJzLmZpbmQoKGNvbnRyb2xsZXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjb250cm9sbGVyLmlkZW50aWZpZXIgPT09IHRoaXMuaWRlbnRpZmllciAmJiBjb250cm9sbGVyLl9fc3RpbXVsdXNMYXp5Q29udHJvbGxlcjtcbiAgICAgICAgfSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpbXBvcnQoJy92YXIvd3d3L3N5bWZvbnkvYXNzZXRzL2NvbnRyb2xsZXJzL2NzcmZfcHJvdGVjdGlvbl9jb250cm9sbGVyLmpzJykudGhlbigoY29udHJvbGxlcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5hcHBsaWNhdGlvbi5yZWdpc3Rlcih0aGlzLmlkZW50aWZpZXIsIGNvbnRyb2xsZXIuZGVmYXVsdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5leHBvcnQgeyBjb250cm9sbGVyIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4iLCJpbXBvcnQgXCIuL2Jvb3RzdHJhcC5qc1wiO1xuXG4vKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFRoaXMgZmlsZSB3aWxsIGJlIGluY2x1ZGVkIG9udG8gdGhlIHBhZ2UgdmlhIHRoZSBpbXBvcnRtYXAoKSBUd2lnIGZ1bmN0aW9uLFxuICogd2hpY2ggc2hvdWxkIGFscmVhZHkgYmUgaW4geW91ciBiYXNlLmh0bWwudHdpZy5cbiAqL1xuaW1wb3J0IFwiLi9zdHlsZXMvYXBwLmNzc1wiO1xuaW1wb3J0IFwiLi9qcy9maWx0ZXJSZXNwb25zZXMuanNcIjtcbmltcG9ydCBcIi4vanMvZmlsdGVyVG9waWNzLmpzXCI7XG5pbXBvcnQgXCIuL2pzL2RlbGV0ZVBhcnRpY2lwYW50RXZlbnQuanNcIjtcbmNvbnNvbGUubG9nKFwiVGhpcyBsb2cgY29tZXMgZnJvbSBhc3NldHMvYXBwLmpzIC0gd2VsY29tZSB0byBBc3NldE1hcHBlciEg8J+OiVwiKTtcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC5banRdc3g/JC9cbikpO1xuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgLy8gQ2libGVyIHRvdXMgbGVzIMOpbMOpbWVudHMgYXZlYyBsYSBjbGFzc2UgXCJyZW1vdmUtcGFydGljaXBhbnRcIlxuICBjb25zdCByZW1vdmVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yZW1vdmUtcGFydGljaXBhbnRcIik7XG5cbiAgLy8gQm91Y2xlIHN1ciBjaGFxdWUgYm91dG9uIHBvdXIgYWpvdXRlciB1biBnZXN0aW9ubmFpcmUgZCfDqXbDqW5lbWVudHNcbiAgcmVtb3ZlQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGNvbnN0IHBhcnRpY2lwYW50SWQgPSB0aGlzLmRhdGFzZXQucGFydGljaXBhbnRJZDsgLy8gUsOpY3Vww6hyZSBsJ0lEIGR1IHBhcnRpY2lwYW50XG4gICAgICBjb25zdCBldmVudElkID0gdGhpcy5kYXRhc2V0LmV2ZW50SWQ7IC8vIFLDqWN1cMOocmUgbCdJRCBkZSBsJ8OpdsOpbmVtZW50XG4gICAgICBjb25zb2xlLmxvZyhcImxhbGFcIik7XG4gICAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcGFydGljaXBhbnQtJHtwYXJ0aWNpcGFudElkfWApKTtcbiAgICAgIC8vIEVmZmVjdHVlciBsYSByZXF1w6p0ZSBBSkFYIGF2ZWMgRmV0Y2hcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wYXJ0aWNpcGFudC1pZD1cIiR7cGFydGljaXBhbnRJZH1cIl1gKVxuICAgICAgKTtcblxuICAgICAgZmV0Y2goYC9hZG1pbi9ldmVudC8ke2V2ZW50SWR9L3JlbW92ZS1wYXJ0aWNpcGFudC8ke3BhcnRpY2lwYW50SWR9YCwge1xuICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsIC8vIE3DqXRob2RlIERFTEVURVxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihgW2RhdGEtcGFydGljaXBhbnQtaWQ9XCIke3BhcnRpY2lwYW50SWR9XCJdYClcbiAgICAgICAgICAgICAgLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICAvLyBTaSBsYSByZXF1w6p0ZSByw6l1c3NpZSwgc3VwcHJpbWVyIGwnw6lsw6ltZW50IHBhcnRpY2lwYW50IGR1IERPTVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGVydChcIlVuZSBlcnJldXIgcydlc3QgcHJvZHVpdGUuXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyb3IpO1xuICAgICAgICAgIGFsZXJ0KFwiVW5lIGVycmV1ciBzJ2VzdCBwcm9kdWl0ZS5cIik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICBjb25zdCBzdGF0dXNGaWx0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXR1c1wiKTtcblxuICBpZiAoc3RhdHVzRmlsdGVyKSB7XG4gICAgc3RhdHVzRmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgZmlsdGVyUmVzcG9uc2VzKHN0YXR1c0ZpbHRlci52YWx1ZSk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcihcIkxlIGZpbHRyZSBhdmVjIGwnSUQgJ3N0YXR1cycgZXN0IGludHJvdXZhYmxlLlwiKTtcbiAgICByZXR1cm47XG4gIH1cbiAgZnVuY3Rpb24gZmlsdGVyUmVzcG9uc2VzKGZpbHRlclZhbHVlKSB7XG4gICAgLy8gUsOpY3Vww6lyZXogdG91dGVzIGxlcyBsaWduZXMgZHUgdGFibGVhdVxuICAgIGNvbnN0IHJvd3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwidHJbZGF0YS1zdGF0dXNdXCIpO1xuXG4gICAgcm93cy5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgIGNvbnN0IHJvd1N0YXR1cyA9IHJvdy5kYXRhc2V0LnN0YXR1cztcblxuICAgICAgLy8gTW9udHJleiBvdSBjYWNoZXogbGVzIGxpZ25lcyBlbiBmb25jdGlvbiBkdSBmaWx0cmVcbiAgICAgIGlmIChmaWx0ZXJWYWx1ZSA9PT0gXCJhbGxcIiB8fCBmaWx0ZXJWYWx1ZSA9PT0gcm93U3RhdHVzKSB7XG4gICAgICAgIHJvdy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn0pO1xuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICBjb25zdCBsYW5ndWVTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhbmd1ZVwiKTtcbiAgY29uc3QgY2F0ZWdvcnlTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhdGVnb3J5XCIpO1xuICBjb25zdCBzdGF0dXNTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXR1c1wiKTtcblxuICBpZiAobGFuZ3VlU2VsZWN0ICYmIGNhdGVnb3J5U2VsZWN0ICYmIHN0YXR1c1NlbGVjdCkge1xuICAgIGxhbmd1ZVNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgIGZpbHRyZVRvcGljcyhcbiAgICAgICAgbGFuZ3VlU2VsZWN0LnZhbHVlLFxuICAgICAgICBjYXRlZ29yeVNlbGVjdC52YWx1ZSxcbiAgICAgICAgc3RhdHVzU2VsZWN0LnZhbHVlXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgY2F0ZWdvcnlTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICBmaWx0cmVUb3BpY3MoXG4gICAgICAgIGxhbmd1ZVNlbGVjdC52YWx1ZSxcbiAgICAgICAgY2F0ZWdvcnlTZWxlY3QudmFsdWUsXG4gICAgICAgIHN0YXR1c1NlbGVjdC52YWx1ZVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHN0YXR1c1NlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgIGZpbHRyZVRvcGljcyhcbiAgICAgICAgbGFuZ3VlU2VsZWN0LnZhbHVlLFxuICAgICAgICBjYXRlZ29yeVNlbGVjdC52YWx1ZSxcbiAgICAgICAgc3RhdHVzU2VsZWN0LnZhbHVlXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZmlsdHJlVG9waWNzKGxhbmd1ZSwgY2F0ZWdvcnksIHN0YXR1cykge1xuICAgIGNvbnN0IHRvcGljcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0cltkYXRhLXN0YXR1c11cIik7XG5cbiAgICB0b3BpY3MuZm9yRWFjaCgodG9waWMpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgKGNhdGVnb3J5ID09PSB0b3BpYy5kYXRhc2V0LmNhdGVnb3J5IHx8IGNhdGVnb3J5ID09PSBcImFsbFwiKSAmJlxuICAgICAgICAobGFuZ3VlID09PSB0b3BpYy5kYXRhc2V0Lmxhbmd1ZSB8fCBsYW5ndWUgPT09IFwiYWxsXCIpICYmXG4gICAgICAgIChzdGF0dXMgPT09IHRvcGljLmRhdGFzZXQuc3RhdHVzIHx8IHN0YXR1cyA9PT0gXCJhbGxcIilcbiAgICAgICkge1xuICAgICAgICB0b3BpYy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9waWMuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSk7XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcbmltcG9ydCAnQGhvdHdpcmVkL3R1cmJvJztcblxuY2xhc3MgdHVyYm9fY29udHJvbGxlciBleHRlbmRzIENvbnRyb2xsZXIge1xufVxuXG5leHBvcnQgeyB0dXJib19jb250cm9sbGVyIGFzIGRlZmF1bHQgfTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiX2RlZmF1bHQiLCJfQ29udHJvbGxlciIsIl9jbGFzc0NhbGxDaGVjayIsIl9jYWxsU3VwZXIiLCJhcmd1bWVudHMiLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImNvbm5lY3QiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJkZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJyZXF1aXJlIiwiY29udGV4dCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUJ1dHRvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJ1dHRvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBhcnRpY2lwYW50SWQiLCJkYXRhc2V0IiwiZXZlbnRJZCIsImdldEVsZW1lbnRCeUlkIiwiY29uY2F0IiwicXVlcnlTZWxlY3RvciIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwicmVtb3ZlIiwiYWxlcnQiLCJlcnJvciIsInN0YXR1c0ZpbHRlciIsImZpbHRlclJlc3BvbnNlcyIsImZpbHRlclZhbHVlIiwicm93cyIsInJvdyIsInJvd1N0YXR1cyIsInN0YXR1cyIsImNsYXNzTGlzdCIsImFkZCIsImxhbmd1ZVNlbGVjdCIsImNhdGVnb3J5U2VsZWN0Iiwic3RhdHVzU2VsZWN0IiwiZmlsdHJlVG9waWNzIiwibGFuZ3VlIiwiY2F0ZWdvcnkiLCJ0b3BpY3MiLCJ0b3BpYyIsInR1cmJvX2NvbnRyb2xsZXIiXSwic291cmNlUm9vdCI6IiJ9