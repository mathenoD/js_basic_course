// let jsonArray = '[{"name":"Alice","age":25},{"name":"Bob","age":28}]';
// console.log(jsonArray); // Outputs: 'Alice'
// let jsArray = JSON.parse(jsonArray);

// console.log(jsonArray[0].name); // Outputs: 'Alice'


let jsArray2 = [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 28 }];
let jsonArray2 = JSON.stringify(jsArray2);

console.log(jsonArray2);