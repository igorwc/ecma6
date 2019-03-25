let a = 12; //accessible globally
function myFunction() {
	console.log(a);
	let b = 13; //accessible throughout function
	if (true) {
		let c = 14; //accessible throughout the "if" statement
		console.log(b);
	}
	console.log(c);
}
myFunction();
//hoisting4.js
