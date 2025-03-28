export default class Currency {
    /**
     * Constructor for the Currency class
     * @param {string} code - The currency symbol or code (e.g. '$')
     * @param {string} name - The full name of the currency (e.g. 'Dollars')
     */
    constructor(code, name) {
      if (typeof code !== 'string') {
        throw new TypeError('Code must be a string');
      }
  
      if (typeof name !== 'string') {
        throw new TypeError('Name must be a string');
      }
  
      this._code = code;
      this._name = name;
    }
  
    // Getter for code
    get code() {
      return this._code;
    }
  
    // Setter for code
    set code(newCode) {
      if (typeof newCode !== 'string') {
        throw new TypeError('Code must be a string');
      }
      this._code = newCode;
    }
  
    // Getter for name
    get name() {
      return this._name;
    }
  
    // Setter for name
    set name(newName) {
      if (typeof newName !== 'string') {
        throw new TypeError('Name must be a string');
      }
      this._name = newName;
    }
  
    /**
     * Returns the currency information in "name (code)" format
     * @returns {string}
     */
    displayFullCurrency() {
      return `${this._name} (${this._code})`;
    }
  }
