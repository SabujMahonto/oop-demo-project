class Person {
  #name;
  #email;
  constructor(name, email) {
    this.#name = name;
    this.#email = email;
  }
  get name() {
    return this.#name;
  }
  set name(value) {
    this.#name = value;
  }
  get email() {
    return this.#email;
  }
  set email(value) {
    this.#email = value;
  }
  print() {
    // console.log(this.toString());
    console.log(this + ""); // shortcut
  }
  toString() {
    return `Name:${this.#name}, Email:${this.#email}`;
  }
}

module.exports = Person;
