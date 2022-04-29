import Fruit from "./Fruit.class.js";
import Color from "./Color.class.js";
class Strawberry extends Fruit {
  //méthode magique => le constructeur s'appelle à la création d'une instance de la class Color
  constructor() {
    super();
    this._color = new Color(220, 20, 60);
    this._acidity = 15;
    this._sugar = 4;
    this._volume = 8;
    this._vitamins = ["B9", "C"];
    // this._weight = 20;
  }

  //getter / accesseurs

  //méthode magique
  //surcharge de la méthode toString
  toString() {
    return "je suis une strawberry";
  }
}

export default Strawberry;
