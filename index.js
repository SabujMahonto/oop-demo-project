const Person = require("./Person");
const Student = require("./Student");
const Teacher = require("./Teacher");

// student
const student = new Student(
  "dip roy",
  "dipuroy@email.com",
  ["english", "bangla", "Math"],
  23000
);

student.print();
// console.log(student);

// teacher
const teacher = new Teacher(
  "Mr.Shohanur Rahaman",
  "shohanur@email.com",
  ["English", "Bangla", "Math", "Physic"],
  500000
);

teacher.print();

module.exports = {
  Person,
  Student,
  Teacher,
};
