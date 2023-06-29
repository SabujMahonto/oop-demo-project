class Person {
  static PI = 3.1416;
  static fullName = "branden edge";
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
  set name(value) {
    this.#name = value;
  }

  print() {
    console.log(this + "");
  }
  toString() {
    return `Name:${this.#name} Email:${this.#email}`;
  }
  static isValid(age) {
    return age >= 18;
  }
}

const person1 = new Person("sabuj mahonto", "sabuj@email.com", 30);
const person2 = new Person("Shohanur Rahoman", "shohanur@gamil.com", 23);

console.log(person1.name);
person1.name = "Somir Mahonto";
console.log(person1);
person1.print();

const testUser = {
  name: "test user",
  email: "testuser@gmail.com",
  age: 24,
};

let person4 = null;
if (Person.isValid(testUser.age)) {
  person4 = new Person(testUser.name, testUser.email);
}
person4.print();
