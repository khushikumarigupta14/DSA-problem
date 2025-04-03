// closure
// How do you use closures to create private variables
//  How do closures help in data privacy?

function outerFunc(outer) {
  let name = "Khushi"; // Private variable

  // Expose only the inner function
  return function innerFunc(inner) {
    console.log(
      `Outer function: ${outer}, Inner function: ${inner}, Name: ${name}`
    );
  };

  // Private function remains inaccessible from outside
  function privateFunc(privateParam) {
    console.log(`Private data exposed: ${privateParam}, Name: ${name}`);
  }
}

// Create an instance of the closure
const closureFunc = outerFunc("Khushi");

// Call the inner function
closureFunc("Inner"); // Works and accesses the private variable 'name'

// Trying to access private function will fail
// privateFunc("Private Data"); // This will throw a ReferenceError as privateFunc is not exposed
