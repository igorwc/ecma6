// arrays aninhados
let [a, b, [c, d]] = [1, 2, [3, 4]];

// Como parâmetro de função
function myFunction([a, b, c = 3])
{
console.log(a, b, c); //Output "1 2 3"
}
myFunction([1, 2]);

function myFunction([a, b, c = 3] = [1, 2, 3])
{
console.log(a, b, c); //Output "1 2 3"
}
myFunction(undefined);

// destructuring_04.js
