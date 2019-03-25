var a = 1;
let b = 2;

function myFunction() {
	var a = 3; //different variable
	let b = 4; //different variable
	if (true) {
		var a = 5; //overwritten
		let b = 6; //different variable
		console.log(a);
		console.log(b);
	}
	console.log(a);
	console.log(b);
}
myFunction();
console.log(a);
console.log(b);

//hoisting6.js
