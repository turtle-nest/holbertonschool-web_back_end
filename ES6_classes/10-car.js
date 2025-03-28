export default class Car {
    /**
     * Constructor for Car class
     * @param {string} brand - The brand of the car
     * @param {string} motor - The motor type
     * @param {string} color - The color of the car
     */
    constructor(brand, motor, color) {
      this._brand = brand;
      this._motor = motor;
      this._color = color;
    }
  
    /**
     * Clone method that returns a new instance of the same class
     * without copying property values
     * @returns {Car}
     */
    cloneCar() {
      return new this.constructor();
    }
  }
