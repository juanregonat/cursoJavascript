'use strict' 

//COMPROBAR SI ESTA DISPONIBLE

if(typeof(Storage) !== 'indefined'){
    console.log("local storage disponible")
} else {
    console.log("local storage no disponible")
}

//guardar objetos 
var usuario = {
    nombre:"victor robles",
    email: "victor@victor.com",
    web: "victor.com"
};

//Guardar objeto en el LS: JSON.stringify
//localStorage.setItem("usuario",usuario); -> no funciona
localStorage.setItem("usuario",JSON.stringify(usuario));

 

//Recuperar elemento
document.querySelector("#prueba").innerHTML= localStorage.getItem("titulo");

//Recuperar objeto: JSON.parse
//localStorage.getItem("usuario");  -> no funciona, devuelve un string
var userJS = JSON.parse(localStorage.getItem("usuario"));
console.log(userJS);

//ejemplo: del objeto de localStorage al DOM:
//Recuperar elemento
document.querySelector("#prueba").append(" -" + userJS.nombre);

//Vaciar localstorage:
localStorage.removeItem("usuario")
//localStorage.clear(); //vacia todo