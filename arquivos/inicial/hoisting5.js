let a = 0;
let a = 1; //TypeError
function myFunction() {
	let b = 2;
	let b = 3; //TypeError
	if (true) {
		let c = 4;
		let c = 5; //TypeError
	}
}
myFunction();

// hoisting5.js
