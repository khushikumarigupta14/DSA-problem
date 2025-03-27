// college--> streams(rules, subjects, and students,)
//               |
//               |
//              \ /
//             science
//             arts
//             commerce
// here college is a class and streams are its objects
// The College acts as a class that contains multiple streams as its internal data.

// Each Stream (Science, Commerce, Arts) has its own private data, such as student lists and subjects.

// The College Administration allows only limited access to this data using defined methods (functions).

class College {
    constructor(name) {
        this.name = name; // Public property
        this.streams = {}; // Private data (not directly accessible)
    }

    // Method to add a new stream
    addStream(streamName, subjects) {
        this.streams[streamName] = subjects;
    }

    // Method to get subjects of a particular stream (controlled access)
    getStreamSubjects(streamName) {
        return this.streams[streamName] || "Stream not found";
    }
}

// Creating a College Object
const myCollege = new College("ABC University");

// Adding Streams with subjects (Encapsulation)
myCollege.addStream("Science", ["Physics", "Chemistry", "Biology"]);
myCollege.addStream("Commerce", ["Accounting", "Business Studies", "Economics"]);
myCollege.addStream("Arts", ["History", "Psychology", "Sociology"]);

// Trying to access data (Encapsulated)
console.log(myCollege.getStreamSubjects("Science")); // ✅ Allowed
console.log(myCollege.streams); // ❌ Should not be directly accessible
