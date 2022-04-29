import Fruit from "./Fruit.class.js";
import Color from "./Color.class.js";
class Banana extends Fruit {
  //méthode magique => le constructeur s'appelle à la création d'une instance de la class Color
  constructor() {
    super();
    //définition de propiétés

    this._color = new Color(255, 215, 0);
    this._acidity = 5;
    this._sugar = 10;
    this._volume = 30;
    this._vitamins = ["B6", "Mg"];
    // this._weight = 100;
  }

  //méthode magique
  //surcharge de la méthode toString
  toString() {
    return "je suis une banane";
  }
}

export default Banana;
