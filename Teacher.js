class Teacher {
  #subject;
  #salary;
  constructor(subject, salary) {
    this.#subject = subject;
    this.#salary = salary;
  }
  get subject() {
    return this.#subject;
  }
  set subject(sub) {
    this.#subject = sub;
  }
  get salary() {
    return this.#salary;
  }

  print() {
    console.log(this + "");
  }
  toString() {
    return `Subject:${this.#subject} salary:${this.#salary}`;
  }
}

module.exports = Teacher;
