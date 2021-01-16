'use strict'

var nombres = ["victor", "robles", "profesor", 53];

/*var elemento = parseInt(prompt("que elemento quieres?",0));
if(elemento>=nombres.length){
    alert("el numero debe ser menor a: " + nombres.length )
}
else {
    alert(nombres[elemento]);
}


document.write("<h1>Lenguajes programacion 2020:</h1>")
document.write("<p>Recorrida con for:</p>")
for (let index = 0; index < nombres.length; index++) {
   document.write("<li>" + nombres[index]+ "</li>");
}

document.write("<p>Recorrida con forEach:</p>");
nombres.forEach((elemento, index, miarray)=>{
    document.write("<li>" +(index + 1) + " - " + elemento + "</li>");
}); //miarray tiene el array "nombres" completo
*/
var categorias = ["accion", "terror", "comedia"];
var peliculas = ["la vida es bella", "la verdad duele", "gran torino"];


var cine = [categorias, peliculas];
//console.log(cine);
//console.log(cine[0][1]); //terror
//console.log(cine[1][1]); //la verdad duele

//agregar elemento: 
peliculas.push("batman");
//console.log(peliculas); 

var agregarPelicula = prompt("agrega un pelicula!");
while (agregarPelicula != "fin"){    
    peliculas.push(agregarPelicula);
    agregarPelicula = prompt("agrega un pelicula!");
}
console.log(peliculas);

//convertir un array en un texto "join"
var todoJunto = peliculas.join();
console.log(todoJunto);

//separar en arrays: 
var separado = todoJunto.split(",");
console.log(separado);
