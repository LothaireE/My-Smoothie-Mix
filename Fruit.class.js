class Fruit {
  //méthode magique => le constructeur s'appelle à la création d'une instance de la class Color
  constructor() {
    //définition de propiétés
    this._color = null;
    this._acidity = 0;
    this._sugar = 0;
    this._volume = 0;
    this._vitamins = [];
    // this._weight = 0;
  }

  //getter / accesseurs

  get color() {
    return this._color;
  }
  get acidity() {
    return this._acidity;
  }
  get sugar() {
    return this._sugar;
  }
  get volume() {
    return this._volume;
  }
  get vitamins() {
    return this._vitamins;
  }
  get weight() {
    return this._weight;
  }
  //setter / mutateurs

  set color(color) {
    console.log("La propriété color a été modifié");
    this._color = color;
  }

  set acidity(acidity) {
    console.log("La propriété acidity a été modifié");
    this._acidity = acidity;
  }

  set sugar(sugar) {
    console.log("La propriété sugar a été modifié");
    this._sugar = sugar;
  }

  set volume(volume) {
    console.log("La propriété volume a été modifié");
    this._volume = volume;
  }

  set vitamins(vitamins) {
    console.log("La propriété vitamins a été modifié");
    this._vitamins = vitamins;
  }

  set weight(weight) {
    console.log("La propriété weight a été modifié");
    this._weight = weight;
  }

  //méthode magique
  //surcharge de la méthode toString
  toString() {
    return "je suis un fruit";
  }
}

export default Fruit;
