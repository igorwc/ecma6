const a = 12; //accessible globally
function myFunction(){
	console.log(a);
	const b = 13; //accessible throughout function
	if(true){
		const c = 14; //accessible throughout the "if" statement
		console.log(b);
	}
	console.log(c);
	}
myFunction();
//hoisting8.js
