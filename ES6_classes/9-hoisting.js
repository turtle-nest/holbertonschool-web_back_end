// Define HolbertonClass first so it can be used when instantiating students
export class HolbertonClass {
    constructor(year, location) {
      this._year = year;
      this._location = location;
    }
  
    get year() {
      return this._year;
    }
  
    get location() {
      return this._location;
    }
  }
  
  // Define StudentHolberton before instantiation
  export class StudentHolberton {
    /**
     * Constructor for StudentHolberton
     * @param {string} firstName - Student's first name
     * @param {string} lastName - Student's last name
     * @param {HolbertonClass} holbertonClass - Reference to the student's class
     */
    constructor(firstName, lastName, holbertonClass) {
      this._firstName = firstName;
      this._lastName = lastName;
      this._holbertonClass = holbertonClass;
    }
  
    get fullName() {
      return `${this._firstName} ${this._lastName}`;
    }
  
    get holbertonClass() {
      return this._holbertonClass;
    }
  
    get fullStudentDescription() {
      return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
    }
  }
  
  // Instantiate classes after definitions
  const class2019 = new HolbertonClass(2019, 'San Francisco');
  const class2020 = new HolbertonClass(2020, 'San Francisco');
  
  // Create students and assign them to classes
  const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
  const student2 = new StudentHolberton('John', 'Doe', class2020);
  const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
  const student4 = new StudentHolberton('Donald', 'Bush', class2019);
  const student5 = new StudentHolberton('Jason', 'Sandler', class2019);
  
  // Export the list of students
  export const listOfStudents = [student1, student2, student3, student4, student5];
  export default listOfStudents;
