const Person = require("./Person");
const Student = require("./Student");
const Teacher = require("./Teacher");

// student
const student1 = new Student(
  "sabuj Mahonto",
  "sabujmahonto@gmail.com",
  ["computer fundamental 101", "Physics", "Chemistry", "Math"],
  12000
);
student1.print();

// teacher
const teacher1 = new Teacher(
  "Mr.Shohan Rahaman",
  "shohanrahaman@email.com",
  ["Computer fundamental", "Math"],
  15000000
);
teacher1.print();

module.exports = {
  Person,
  Student,
  Teacher,
};
