import Fruit from "./Fruit.class.js";

import Color from "./Color.class.js";
class Kiwi extends Fruit {
  //méthode magique => le constructeur s'appelle à la création d'une instance de la class Color
  constructor() {
    //définition de propiétés
    super();
    this._color = new Color(50, 205, 50);
    this._acidity = 25;
    this._sugar = 7;
    this._volume = 15;
    this._vitamins = ["C"];
    // this._weight = 50;
  }

  //méthode magique
  //surcharge de la méthode toString
  toString() {
    return "je suis un kiwi";
  }
}

export default Kiwi;
