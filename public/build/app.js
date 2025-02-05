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
/* harmony import */ var _js_audioRecorder_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/audioRecorder.js */ "./assets/js/audioRecorder.js");
/* harmony import */ var _js_audioRecorder_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_js_audioRecorder_js__WEBPACK_IMPORTED_MODULE_7__);
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

/***/ "./assets/js/audioRecorder.js":
/*!************************************!*\
  !*** ./assets/js/audioRecorder.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
__webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
__webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
__webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
__webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
document.addEventListener("DOMContentLoaded", function () {
  var startBtn = document.getElementById("startRecording");
  var stopBtn = document.getElementById("stopRecording");
  var scoreResult = document.getElementById("scoreResult");
  var levelResult = document.getElementById("levelResult");
  var mediaRecorder;
  var audioChunks = [];
  var isRecording = false;
  startBtn.addEventListener("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var stream;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (!isRecording) {
            _context2.next = 2;
            break;
          }
          return _context2.abrupt("return");
        case 2:
          isRecording = true;
          _context2.next = 5;
          return navigator.mediaDevices.getUserMedia({
            audio: true
          });
        case 5:
          stream = _context2.sent;
          mediaRecorder = new MediaRecorder(stream);
          audioChunks = [];
          mediaRecorder.ondataavailable = function (event) {
            audioChunks.push(event.data);
          };
          mediaRecorder.onstop = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var audioBlob, formData, response, result;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  console.log("L'enregistrement est arrêté une seule fois");
                  isRecording = false;
                  audioBlob = new Blob(audioChunks, {
                    type: 'audio/wav'
                  });
                  formData = new FormData();
                  formData.append("audio", audioBlob);
                  _context.prev = 5;
                  _context.next = 8;
                  return fetch("/scream/analyze-audio", {
                    method: "POST",
                    body: formData
                  });
                case 8:
                  response = _context.sent;
                  if (response.ok) {
                    _context.next = 11;
                    break;
                  }
                  throw new Error('Erreur du serveur');
                case 11:
                  _context.next = 13;
                  return response.json();
                case 13:
                  result = _context.sent;
                  scoreResult.innerText = "🔥 Score Alpha : " + result.score;
                  levelResult.innerText = "Niveau : " + result.level;
                  _context.next = 22;
                  break;
                case 18:
                  _context.prev = 18;
                  _context.t0 = _context["catch"](5);
                  console.error('Erreur lors de l\'envoi de l\'audio :', _context.t0);
                  scoreResult.innerText = "Une erreur s'est produite. Veuillez réessayer.";
                case 22:
                case "end":
                  return _context.stop();
              }
            }, _callee, null, [[5, 18]]);
          }));
          mediaRecorder.start();
          startBtn.disabled = true;
          stopBtn.disabled = false;
        case 13:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  })));
  stopBtn.addEventListener("click", function () {
    if (mediaRecorder && isRecording) {
      mediaRecorder.stop();
      startBtn.disabled = false;
      stopBtn.disabled = true;
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-4f1a94"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLENBQUMsZ0JBQWdCLENBQUM7SUFDakMsSUFBSUMsS0FBSyxHQUFHeE0sUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDMkYsTUFBTTtJQUNyRSxJQUFJNkcsT0FBTyxHQUFHdEwsU0FBUyxDQUFDdUwsT0FBTyxDQUFDLFdBQVcsRUFBRUYsS0FBSyxDQUFDO0lBQ25ELElBQUlHLFVBQVUsR0FBRzNNLFFBQVEsQ0FBQzRNLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDOUNELFVBQVUsQ0FBQ3BCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQztJQUN2Q21CLFVBQVUsQ0FBQ0UsU0FBUyxHQUNsQkosT0FBTyxHQUNQLDJFQUEyRTtJQUM3RUgsZ0JBQWdCLENBQUNRLFdBQVcsQ0FBQ0gsVUFBVSxDQUFDO0VBQzFDOztFQUVBO0VBQ0EsSUFBSUwsZ0JBQWdCLEVBQ2xCQSxnQkFBZ0IsQ0FBQ2xNLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFVeUksS0FBSyxFQUFFO0lBQzFELElBQUlBLEtBQUssQ0FBQ2tFLE1BQU0sQ0FBQ3hCLFNBQVMsQ0FBQ3lCLFFBQVEsQ0FBQyxlQUFlLENBQUMsRUFBRTtNQUNwRG5FLEtBQUssQ0FBQ2tFLE1BQU0sQ0FBQ0UsYUFBYSxDQUFDbkMsTUFBTSxDQUFDLENBQUM7SUFDckM7RUFDRixDQUFDLENBQUM7QUFDTixDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQzdCRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXVkaW9SZWNvcmRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZGVsZXRlUGFydGljaXBhbnRFdmVudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZmlsdGVyUmVzcG9uc2VzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9maWx0ZXJUb3BpY3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcXVpek5ldy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3M/NmJlNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgXCIuL2Jvb3RzdHJhcC5qc1wiO1xyXG5cclxuLypcclxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxyXG4gKlxyXG4gKiBUaGlzIGZpbGUgd2lsbCBiZSBpbmNsdWRlZCBvbnRvIHRoZSBwYWdlIHZpYSB0aGUgaW1wb3J0bWFwKCkgVHdpZyBmdW5jdGlvbixcclxuICogd2hpY2ggc2hvdWxkIGFscmVhZHkgYmUgaW4geW91ciBiYXNlLmh0bWwudHdpZy5cclxuICovXHJcbmltcG9ydCBcIi4vc3R5bGVzL2FwcC5jc3NcIjtcclxuaW1wb3J0IFwiLi9qcy9maWx0ZXJSZXNwb25zZXMuanNcIjtcclxuaW1wb3J0IFwiLi9qcy9maWx0ZXJUb3BpY3MuanNcIjtcclxuaW1wb3J0IFwiLi9qcy9xdWl6TmV3LmpzXCI7XHJcbmltcG9ydCBcIi4vanMvZGVsZXRlUGFydGljaXBhbnRFdmVudC5qc1wiO1xyXG5pbXBvcnQgXCIuL2pzL2FjY29yZGlvbi5qc1wiO1xyXG5pbXBvcnQgXCIuL2pzL2hlYWRlci5qc1wiO1xyXG5pbXBvcnQgXCIuL2pzL2F1ZGlvUmVjb3JkZXIuanNcIjtcclxuIiwiZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hY2NvcmRpb24tYnRuXCIpLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGVudCA9IGJ1dHRvbi5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICBjb25zdCBpY29uID0gYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoXCIuaWNvblwiKTtcclxuXHJcbiAgICBpZiAoY29udGVudC5zdHlsZS5tYXhIZWlnaHQpIHtcclxuICAgICAgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBudWxsO1xyXG4gICAgICBpY29uLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKDBkZWcpXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb2N1bWVudFxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFjY29yZGlvbi1jb250ZW50XCIpXHJcbiAgICAgICAgLmZvckVhY2goKGl0ZW0pID0+IChpdGVtLnN0eWxlLm1heEhlaWdodCA9IG51bGwpKTtcclxuICAgICAgZG9jdW1lbnRcclxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5pY29uXCIpXHJcbiAgICAgICAgLmZvckVhY2goKGl0ZW0pID0+IChpdGVtLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKDBkZWcpXCIpKTtcclxuXHJcbiAgICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gY29udGVudC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XHJcbiAgICAgIGljb24uc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoMTgwZGVnKVwiO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0UmVjb3JkaW5nXCIpO1xyXG4gICAgY29uc3Qgc3RvcEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RvcFJlY29yZGluZ1wiKTtcclxuICAgIGNvbnN0IHNjb3JlUmVzdWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY29yZVJlc3VsdFwiKTtcclxuICAgIGNvbnN0IGxldmVsUmVzdWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZXZlbFJlc3VsdFwiKTtcclxuICAgIGxldCBtZWRpYVJlY29yZGVyO1xyXG4gICAgbGV0IGF1ZGlvQ2h1bmtzID0gW107XHJcblxyXG4gICAgbGV0IGlzUmVjb3JkaW5nID0gZmFsc2U7XHJcblxyXG4gICAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcclxuICAgICAgICBpZiAoaXNSZWNvcmRpbmcpIHJldHVybjtcclxuICAgICAgICBpc1JlY29yZGluZyA9IHRydWU7XHJcblxyXG4gICAgICAgIGNvbnN0IHN0cmVhbSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHsgYXVkaW86IHRydWUgfSk7XHJcbiAgICAgICAgbWVkaWFSZWNvcmRlciA9IG5ldyBNZWRpYVJlY29yZGVyKHN0cmVhbSk7XHJcbiAgICAgICAgYXVkaW9DaHVua3MgPSBbXTtcclxuXHJcbiAgICAgICAgbWVkaWFSZWNvcmRlci5vbmRhdGFhdmFpbGFibGUgPSBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGF1ZGlvQ2h1bmtzLnB1c2goZXZlbnQuZGF0YSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbWVkaWFSZWNvcmRlci5vbnN0b3AgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTCdlbnJlZ2lzdHJlbWVudCBlc3QgYXJyw6p0w6kgdW5lIHNldWxlIGZvaXNcIik7XHJcbiAgICAgICAgICAgIGlzUmVjb3JkaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhdWRpb0Jsb2IgPSBuZXcgQmxvYihhdWRpb0NodW5rcywgeyB0eXBlOiAnYXVkaW8vd2F2JyB9KTtcclxuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiYXVkaW9cIiwgYXVkaW9CbG9iKTtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL3NjcmVhbS9hbmFseXplLWF1ZGlvXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJldXIgZHUgc2VydmV1cicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIHNjb3JlUmVzdWx0LmlubmVyVGV4dCA9IFwi8J+UpSBTY29yZSBBbHBoYSA6IFwiICsgcmVzdWx0LnNjb3JlO1xyXG4gICAgICAgICAgICAgICAgbGV2ZWxSZXN1bHQuaW5uZXJUZXh0ID0gXCJOaXZlYXUgOiBcIiArIHJlc3VsdC5sZXZlbDtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGRlIGxcXCdlbnZvaSBkZSBsXFwnYXVkaW8gOicsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIHNjb3JlUmVzdWx0LmlubmVyVGV4dCA9IFwiVW5lIGVycmV1ciBzJ2VzdCBwcm9kdWl0ZS4gVmV1aWxsZXogcsOpZXNzYXllci5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIG1lZGlhUmVjb3JkZXIuc3RhcnQoKTtcclxuICAgICAgICBzdGFydEJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgc3RvcEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgc3RvcEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGlmIChtZWRpYVJlY29yZGVyICYmIGlzUmVjb3JkaW5nKSB7XHJcbiAgICAgICAgICAgIG1lZGlhUmVjb3JkZXIuc3RvcCgpO1xyXG4gICAgICAgICAgICBzdGFydEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBzdG9wQnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAvLyBDaWJsZXIgdG91cyBsZXMgw6lsw6ltZW50cyBhdmVjIGxhIGNsYXNzZSBcInJlbW92ZS1wYXJ0aWNpcGFudFwiXHJcbiAgY29uc3QgcmVtb3ZlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmVtb3ZlLXBhcnRpY2lwYW50XCIpO1xyXG5cclxuICAvLyBCb3VjbGUgc3VyIGNoYXF1ZSBib3V0b24gcG91ciBham91dGVyIHVuIGdlc3Rpb25uYWlyZSBkJ8OpdsOpbmVtZW50c1xyXG4gIHJlbW92ZUJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIGNvbnN0IHBhcnRpY2lwYW50SWQgPSB0aGlzLmRhdGFzZXQucGFydGljaXBhbnRJZDsgLy8gUsOpY3Vww6hyZSBsJ0lEIGR1IHBhcnRpY2lwYW50XHJcbiAgICAgIGNvbnN0IGV2ZW50SWQgPSB0aGlzLmRhdGFzZXQuZXZlbnRJZDsgLy8gUsOpY3Vww6hyZSBsJ0lEIGRlIGwnw6l2w6luZW1lbnRcclxuICAgICAgLy8gRWZmZWN0dWVyIGxhIHJlcXXDqnRlIEFKQVggYXZlYyBGZXRjaFxyXG4gICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wYXJ0aWNpcGFudC1pZD1cIiR7cGFydGljaXBhbnRJZH1cIl1gKVxyXG4gICAgICApO1xyXG5cclxuICAgICAgZmV0Y2goYC9hZG1pbi9ldmVudC8ke2V2ZW50SWR9L3JlbW92ZS1wYXJ0aWNpcGFudC8ke3BhcnRpY2lwYW50SWR9YCwge1xyXG4gICAgICAgIG1ldGhvZDogXCJERUxFVEVcIiwgLy8gTcOpdGhvZGUgREVMRVRFXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wYXJ0aWNpcGFudC1pZD1cIiR7cGFydGljaXBhbnRJZH1cIl1gKVxyXG4gICAgICAgICAgICAgIC5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFNpIGxhIHJlcXXDqnRlIHLDqXVzc2llLCBzdXBwcmltZXIgbCfDqWzDqW1lbnQgcGFydGljaXBhbnQgZHUgRE9NXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydChcIlVuZSBlcnJldXIgcydlc3QgcHJvZHVpdGUuXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgLy8gY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICBhbGVydChcIlVuZSBlcnJldXIgcydlc3QgcHJvZHVpdGUuXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn0pO1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3Qgc3RhdHVzRmlsdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGF0dXNcIik7XHJcblxyXG4gIGlmIChzdGF0dXNGaWx0ZXIpIHtcclxuICAgIHN0YXR1c0ZpbHRlci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcclxuICAgICAgZmlsdGVyUmVzcG9uc2VzKHN0YXR1c0ZpbHRlci52YWx1ZSk7XHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBmdW5jdGlvbiBmaWx0ZXJSZXNwb25zZXMoZmlsdGVyVmFsdWUpIHtcclxuICAgIC8vIFLDqWN1cMOpcmV6IHRvdXRlcyBsZXMgbGlnbmVzIGR1IHRhYmxlYXVcclxuICAgIGNvbnN0IHJvd3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwidHJbZGF0YS1zdGF0dXNdXCIpO1xyXG5cclxuICAgIHJvd3MuZm9yRWFjaCgocm93KSA9PiB7XHJcbiAgICAgIGNvbnN0IHJvd1N0YXR1cyA9IHJvdy5kYXRhc2V0LnN0YXR1cztcclxuXHJcbiAgICAgIC8vIE1vbnRyZXogb3UgY2FjaGV6IGxlcyBsaWduZXMgZW4gZm9uY3Rpb24gZHUgZmlsdHJlXHJcbiAgICAgIGlmIChmaWx0ZXJWYWx1ZSA9PT0gXCJhbGxcIiB8fCBmaWx0ZXJWYWx1ZSA9PT0gcm93U3RhdHVzKSB7XHJcbiAgICAgICAgcm93LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBsYW5ndWVTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhbmd1ZVwiKTtcclxuICBjb25zdCBjYXRlZ29yeVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2F0ZWdvcnlcIik7XHJcbiAgY29uc3Qgc3RhdHVzU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGF0dXNcIik7XHJcblxyXG4gIGlmIChsYW5ndWVTZWxlY3QgJiYgY2F0ZWdvcnlTZWxlY3QgJiYgc3RhdHVzU2VsZWN0KSB7XHJcbiAgICBsYW5ndWVTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICAgIGZpbHRyZVRvcGljcyhcclxuICAgICAgICBsYW5ndWVTZWxlY3QudmFsdWUsXHJcbiAgICAgICAgY2F0ZWdvcnlTZWxlY3QudmFsdWUsXHJcbiAgICAgICAgc3RhdHVzU2VsZWN0LnZhbHVlXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjYXRlZ29yeVNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcclxuICAgICAgZmlsdHJlVG9waWNzKFxyXG4gICAgICAgIGxhbmd1ZVNlbGVjdC52YWx1ZSxcclxuICAgICAgICBjYXRlZ29yeVNlbGVjdC52YWx1ZSxcclxuICAgICAgICBzdGF0dXNTZWxlY3QudmFsdWVcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHN0YXR1c1NlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcclxuICAgICAgZmlsdHJlVG9waWNzKFxyXG4gICAgICAgIGxhbmd1ZVNlbGVjdC52YWx1ZSxcclxuICAgICAgICBjYXRlZ29yeVNlbGVjdC52YWx1ZSxcclxuICAgICAgICBzdGF0dXNTZWxlY3QudmFsdWVcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZmlsdHJlVG9waWNzKGxhbmd1ZSwgY2F0ZWdvcnksIHN0YXR1cykge1xyXG4gICAgY29uc3QgdG9waWNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInRyW2RhdGEtc3RhdHVzXVwiKTtcclxuXHJcbiAgICB0b3BpY3MuZm9yRWFjaCgodG9waWMpID0+IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIChjYXRlZ29yeSA9PT0gdG9waWMuZGF0YXNldC5jYXRlZ29yeSB8fCBjYXRlZ29yeSA9PT0gXCJhbGxcIikgJiZcclxuICAgICAgICAobGFuZ3VlID09PSB0b3BpYy5kYXRhc2V0Lmxhbmd1ZSB8fCBsYW5ndWUgPT09IFwiYWxsXCIpICYmXHJcbiAgICAgICAgKHN0YXR1cyA9PT0gdG9waWMuZGF0YXNldC5zdGF0dXMgfHwgc3RhdHVzID09PSBcImFsbFwiKVxyXG4gICAgICApIHtcclxuICAgICAgICB0b3BpYy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvcGljLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51LWJ1dHRvblwiKTtcclxuICBjb25zdCBtb2JpbGVNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2JpbGUtbWVudVwiKTtcclxuICBjb25zdCBjbG9zZU1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLW1lbnVcIik7XHJcblxyXG4gIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIi10cmFuc2xhdGUteC1mdWxsXCIpO1xyXG4gIH0pO1xyXG5cclxuICBjbG9zZU1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LmFkZChcIi10cmFuc2xhdGUteC1mdWxsXCIpO1xyXG4gIH0pO1xyXG59KTtcclxuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gIGxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1hbnN3ZXJcIik7XHJcblxyXG4gIGlmIChhZGRCdXR0b24pIHtcclxuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWpvdXRlclJlcG9uc2UpO1xyXG4gIH1cclxuXHJcbiAgbGV0IGFuc3dlcnNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuc3dlcnNcIik7XHJcbiAgZnVuY3Rpb24gYWpvdXRlclJlcG9uc2UoKSB7XHJcbiAgICBsZXQgcHJvdG90eXBlID0gZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wcm90b3R5cGVdXCIpXHJcbiAgICAgIC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb3RvdHlwZVwiKTtcclxuICAgIGxldCBpbmRleCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjYW5zd2VycyAuYW5zd2VyLWl0ZW1cIikubGVuZ3RoO1xyXG4gICAgbGV0IG5ld0Zvcm0gPSBwcm90b3R5cGUucmVwbGFjZSgvX19uYW1lX18vZywgaW5kZXgpO1xyXG4gICAgbGV0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbmV3RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYW5zd2VyLWl0ZW1cIik7XHJcbiAgICBuZXdFbGVtZW50LmlubmVySFRNTCA9XHJcbiAgICAgIG5ld0Zvcm0gK1xyXG4gICAgICAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJyZW1vdmUtYW5zd2VyIGJ0bi1kZWxldGVcIj5TdXBwcmltZXI8L2J1dHRvbj4nO1xyXG4gICAgYW5zd2Vyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdFbGVtZW50KTtcclxuICB9XHJcblxyXG4gIC8vIEdlc3Rpb24gZGVzIHN1cHByZXNzaW9uc1xyXG4gIGlmIChhbnN3ZXJzQ29udGFpbmVyKVxyXG4gICAgYW5zd2Vyc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicmVtb3ZlLWFuc3dlclwiKSkge1xyXG4gICAgICAgIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnRlbnQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJpY29uIiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwibWF4SGVpZ2h0IiwidHJhbnNmb3JtIiwiaXRlbSIsInNjcm9sbEhlaWdodCIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsInJlcXVpcmUiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJzdGFydEJ0biIsImdldEVsZW1lbnRCeUlkIiwic3RvcEJ0biIsInNjb3JlUmVzdWx0IiwibGV2ZWxSZXN1bHQiLCJtZWRpYVJlY29yZGVyIiwiYXVkaW9DaHVua3MiLCJpc1JlY29yZGluZyIsIl9jYWxsZWUyIiwic3RyZWFtIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwiYXVkaW8iLCJNZWRpYVJlY29yZGVyIiwib25kYXRhYXZhaWxhYmxlIiwiZXZlbnQiLCJkYXRhIiwib25zdG9wIiwiX2NhbGxlZSIsImF1ZGlvQmxvYiIsImZvcm1EYXRhIiwicmVzcG9uc2UiLCJyZXN1bHQiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiY29uc29sZSIsImxvZyIsIkJsb2IiLCJGb3JtRGF0YSIsImFwcGVuZCIsImZldGNoIiwiYm9keSIsIm9rIiwianNvbiIsImlubmVyVGV4dCIsInNjb3JlIiwibGV2ZWwiLCJ0MCIsImVycm9yIiwic3RhcnQiLCJkaXNhYmxlZCIsInJlbW92ZUJ1dHRvbnMiLCJwcmV2ZW50RGVmYXVsdCIsInBhcnRpY2lwYW50SWQiLCJkYXRhc2V0IiwiZXZlbnRJZCIsImNvbmNhdCIsImhlYWRlcnMiLCJyZW1vdmUiLCJhbGVydCIsInN0YXR1c0ZpbHRlciIsImZpbHRlclJlc3BvbnNlcyIsImZpbHRlclZhbHVlIiwicm93cyIsInJvdyIsInJvd1N0YXR1cyIsInN0YXR1cyIsImNsYXNzTGlzdCIsImFkZCIsImxhbmd1ZVNlbGVjdCIsImNhdGVnb3J5U2VsZWN0Iiwic3RhdHVzU2VsZWN0IiwiZmlsdHJlVG9waWNzIiwibGFuZ3VlIiwiY2F0ZWdvcnkiLCJ0b3BpY3MiLCJ0b3BpYyIsIm1lbnVCdXR0b24iLCJtb2JpbGVNZW51IiwiY2xvc2VNZW51IiwiYWRkQnV0dG9uIiwiYWpvdXRlclJlcG9uc2UiLCJhbnN3ZXJzQ29udGFpbmVyIiwiZ2V0QXR0cmlidXRlIiwiaW5kZXgiLCJuZXdGb3JtIiwicmVwbGFjZSIsIm5ld0VsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJ0YXJnZXQiLCJjb250YWlucyIsInBhcmVudEVsZW1lbnQiXSwic291cmNlUm9vdCI6IiJ9