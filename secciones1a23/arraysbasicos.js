'use strict'

var nombres = ["victor", "robles", "profesor", 53];

//console.log(nombres);

//console.log(nombres[1]);

//console.log(nombres.length);

/*var elemento = parseInt(prompt("que elemento quieres?",0));

if(elemento>=nombres.length){
    alert("el numero debe ser menor a: " + nombres.length )
}
else {
    alert(nombres[elemento]);
}
*/

document.write("<h1>Lenguajes programacion 2020:</h1>")
document.write("<p>Recorrida con for:</p>")
for (let index = 0; index < nombres.length; index++) {
   document.write("<li>" + nombres[index]+ "</li>");
}

document.write("<p>Recorrida con forEach:</p>");
nombres.forEach((elemento, index, miarray)=>{
    document.write("<li>" +(index + 1) + " - " + elemento + "</li>");
}); //miarray tiene el array "nombres" completo
