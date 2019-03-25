 
var fahrenheit = [ 0, 32, 45, 50, 75, 80, 99, 120 ];
let celcius = [];
for(let i = 0; i< fahrenheit.length;i++){
    celcius.push(Math.round( ( fahrenheit - 32 ) * 5 / 9 ));
}

console.log(celcius);
