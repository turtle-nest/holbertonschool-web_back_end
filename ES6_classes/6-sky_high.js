import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  /**
   * Constructor for SkyHighBuilding
   * @param {number} sqft - The total square footage (passed to parent)
   * @param {number} floors - Number of floors
   */
  constructor(sqft, floors) {
    super(sqft);

    if (typeof floors !== 'number') {
      throw new TypeError('floors must be a number');
    }

    this._floors = floors;
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  /**
   * Overridden method to provide evacuation instructions
   * @returns {string}
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
