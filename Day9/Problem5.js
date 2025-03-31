function counter() {
  let count = 0; // Private variable
  return function () {
    count++;
    console.log("Count:", count);
  };
}

const increment = counter();
increment(); // Count: 1
increment(); // Count: 2
increment(); // Count: 3
/**
 * 
App(){
  const [count,setCount]=useState()
  return (
  )}
  ```
  */
