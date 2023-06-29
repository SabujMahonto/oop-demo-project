class Person {
  #name;
  #email;

  constructor(name, email, age) {
    this.#name = name;
    this.#email = email;
  }
  get name() {
    // return this.#name;
    // return this.#name.toUpperCase();
    // return this.#name.split(" ")[0];
    return this.#name.split(" ").at(0);
  }
  set name(value) {
    this.#name = value;
  }

  get email() {
    return this.#email;
  }
  set email(email) {
    this.#email = email;
  }

  print() {
    console.log(this + "");
  }
  toString() {
    return `Name:${this.#name} Email:${this.#email}`;
  }
}
module.exports = Person;

const person1 = new Person("sabuj mahonto", "sabuj@email.com");
const person2 = new Person("Shohanur Rahoman", "shohanur@gamil.com");
