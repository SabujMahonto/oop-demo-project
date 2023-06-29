class Person {
  constructor(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
  }
  changeName(name) {
    this.name = name;
  }

  changeEmail(email) {
    this.email = email;
  }
  sendEmail(msg) {
    console.log("to", this.email);
    console.log("email sending...");
    console.log("Message", msg);
  }
  print() {
    console.log(this);
  }
}

const person1 = new Person("sabuj", "sabuj@email.com", 30);
const person2 = new Person("Shohanur Rahoman", "shohanur@gamil.com", 23);
// console.log(person1);
person1.sendEmail("hello");
person1.changeName("somir");
person1.changeEmail("somir@gamil.com");

person2.print();
person1.print();
