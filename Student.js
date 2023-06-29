class Student {
  #subject;
  #tuitionFee;
  constructor(subject, tuitionFee) {
    this.#subject = subject;
    this.tuitionFee = tuitionFee;
  }
  get subject() {
    return this.#subject;
  }
  set subject(sub) {
    this.#subject = sub;
  }
  get tuitionFee() {
    return this.#tuitionFee;
  }

  print() {
    console.log(this + "");
  }
  toString() {
    return `Subject:${this.#subject} tuitionFee:${this.#tuitionFee}`;
  }
}
module.exports = Student;
