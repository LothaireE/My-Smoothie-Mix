import Banana from "./Banana.class.js";
import Strawberry from "./Strawberry.class.js";
import Kiwi from "./Kiwi.class.js";
import Smoothie from "./Smoothie.class.js";

let smoothie = new Smoothie();
let banana = new Banana();
let strawberry = new Strawberry();
let kiwi = new Kiwi();

let bananaBtn = document.querySelector("#banana");
let strawberryBtn = document.querySelector("#strawberry");
let kiwiBtn = document.querySelector("#kiwi");
console.log(bananaBtn);
bananaBtn.addEventListener("click", function () {
  smoothie.addFruit(banana);
  console.log(smoothie);
});
strawberryBtn.addEventListener("click", function () {
  smoothie.addFruit(strawberry);
  console.log(smoothie);
});
kiwiBtn.addEventListener("click", function () {
  smoothie.addFruit(kiwi);
  console.log(smoothie);
});

//ECOUTEURS DE CLICK SUR NOS BOUTONS BANANE FRAISE KIWI
//smoothie.addFruit(new Banana())
