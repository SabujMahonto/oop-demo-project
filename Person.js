const _name = Symbol("name");
const _email = Symbol("email");

class Person {
  constructor(name, email) {
    this[_email] = email;
    this[_name] = name;
  }
  get name() {
    return this[_name];
  }
  set name(value) {
    this[_name] = value;
  }
  get email() {
    return this[_email];
  }
  set email(value) {
    this[_email] = value;
  }
  print() {
    console.log(this + "");
  }
  toString() {
    return `Name:${this[_name]},Email:${this[_email]}`;
  }
}

module.exports = Person;
