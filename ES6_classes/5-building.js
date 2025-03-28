export default class Building {
    /**
     * Constructor for Building class
     * @param {number} sqft - The total square footage
     */
    constructor(sqft) {
      if (typeof sqft !== 'number') {
        throw new TypeError('sqft must be a number');
      }
  
      this._sqft = sqft;
  
      // Check that the child class has implemented evacuationWarningMessage
      if (this.constructor !== Building && this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  
    // Getter for sqft
    get sqft() {
      return this._sqft;
    }
  
    /**
     * This method must be overridden by subclasses
     * @throws {Error} if not overridden
     */
    evacuationWarningMessage() {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
