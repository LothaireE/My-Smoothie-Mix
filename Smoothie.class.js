import Color from "./Color.class.js";

class Smoothie {
  constructor() {
    this._color = new Color(10, 10, 10);
    this._gobelet = document.querySelector("#gobelet");
    this._acidityLevel = document.querySelector("#acidity-level span");
    this._sugarLevel = document.querySelector("#sugar-level span");
    this._volumeLevel = document.querySelector("#volume-level span");
    this._vitaminLevel = document.querySelector("#vitamin-level span");

    this._juice = document.querySelector("#juice");
    this._fruits = [];
    this._volume = 0;
    this._acidity = 0;
    this._sugar = 0;
    this._vitamins = new Set();
  }

  //Methode
  addFruit(fruit) {
    console.log("fruit", fruit.color);
    this._fruits.push(fruit);
    this._volume += fruit.volume;
    this._acidity += fruit.acidity;
    this._sugar += fruit.sugar;
    this._color.colorMix(fruit.color);
    for (let vitamin of fruit.vitamins) {
      this._vitamins.add(vitamin);
    }
    this._juice.style.backgroundColor = this._color.getRgb();
    this._juice.style.height = `${this._volume * 2}px`;

    console.log("this._color.getRgb()", this._color.getRgb());
    this.domModification();
  }

  domModification() {
    // this._gobelet
    this._acidityLevel.innerHTML = this._acidity + "%";
    this._sugarLevel.innerHTML = this._sugar + "g";
    this._volumeLevel.innerHTML = this._volume + "Ml";
    let newVitamins = "";
    for (const vitamin of this._vitamins.values()) {
      newVitamins += vitamin + ", ";
      console.log("newVitamins", newVitamins);
    }
    newVitamins = newVitamins.slice(0, -2);
    console.log(newVitamins);
    this._vitaminLevel.innerHTML = newVitamins;
  }
}

export default Smoothie;
