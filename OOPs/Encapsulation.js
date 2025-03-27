// What is Encapsulation?
// Encapsulation simply means hiding details and only showing what is necessary.

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
        this.name = name;  // Public (Can be accessed directly)
        let streams = {};  // Private (Hidden inside the class)

        // Method to add a stream (like college administration adding a stream)
        this.addStream = function(streamName, subjects) {
            streams[streamName] = subjects;
        };

        // Method to get subjects (like a student asking the office about subjects)
        this.getStreamSubjects = function(streamName) {
            return streams[streamName] || "Stream not found";
        };
    }
}

// Creating a college object
const myCollege = new College("ABC College");

// Adding streams
myCollege.addStream("Science", ["Physics", "Chemistry", "Biology"]);
myCollege.addStream("Commerce", ["Accounting", "Business Studies"]);

// Getting subjects of a stream
console.log(myCollege.getStreamSubjects("Science")); // Output: ["Physics", "Chemistry", "Biology"]
console.log(myCollege.getStreamSubjects("Arts"));    // Output: "Stream not found"

// Trying to access private data directly (Not allowed)
console.log(myCollege.streams);  // ❌ Undefined (Because it's private)
