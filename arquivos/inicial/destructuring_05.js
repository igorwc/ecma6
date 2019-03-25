// antes do ES6
var object1 = {"name1" : "John", "age1" : 23};
var name1 = object1.name1;
var age1 = object1.age1;
console.log('object1');
console.log(object1);
console.log(name1);
console.log(age1);

//Depois do ES6
let object = {"name" : "John", "age" : 23};
let name, age;
({name, age} = object); //object destructuring assignment syntax

console.log('object');
console.log(object);
console.log(name);
console.log(age);

// destructuring_05.js
