class Person {
  #name;
  #email;
  #age;
  constructor(name, email, age) {
    this.#name = name;
    this.#email = email;
    this.#age = age;
  }
  get name() {
    // return this.#name;
    // return this.#name.toUpperCase();
    // return this.#name.split(" ")[0];
    return this.#name.split(" ").at(0);
  }
  set name(name) {
    this.#name = name;
  }
  #sendEmail(msg) {
    console.log("to", this.#email);
    console.log("email sending...");
    console.log("Message", msg);
  }
  print() {
    console.log(this);
  }
}

const person1 = new Person("sabuj mahonto", "sabuj@email.com", 30);
const person2 = new Person("Shohanur Rahoman", "shohanur@gamil.com", 23);

console.log(person1.name);
