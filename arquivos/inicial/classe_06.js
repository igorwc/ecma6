// Definição de Métodos, método antigo
function Person(name, age){
	this.name = name;
	this.age = age;
}
Person.prototype.printProfile = function(){
	console.log("Name is: " + this.name + " and Age is: " +this.age);
}
var p = new Person("Eden", 12)
p.printProfile();
console.log("printProfile" in p.__proto__);
console.log("printProfile" in Person.prototype);

//classe_06.js