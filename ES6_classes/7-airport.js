export default class Airport {
    /**
     * Constructor for Airport
     * @param {string} name - Full name of the airport
     * @param {string} code - IATA airport code
     */
    constructor(name, code) {
      if (typeof name !== 'string') {
        throw new TypeError('Name must be a string');
      }
  
      if (typeof code !== 'string') {
        throw new TypeError('Code must be a string');
      }
  
      this._name = name;
      this._code = code;
    }
  
    // Getter for name
    get name() {
      return this._name;
    }
  
    // Getter for code
    get code() {
      return this._code;
    }
  
    /**
     * Override the default toString method
     * @returns {string}
     */
    toString() {
      return `[object ${this._code}]`;
    }
  }
