var a = 12; //accessible globally
function myFunction() {
	console.log(a);
	var b = 13; //accessible throughout function
	if (true) {
		var c = 14; //accessible throughout function
		console.log(b);
	}
	console.log(c);
}
myFunction();
