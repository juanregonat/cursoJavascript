'use strict' 

var formulario= document.querySelector("#formpeliculas");
var formulario2= document.querySelector("#formpeliculas2");
var lista = document.querySelector("#lista");

//AGREGAR PELICULAS:
formulario.addEventListener('submit', function(){    
    var titulo = document.querySelector("#addpelicula").value;
    
    if(titulo.length >= 1){
    localStorage.setItem(titulo, titulo);
    }
});



for(var i in localStorage){
    if(typeof (localStorage[i]) == 'string'){
        var li = document.createElement("li");
        li.append(localStorage[i]);
        lista.append(li);
    }
}


//BORRAR PELICULAS:
formulario2.addEventListener('submit', function(){    
    var titulo = document.querySelector("#removepelicula").value;
    
    if(titulo.length >= 1){
    localStorage.removeItem(titulo);
    }
});



//COMPROBAR SI ESTA DISPONIBLE

// if(typeof(Storage) !== 'indefined'){
//     console.log("local storage disponible")
// } else {
//     console.log("local storage no disponible")
// }

// //guardar objetos 
// var usuario = {
//     nombre:"victor robles",
//     email: "victor@victor.com",
//     web: "victor.com"
// };

// //Guardar objeto en el LS: JSON.stringify
// //localStorage.setItem("usuario",usuario); -> no funciona
// localStorage.setItem("usuario",JSON.stringify(usuario));

 

// //Recuperar elemento
// document.querySelector("#prueba").innerHTML= localStorage.getItem("titulo");

// //Recuperar objeto: JSON.parse
// //localStorage.getItem("usuario");  -> no funciona, devuelve un string
// var userJS = JSON.parse(localStorage.getItem("usuario"));
// console.log(userJS);

// //ejemplo: del objeto de localStorage al DOM:
// //Recuperar elemento
// document.querySelector("#prueba").append(" -" + userJS.nombre);

// //Vaciar localstorage:
// localStorage.removeItem("usuario")
// //localStorage.clear(); //vacia todo