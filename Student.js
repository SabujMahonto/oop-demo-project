const Person = require("./Person");

class Student extends Person {
  #subjects;
  #tuitionFee;

  constructor(name, email, subjects, tuitionFee) {
    super(name, email);
    this.#subjects = subjects;
    this.#tuitionFee = tuitionFee;
  }

  get subjects() {
    return this.#subjects;
  }

  set subjects(value) {
    this.#subjects = value;
  }

  get tuitionFee() {
    return this.#tuitionFee;
  }

  set tuitionFee(value) {
    this.#tuitionFee = value;
  }

  print() {
    console.log(this + "");
  }
  toString() {
    return `Student:${super.toString()}, Subject:${this.#subjects},TuitionFee:${
      this.tuitionFee
    }`;
  }
}
module.exports = Student;
