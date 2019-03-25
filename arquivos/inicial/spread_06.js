var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };

var clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

console.log(clonedObj);

var mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }
console.log(mergedObj);

// Para rodar esse script, é necessário: node --harmony spread_06.js

// spread_06.js
