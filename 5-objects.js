// Object literal notation
let person = {
    name: 'John',
    age: 30,
    city: 'New York',
  }
  
  // Creating an object using the Object constructor
  let car = new Object();
  car.make = 'Toyota';
  car.model = 'Camry';
  car.year = 2022;

  
  console.log(person.name); // Outputs: 'John'
console.log(car['make']); // Outputs: 'Toyota'

person.age = 31;
car['model'] = 'Corolla';

person.job = 'Engineer'; // Adding a new property
delete car.year; // Deleting a property


// JSON manipulation functions (JSON.stringify() and JSON.parse()) are commonly used for sending and receiving data between a client and a server, as well as for storing data in a structured format. They facilitate the conversion between JavaScript objects and their JSON string representations.

// JSON.stringify() - Convert Object to JSON String:

let user = { name: 'Alice', age: 25, isAdmin: true };
let jsonString = JSON.stringify(user);

console.log(jsonString);
// Outputs: '{"name":"Alice","age":25,"isAdmin":true}'


// JSON.parse() - Convert JSON String to Object:
let jsonString2 = '{"name":"Bob","age":28,"isAdmin":false}';
let parsedObject = JSON.parse(jsonString2);

console.log(parsedObject.name); // Outputs: 'Bob'


let jsonArray = '[{"name":"Alice","age":25},{"name":"Bob","age":28}]';
let jsArray = JSON.parse(jsonArray);

console.log(jsArray[0].name); // Outputs: 'Alice'


let jsArray2 = [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 28 }];
let jsonArray2 = JSON.stringify(jsArray2);

console.log(jsonArray2);
// Outputs: '[{"name":"Alice","age":25},{"name":"Bob","age":28}]'


let nestedJson = '{"name":"John","address":{"city":"New York","zip":"10001"}}';
let parsedNestedObject = JSON.parse(nestedJson);

console.log(parsedNestedObject.address.city); // Outputs: 'New York'

