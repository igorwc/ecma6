// valores default para variáveis
let [a, b, c = 3] = [1, 2];
console.log(c); //Output "3"

// usando operador rest (spread)
let [x, ...y] = [1, 2, 3, 4, 5, 6];
console.log(x);
console.log(Array.isArray(y));
console.log(y);

// valores também podem ser ignorados 
let [a1, , ,...b1] = [1, 2, 3, 4, 5, 6];
console.log(a1);
console.log(b1);
