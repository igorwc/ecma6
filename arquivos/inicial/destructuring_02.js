// ignorando valores
let [a, , b] = [1, 2, 3];
console.log(a);
console.log(b);

// usando operador rest (spread)
let [c, ...d] = [1, 2, 3, 4, 5, 6];
console.log(c);
console.log(Array.isArray(d));
console.log(d);

// valores também podem ser ignorados 
let [e, , ,...f] = [1, 2, 3, 4, 5, 6];
console.log(e);
console.log(f);

//destructuring_02.js
