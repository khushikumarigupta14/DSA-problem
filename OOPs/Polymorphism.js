// What is Polymorphism?
// Polymorphism simply means "one thing, many forms."

// In simple words, the same function or object behaves differently in different situations.

// Example: College and Teachers
// Imagine a college where different teachers teach different subjects, but they all have a common role: teaching.

// 🔹 Science Teacher → Teaches Science
// 🔹 Commerce Teacher → Teaches Commerce
// 🔹 Arts Teacher → Teaches Arts

// Even though they all teach, they do it in different ways. This is polymorphism!

// Parent class
class Teacher {
  teach() {
    console.log("Teaching a subject...");
  }
}

// Child classes with different behaviors
class ScienceTeacher extends Teacher {
  teach() {
    console.log("Teaching Physics and Chemistry.");
  }
}

class CommerceTeacher extends Teacher {
  teach() {
    console.log("Teaching Business and Accounting.");
  }
}

class ArtsTeacher extends Teacher {
  teach() {
    console.log("Teaching History and Sociology.");
  }
}

// Using Polymorphism
const teachers = [
  new ScienceTeacher(),
  new CommerceTeacher(),
  new ArtsTeacher(),
];

teachers.forEach((teacher) => teacher.teach());
// 🔹 A mobile phone has a call function 📱
// 🔹 But it works differently when calling via SIM, WhatsApp, or Zoom
// 🔹 The same "call" function has different behaviors → That’s polymorphism! 🎯
