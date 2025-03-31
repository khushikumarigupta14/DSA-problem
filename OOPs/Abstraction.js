// What is Abstraction?
// Abstraction means hiding the unnecessary details and showing only the important parts.

// It’s like using something without knowing how it works internally.

// Example: College and Online Admission System
// Imagine a college that has an online admission system.

// 🔹 As a student, you can:
// ✔️ Fill out the admission form
// ✔️ Upload documents
// ✔️ Pay the fees

// 🔹 But you DON’T see:
// ❌ How the data is stored in the database
// ❌ How the fees are processed internally
// ❌ How verification is done behind the scenes

// The system hides the complex details from students and only provides a simple interface.

// This is abstraction → You use the system without worrying about the internal logic!

// Abstract class (Cannot be used directly)
class CollegeAdmission {
  submitForm() {
    console.log("Form submitted successfully.");
  }

  uploadDocuments() {
    console.log("Documents uploaded.");
  }

  // Abstract method (to be implemented by subclasses)
  payFees() {
    throw new Error("This method must be overridden.");
  }
}

// Concrete class (Implements the abstract class)
class StudentAdmission extends CollegeAdmission {
  payFees() {
    console.log("Fees paid via online payment.");
  }
}

// Using abstraction
const student = new StudentAdmission();
student.submitForm(); // ✅ Output: Form submitted successfully.
student.uploadDocuments(); // ✅ Output: Documents uploaded.
student.payFees(); // ✅ Output: Fees paid via online payment.
// 🔹 Using a mobile phone 📱
// ✔️ You tap on an app and it opens
// ❌ You don’t see the internal code running
// ✔️ You just use the simple interface
