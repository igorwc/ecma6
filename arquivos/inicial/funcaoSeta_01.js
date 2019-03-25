// normal
var circleArea = function(pi, r) {
	var area = pi * r * r;
	return area;
}
var result = circleArea(3.14, 3);
console.log(result); //Output "28.26"

//arrow function
let circleAreaSeta = (pi, r) => pi * r * r;
let resultSeta = circleAreaSeta(3.14, 3);
console.log(resultSeta); //Output "28.26"

//funcaoSeta_01.js