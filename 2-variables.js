
// The main difference between var and let lies in their scoping behavior.


function exampleFunction() {
    if (true) {
      var usingVar = "I am using var!";
      let usingLet = "I am using let!";
    }
  
    console.log(usingVar); // Outputs: "I am using var!"
    // console.log(usingLet); // Uncommenting this line would result in an error
  }
  
  exampleFunction();
  
  console.log(usingVar); // Outputs: "I am using var!" (hoisted to the function scope)
  // console.log(usingLet); // Uncommenting this line would result in an error

  

  const pi = 3.14;

  let counter = 0;
counter = counter + 1;

// Be aware that both let and var are hoisted to the top of their scope, but the key difference is that variables declared with let are not initialized until the interpreter reaches the declaration. This can lead to a "temporal dead zone" where accessing the variable before its declaration results in an error.

console.log(x); // undefined
var x = 5;

// vs.

// Throws a ReferenceError
console.log(y);
let y = 10;
