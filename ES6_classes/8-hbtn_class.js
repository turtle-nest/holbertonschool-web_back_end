export default class HolbertonClass {
    /**
     * Constructor for HolbertonClass
     * @param {number} size - Number of students
     * @param {string} location - Classroom location
     */
    constructor(size, location) {
      if (typeof size !== 'number') {
        throw new TypeError('Size must be a number');
      }
  
      if (typeof location !== 'string') {
        throw new TypeError('Location must be a string');
      }
  
      this._size = size;
      this._location = location;
    }
  
    // Getter for size
    get size() {
      return this._size;
    }
  
    // Getter for location
    get location() {
      return this._location;
    }
  
    /**
     * Used when object is cast to a number
     * @returns {number}
     */
    valueOf() {
      return this._size;
    }
  
    /**
     * Used when object is cast to a string
     * @returns {string}
     */
    toString() {
      return this._location;
    }
  }
