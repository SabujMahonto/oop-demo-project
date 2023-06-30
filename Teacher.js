const Person = require("./Person");

class Teacher extends Person {
  #subject;
  #salary;
  constructor(name, email, subject, salary) {
    super(name, email);
    this.#subject = subject;
    this.#salary = salary;
  }
  get subject() {
    return this.#subject;
  }
  set subject(value) {
    this.#subject = value;
  }
  get salary() {
    return this.#salary;
  }
  set salary(value) {
    this.#salary = value;
  }
  print() {
    console.log(this + "");
  }

  toString() {
    return `Teacher:${super.toString()},subject:${this.#subject},salary:${
      this.#salary
    }`;
  }
}

module.exports = Teacher;
