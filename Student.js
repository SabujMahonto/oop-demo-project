const Person = require("./Person");
const _subjects = Symbol("subjects");
const _tuitionFee = Symbol("tuitionFee");

class Student extends Person {
  constructor(name, email, subjects, tuitionFee) {
    super(name, email);
    this[_subjects] = subjects;
    this[_tuitionFee] = tuitionFee;
  }
  get subjects() {
    return this[_subjects];
  }
  get tuitionFee() {
    return this[_tuitionFee];
  }
  print() {
    console.log(this + "");
  }
  toString() {
    return ` ${super.toString()},Subjects:${this[_subjects]},TuitionFee:${
      this[_tuitionFee]
    }`;
  }
}
module.exports = Student;
