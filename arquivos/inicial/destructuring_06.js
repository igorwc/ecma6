// variáveis com nomes diferentes das propriedades
let object = {"name" : "John", "age" : 23};
let x, y;
({name: x, age: y} = object);
console.log('object');
console.log(object);
console.log(x);
console.log(y);

// Forma mais simples:
let {name: a, age: b} = {"name" : "John", "age" : 23};
console.log('Forma Simples');
console.log(a);
console.log(b);
// destructuring_06.js
