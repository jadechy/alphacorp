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
          startBtn.classList.add("hidden");
          stopBtn.classList.remove("hidden");
          _context2.next = 7;
          return navigator.mediaDevices.getUserMedia({
            audio: true
          });
        case 7:
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
                  isRecording = false;
                  audioBlob = new Blob(audioChunks, {
                    type: "audio/wav"
                  });
                  formData = new FormData();
                  formData.append("audio", audioBlob);
                  startBtn.classList.remove("hidden");
                  stopBtn.classList.add("hidden");
                  _context.prev = 6;
                  _context.next = 9;
                  return fetch("/scream/analyze-audio", {
                    method: "POST",
                    body: formData
                  });
                case 9:
                  response = _context.sent;
                  if (response.ok) {
                    _context.next = 12;
                    break;
                  }
                  throw new Error("Erreur du serveur");
                case 12:
                  _context.next = 14;
                  return response.json();
                case 14:
                  result = _context.sent;
                  scoreResult.classList.remove("hidden");
                  levelResult.classList.remove("hidden");
                  scoreResult.innerText = "🔥 Score Alpha : " + result.score;
                  levelResult.innerText = "Niveau : " + result.level;
                  _context.next = 25;
                  break;
                case 21:
                  _context.prev = 21;
                  _context.t0 = _context["catch"](6);
                  console.error("Erreur lors de l'envoi de l'audio :", _context.t0);
                  scoreResult.innerText = "Une erreur s'est produite. Veuillez réessayer.";
                case 25:
                case "end":
                  return _context.stop();
              }
            }, _callee, null, [[6, 21]]);
          }));
          mediaRecorder.start();
          startBtn.disabled = true;
          stopBtn.disabled = false;
        case 15:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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InNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXVkaW9SZWNvcmRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZGVsZXRlUGFydGljaXBhbnRFdmVudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZmlsdGVyUmVzcG9uc2VzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9maWx0ZXJUb3BpY3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcXVpek5ldy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3M/NmJlNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgXCIuL2Jvb3RzdHJhcC5qc1wiO1xuXG4vKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFRoaXMgZmlsZSB3aWxsIGJlIGluY2x1ZGVkIG9udG8gdGhlIHBhZ2UgdmlhIHRoZSBpbXBvcnRtYXAoKSBUd2lnIGZ1bmN0aW9uLFxuICogd2hpY2ggc2hvdWxkIGFscmVhZHkgYmUgaW4geW91ciBiYXNlLmh0bWwudHdpZy5cbiAqL1xuaW1wb3J0IFwiLi9zdHlsZXMvYXBwLmNzc1wiO1xuaW1wb3J0IFwiLi9qcy9maWx0ZXJSZXNwb25zZXMuanNcIjtcbmltcG9ydCBcIi4vanMvZmlsdGVyVG9waWNzLmpzXCI7XG5pbXBvcnQgXCIuL2pzL3F1aXpOZXcuanNcIjtcbmltcG9ydCBcIi4vanMvZGVsZXRlUGFydGljaXBhbnRFdmVudC5qc1wiO1xuaW1wb3J0IFwiLi9qcy9hY2NvcmRpb24uanNcIjtcbmltcG9ydCBcIi4vanMvaGVhZGVyLmpzXCI7XG5pbXBvcnQgXCIuL2pzL2F1ZGlvUmVjb3JkZXIuanNcIjtcbiIsImRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWNjb3JkaW9uLWJ0blwiKS5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGJ1dHRvbi5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgY29uc3QgaWNvbiA9IGJ1dHRvbi5xdWVyeVNlbGVjdG9yKFwiLmljb25cIik7XG5cbiAgICBpZiAoY29udGVudC5zdHlsZS5tYXhIZWlnaHQpIHtcbiAgICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gbnVsbDtcbiAgICAgIGljb24uc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoMGRlZylcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWNjb3JkaW9uLWNvbnRlbnRcIilcbiAgICAgICAgLmZvckVhY2goKGl0ZW0pID0+IChpdGVtLnN0eWxlLm1heEhlaWdodCA9IG51bGwpKTtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiLmljb25cIilcbiAgICAgICAgLmZvckVhY2goKGl0ZW0pID0+IChpdGVtLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKDBkZWcpXCIpKTtcblxuICAgICAgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBjb250ZW50LnNjcm9sbEhlaWdodCArIFwicHhcIjtcbiAgICAgIGljb24uc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoMTgwZGVnKVwiO1xuICAgIH1cbiAgfSk7XG59KTtcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0UmVjb3JkaW5nXCIpO1xuICBjb25zdCBzdG9wQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdG9wUmVjb3JkaW5nXCIpO1xuICBjb25zdCBzY29yZVJlc3VsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NvcmVSZXN1bHRcIik7XG4gIGNvbnN0IGxldmVsUmVzdWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZXZlbFJlc3VsdFwiKTtcbiAgbGV0IG1lZGlhUmVjb3JkZXI7XG4gIGxldCBhdWRpb0NodW5rcyA9IFtdO1xuXG4gIGxldCBpc1JlY29yZGluZyA9IGZhbHNlO1xuXG4gIHN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG4gICAgaWYgKGlzUmVjb3JkaW5nKSByZXR1cm47XG4gICAgaXNSZWNvcmRpbmcgPSB0cnVlO1xuICAgIHN0YXJ0QnRuLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgc3RvcEJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIGNvbnN0IHN0cmVhbSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHsgYXVkaW86IHRydWUgfSk7XG4gICAgbWVkaWFSZWNvcmRlciA9IG5ldyBNZWRpYVJlY29yZGVyKHN0cmVhbSk7XG4gICAgYXVkaW9DaHVua3MgPSBbXTtcblxuICAgIG1lZGlhUmVjb3JkZXIub25kYXRhYXZhaWxhYmxlID0gKGV2ZW50KSA9PiB7XG4gICAgICBhdWRpb0NodW5rcy5wdXNoKGV2ZW50LmRhdGEpO1xuICAgIH07XG5cbiAgICBtZWRpYVJlY29yZGVyLm9uc3RvcCA9IGFzeW5jICgpID0+IHtcbiAgICAgIGlzUmVjb3JkaW5nID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IGF1ZGlvQmxvYiA9IG5ldyBCbG9iKGF1ZGlvQ2h1bmtzLCB7IHR5cGU6IFwiYXVkaW8vd2F2XCIgfSk7XG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKFwiYXVkaW9cIiwgYXVkaW9CbG9iKTtcbiAgICAgIHN0YXJ0QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICBzdG9wQnRuLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL3NjcmVhbS9hbmFseXplLWF1ZGlvXCIsIHtcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgIGJvZHk6IGZvcm1EYXRhLFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyZXVyIGR1IHNlcnZldXJcIik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHNjb3JlUmVzdWx0LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgIGxldmVsUmVzdWx0LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgIHNjb3JlUmVzdWx0LmlubmVyVGV4dCA9IFwi8J+UpSBTY29yZSBBbHBoYSA6IFwiICsgcmVzdWx0LnNjb3JlO1xuICAgICAgICBsZXZlbFJlc3VsdC5pbm5lclRleHQgPSBcIk5pdmVhdSA6IFwiICsgcmVzdWx0LmxldmVsO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycmV1ciBsb3JzIGRlIGwnZW52b2kgZGUgbCdhdWRpbyA6XCIsIGVycm9yKTtcbiAgICAgICAgc2NvcmVSZXN1bHQuaW5uZXJUZXh0ID1cbiAgICAgICAgICBcIlVuZSBlcnJldXIgcydlc3QgcHJvZHVpdGUuIFZldWlsbGV6IHLDqWVzc2F5ZXIuXCI7XG4gICAgICB9XG4gICAgfTtcblxuICAgIG1lZGlhUmVjb3JkZXIuc3RhcnQoKTtcblxuICAgIHN0YXJ0QnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBzdG9wQnRuLmRpc2FibGVkID0gZmFsc2U7XG4gIH0pO1xuXG4gIHN0b3BCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAobWVkaWFSZWNvcmRlciAmJiBpc1JlY29yZGluZykge1xuICAgICAgbWVkaWFSZWNvcmRlci5zdG9wKCk7XG4gICAgICBzdGFydEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgc3RvcEJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgfVxuICB9KTtcbn0pO1xuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAvLyBDaWJsZXIgdG91cyBsZXMgw6lsw6ltZW50cyBhdmVjIGxhIGNsYXNzZSBcInJlbW92ZS1wYXJ0aWNpcGFudFwiXG4gIGNvbnN0IHJlbW92ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJlbW92ZS1wYXJ0aWNpcGFudFwiKTtcblxuICAvLyBCb3VjbGUgc3VyIGNoYXF1ZSBib3V0b24gcG91ciBham91dGVyIHVuIGdlc3Rpb25uYWlyZSBkJ8OpdsOpbmVtZW50c1xuICByZW1vdmVCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgY29uc3QgcGFydGljaXBhbnRJZCA9IHRoaXMuZGF0YXNldC5wYXJ0aWNpcGFudElkOyAvLyBSw6ljdXDDqHJlIGwnSUQgZHUgcGFydGljaXBhbnRcbiAgICAgIGNvbnN0IGV2ZW50SWQgPSB0aGlzLmRhdGFzZXQuZXZlbnRJZDsgLy8gUsOpY3Vww6hyZSBsJ0lEIGRlIGwnw6l2w6luZW1lbnRcbiAgICAgIC8vIEVmZmVjdHVlciBsYSByZXF1w6p0ZSBBSkFYIGF2ZWMgRmV0Y2hcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wYXJ0aWNpcGFudC1pZD1cIiR7cGFydGljaXBhbnRJZH1cIl1gKVxuICAgICAgKTtcblxuICAgICAgZmV0Y2goYC9hZG1pbi9ldmVudC8ke2V2ZW50SWR9L3JlbW92ZS1wYXJ0aWNpcGFudC8ke3BhcnRpY2lwYW50SWR9YCwge1xuICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsIC8vIE3DqXRob2RlIERFTEVURVxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wYXJ0aWNpcGFudC1pZD1cIiR7cGFydGljaXBhbnRJZH1cIl1gKVxuICAgICAgICAgICAgICAucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgIC8vIFNpIGxhIHJlcXXDqnRlIHLDqXVzc2llLCBzdXBwcmltZXIgbCfDqWzDqW1lbnQgcGFydGljaXBhbnQgZHUgRE9NXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiVW5lIGVycmV1ciBzJ2VzdCBwcm9kdWl0ZS5cIik7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnJvcik7XG4gICAgICAgICAgYWxlcnQoXCJVbmUgZXJyZXVyIHMnZXN0IHByb2R1aXRlLlwiKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHN0YXR1c0ZpbHRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhdHVzXCIpO1xuXG4gIGlmIChzdGF0dXNGaWx0ZXIpIHtcbiAgICBzdGF0dXNGaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICBmaWx0ZXJSZXNwb25zZXMoc3RhdHVzRmlsdGVyLnZhbHVlKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZnVuY3Rpb24gZmlsdGVyUmVzcG9uc2VzKGZpbHRlclZhbHVlKSB7XG4gICAgLy8gUsOpY3Vww6lyZXogdG91dGVzIGxlcyBsaWduZXMgZHUgdGFibGVhdVxuICAgIGNvbnN0IHJvd3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwidHJbZGF0YS1zdGF0dXNdXCIpO1xuXG4gICAgcm93cy5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgIGNvbnN0IHJvd1N0YXR1cyA9IHJvdy5kYXRhc2V0LnN0YXR1cztcblxuICAgICAgLy8gTW9udHJleiBvdSBjYWNoZXogbGVzIGxpZ25lcyBlbiBmb25jdGlvbiBkdSBmaWx0cmVcbiAgICAgIGlmIChmaWx0ZXJWYWx1ZSA9PT0gXCJhbGxcIiB8fCBmaWx0ZXJWYWx1ZSA9PT0gcm93U3RhdHVzKSB7XG4gICAgICAgIHJvdy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn0pO1xuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICBjb25zdCBsYW5ndWVTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhbmd1ZVwiKTtcbiAgY29uc3QgY2F0ZWdvcnlTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhdGVnb3J5XCIpO1xuICBjb25zdCBzdGF0dXNTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXR1c1wiKTtcblxuICBpZiAobGFuZ3VlU2VsZWN0ICYmIGNhdGVnb3J5U2VsZWN0ICYmIHN0YXR1c1NlbGVjdCkge1xuICAgIGxhbmd1ZVNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgIGZpbHRyZVRvcGljcyhcbiAgICAgICAgbGFuZ3VlU2VsZWN0LnZhbHVlLFxuICAgICAgICBjYXRlZ29yeVNlbGVjdC52YWx1ZSxcbiAgICAgICAgc3RhdHVzU2VsZWN0LnZhbHVlXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgY2F0ZWdvcnlTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICBmaWx0cmVUb3BpY3MoXG4gICAgICAgIGxhbmd1ZVNlbGVjdC52YWx1ZSxcbiAgICAgICAgY2F0ZWdvcnlTZWxlY3QudmFsdWUsXG4gICAgICAgIHN0YXR1c1NlbGVjdC52YWx1ZVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHN0YXR1c1NlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgIGZpbHRyZVRvcGljcyhcbiAgICAgICAgbGFuZ3VlU2VsZWN0LnZhbHVlLFxuICAgICAgICBjYXRlZ29yeVNlbGVjdC52YWx1ZSxcbiAgICAgICAgc3RhdHVzU2VsZWN0LnZhbHVlXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZmlsdHJlVG9waWNzKGxhbmd1ZSwgY2F0ZWdvcnksIHN0YXR1cykge1xuICAgIGNvbnN0IHRvcGljcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0cltkYXRhLXN0YXR1c11cIik7XG5cbiAgICB0b3BpY3MuZm9yRWFjaCgodG9waWMpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgKGNhdGVnb3J5ID09PSB0b3BpYy5kYXRhc2V0LmNhdGVnb3J5IHx8IGNhdGVnb3J5ID09PSBcImFsbFwiKSAmJlxuICAgICAgICAobGFuZ3VlID09PSB0b3BpYy5kYXRhc2V0Lmxhbmd1ZSB8fCBsYW5ndWUgPT09IFwiYWxsXCIpICYmXG4gICAgICAgIChzdGF0dXMgPT09IHRvcGljLmRhdGFzZXQuc3RhdHVzIHx8IHN0YXR1cyA9PT0gXCJhbGxcIilcbiAgICAgICkge1xuICAgICAgICB0b3BpYy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9waWMuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSk7XG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnUtYnV0dG9uXCIpO1xuICBjb25zdCBtb2JpbGVNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2JpbGUtbWVudVwiKTtcbiAgY29uc3QgY2xvc2VNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1tZW51XCIpO1xuXG4gIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtb2JpbGVNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCItdHJhbnNsYXRlLXgtZnVsbFwiKTtcbiAgfSk7XG5cbiAgY2xvc2VNZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbW9iaWxlTWVudS5jbGFzc0xpc3QuYWRkKFwiLXRyYW5zbGF0ZS14LWZ1bGxcIik7XG4gIH0pO1xufSk7XG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gIGxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1hbnN3ZXJcIik7XG5cbiAgaWYgKGFkZEJ1dHRvbikge1xuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWpvdXRlclJlcG9uc2UpO1xuICB9XG5cbiAgbGV0IGFuc3dlcnNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuc3dlcnNcIik7XG4gIGZ1bmN0aW9uIGFqb3V0ZXJSZXBvbnNlKCkge1xuICAgIGxldCBwcm90b3R5cGUgPSBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wcm90b3R5cGVdXCIpXG4gICAgICAuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm90b3R5cGVcIik7XG4gICAgbGV0IGluZGV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNhbnN3ZXJzIC5hbnN3ZXItaXRlbVwiKS5sZW5ndGg7XG4gICAgbGV0IG5ld0Zvcm0gPSBwcm90b3R5cGUucmVwbGFjZSgvX19uYW1lX18vZywgaW5kZXgpO1xuICAgIGxldCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhbnN3ZXItaXRlbVwiKTtcbiAgICBuZXdFbGVtZW50LmlubmVySFRNTCA9XG4gICAgICBuZXdGb3JtICtcbiAgICAgICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInJlbW92ZS1hbnN3ZXIgYnRuLWRlbGV0ZVwiPlN1cHByaW1lcjwvYnV0dG9uPic7XG4gICAgYW5zd2Vyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdFbGVtZW50KTtcbiAgfVxuXG4gIC8vIEdlc3Rpb24gZGVzIHN1cHByZXNzaW9uc1xuICBpZiAoYW5zd2Vyc0NvbnRhaW5lcilcbiAgICBhbnN3ZXJzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicmVtb3ZlLWFuc3dlclwiKSkge1xuICAgICAgICBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9KTtcbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJidXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiY29udGVudCIsIm5leHRFbGVtZW50U2libGluZyIsImljb24iLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJtYXhIZWlnaHQiLCJ0cmFuc2Zvcm0iLCJpdGVtIiwic2Nyb2xsSGVpZ2h0IiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwicmVxdWlyZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsInN0YXJ0QnRuIiwiZ2V0RWxlbWVudEJ5SWQiLCJzdG9wQnRuIiwic2NvcmVSZXN1bHQiLCJsZXZlbFJlc3VsdCIsIm1lZGlhUmVjb3JkZXIiLCJhdWRpb0NodW5rcyIsImlzUmVjb3JkaW5nIiwiX2NhbGxlZTIiLCJzdHJlYW0iLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJhdWRpbyIsIk1lZGlhUmVjb3JkZXIiLCJvbmRhdGFhdmFpbGFibGUiLCJldmVudCIsImRhdGEiLCJvbnN0b3AiLCJfY2FsbGVlIiwiYXVkaW9CbG9iIiwiZm9ybURhdGEiLCJyZXNwb25zZSIsInJlc3VsdCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJCbG9iIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmZXRjaCIsImJvZHkiLCJvayIsImpzb24iLCJpbm5lclRleHQiLCJzY29yZSIsImxldmVsIiwidDAiLCJjb25zb2xlIiwiZXJyb3IiLCJzdGFydCIsImRpc2FibGVkIiwicmVtb3ZlQnV0dG9ucyIsInByZXZlbnREZWZhdWx0IiwicGFydGljaXBhbnRJZCIsImRhdGFzZXQiLCJldmVudElkIiwibG9nIiwiY29uY2F0IiwiaGVhZGVycyIsImFsZXJ0Iiwic3RhdHVzRmlsdGVyIiwiZmlsdGVyUmVzcG9uc2VzIiwiZmlsdGVyVmFsdWUiLCJyb3dzIiwicm93Iiwicm93U3RhdHVzIiwic3RhdHVzIiwibGFuZ3VlU2VsZWN0IiwiY2F0ZWdvcnlTZWxlY3QiLCJzdGF0dXNTZWxlY3QiLCJmaWx0cmVUb3BpY3MiLCJsYW5ndWUiLCJjYXRlZ29yeSIsInRvcGljcyIsInRvcGljIiwibWVudUJ1dHRvbiIsIm1vYmlsZU1lbnUiLCJjbG9zZU1lbnUiLCJhZGRCdXR0b24iLCJham91dGVyUmVwb25zZSIsImFuc3dlcnNDb250YWluZXIiLCJnZXRBdHRyaWJ1dGUiLCJpbmRleCIsIm5ld0Zvcm0iLCJyZXBsYWNlIiwibmV3RWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsInRhcmdldCIsImNvbnRhaW5zIiwicGFyZW50RWxlbWVudCJdLCJzb3VyY2VSb290IjoiIn0=