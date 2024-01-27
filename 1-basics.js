
// SECTION Overview of JavaScript

// JavaScript is a high-level, interpreted programming language primarily used for building interactive and dynamic web pages.
// It is an essential part of web development, enabling client-side scripting to create interactive user interfaces

console.log("Hello, World!");
const today = new Date(); 
const hour = today.getHours(); 
if (hour < 12) {
    console.log("Good Morning!"); 
} 
else if (hour < 18) 
{ 
    console.log("Good Afternoon!"); 
} else { 
    console.log("Good Evening!"); 
}

// !SECTION

// SECTION Variables and Data Types

// Variables are containers for storing data values. JavaScript includes data types like Number, String, Boolean, Undefined, Null, Symbol, and Object.

// Declaring variables:

//     var, let, and const are used to declare variables.
//     var has function scope, while let and const have block scope.

// Data types:

//     Strings, Numbers, Booleans, Undefined, and Null are basic data types.

let firstName = "John";
let age = 25;
let isStudent = true;
let test = null;

// !SECTION

// SECTION  Arithmetic, comparison, logical operators:

//     Arithmetic operators: +, -, *, /, %
//     Comparison operators: ==, ===, !=, !==, <, >, <=, >=
//     Logical operators: && (AND), || (OR), ! (NOT)

let result = 5 + 3; // Addition
let isEqual = (10 === 10); // Strict equality
let isTrue = true && false; // Logical AND

// !SECTION

// SECTION  Control Flow

// If statements, else if, else:

//     Control the flow of execution based on conditions.

// Switch statements:

//     An alternative to multiple if-else statements.

let num = 10;

if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// !SECTION

// SECTION  Functions

// Declaring functions, parameters, and return values:

//     Functions are blocks of reusable code.

// Arrow functions:

//     A concise way to write functions.

function addNumbers(a, b) {
    return a + b;
  }

function addNumbers(a, b) {
    return a - b;
  }
  
  const multiply = (a, b) => a * b;

// !SECTION

// SECTION  Arrays and Loops

// Creating arrays and accessing elements:

//     Arrays are used to store multiple values.

// For, while, and forEach loops:

//     Iterating over arrays.

let colors = ["red", "green", "blue"];

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

colors.forEach(color => console.log(color));

// !SECTION



// SECTION  Objects

// Creating objects and accessing properties:

//     Objects are used to store key-value pairs.

// JSON format:

//     JavaScript Object Notation, a lightweight data interchange format.

let person = {
    name: "Alice",
    age: 30,
    isStudent: false
  };
  
  console.log(person.name);

// !SECTION

// SECTION  DOM Manipulation
// Introduction to the Document Object Model (DOM):

//     DOM represents the structure of a document as a tree of objects.

// Selecting and modifying HTML elements:

//     JavaScript can manipulate the content and structure of HTML documents.


  function changeText() {
    document.getElementById("demo").innerHTML = "Button Clicked!";
  }


// !SECTION

// SECTION  Events and Event Handling

// JavaScript can listen for events triggered by user actions.
// Attaching functions to respond to events.

  document.getElementById("myButton").addEventListener("click", function() {
    alert("Button Clicked!");
  });

// !SECTION

// SECTION  Asynchronous JavaScript


//     Asynchronous operations allow non-blocking execution.

// Callbacks, Promises, and async/await:

//     Methods to handle asynchronous tasks.

function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous operation
      setTimeout(() => {
        resolve("Data fetched successfully!");
      }, 2000);
    });
  }
  
  async function getData() {
    try {
      const result = await fetchData();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  
  getData();

// !SECTION


