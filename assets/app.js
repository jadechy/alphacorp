// import "./bootstrap.js";

/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import "./styles/app.css";
import "./js/filterResponses.js";
import "./js/filterTopics.js";
import "./js/quizNew.js";
import "./js/deleteParticipantEvent.js";
import "./js/accordion.js";
import "./js/header.js";

console.log("Turbo actif ?", typeof Turbo !== "undefined" ? "Oui" : "Non");

console.log("This log comes from assets/app.js - welcome to AssetMapper! 🎉");
