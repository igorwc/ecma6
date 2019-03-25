//Antes do ES6
var myArray = [1, 2, 3];
var a = myArray[0];
var b = myArray[1];
var c = myArray[2];
console.log('Antes do ES6');
console.log(a);
console.log(b);
console.log(c);
// Depois do ES6
let myArray1 = [1, 2, 3];
let a1, b1, c1;
[a1, b1, c1] = myArray1; //array destructuring assignment syntax
console.log('Depois do ES6');
console.log(a1);
console.log(b1);
console.log(c1);

//Alternativa mais simples:
let [a2, b2, c2] = [1, 2, 3];
console.log('Depois do ES6');
console.log(a2);
console.log(b2);
console.log(c2);

//destructuring_01.js
