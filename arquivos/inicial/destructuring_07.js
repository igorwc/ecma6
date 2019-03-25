// valores default para variáveis

let {a, b, c = 3} = {a: "1", b: "2"};
console.log(c); //Output "3"

// nomes de variavéis calculados:
let {["first"+"Name"]: x} = { firstName: "Eden" };
console.log(x); //Output "Eden"

//objetos aninhados
var {name, otherInfo: {age}} = {name: "Eden", otherInfo: {age:
23}};
console.log(name, age); //Eden 23

// destructuring_07.js
