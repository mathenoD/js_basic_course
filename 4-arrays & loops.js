// Array of numbers
let numbers = [1, 2, 3, 4, 5];

// Array of strings
let fruits = ['apple', 'banana', 'orange'];

// Mixed-type array
let mixedArray = [1, 'two', true, { key: 'value' }];


let colors = ['red', 'green', 'blue'];

console.log(colors[0]); // Outputs: 'red'
console.log(colors[1]); // Outputs: 'green'
console.log(colors[2]); // Outputs: 'blue'


let sports = ['football', 'basketball', 'tennis'];

// Adding elements at the end
sports.push('soccer');

// Removing elements from the end
let lastSport = sports.pop();

// Adding elements at the beginning
sports.unshift('volleyball');

// Removing elements from the beginning
let firstSport = sports.shift();


// Using for loop
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Using forEach
numbers.forEach(function(number) {
  console.log(number);
});

// Using for...of loop
for (let number of numbers) {
  console.log(number);
}


// Printing numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
  }

  // Printing numbers from 1 to 5 using while loop
let count = 1;
while (count <= 5) {
  console.log(count);
  count++;
}

// Printing numbers from 1 to 5 using do...while loop
let index = 1;
do {
  console.log(index);
  index++;
} while (index <= 5);



let person = { name: 'John', age: 30, city: 'New York' };

for (let key in person) {
  console.log(key + ': ' + person[key]);
}


for (let fruit of fruits) {
  console.log(fruit);
}
