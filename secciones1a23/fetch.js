'use strict' 

//fetch hace peticiones ajax
var usuarios = [];
var div_usuarios = document.querySelector("#usuarios");
var loading = document.querySelector(".loading");


fetch("https://reqres.in/api/users")
.then(data => data.json())//capturamos los datos que trae fetch
.then(users => {
    usuarios = users.data; //guardo los datos en usuarios. "Users" viene de la página
    console.log(usuarios);
/**
 * version clasica: 
 * fetch("https://reqres.in/api/users")
 * .then(function (data){
 *  return data.json()
 * })
 * .then(users => .....)
 */


    usuarios.map((user, i) => {
    let nombre = document.createElement("h2"); //creo el elemento h2 en el DOM
    nombre.innerHTML = i + " " + user.first_name + " " + user.last_name; //voy cargando los datos de "nombre"

    div_usuarios.appendChild(nombre); //en el div "usuarios" del DOM, le agrego la etiqueta hija nombre, que es un h2
    loading.style.display = "none"; //acá borro la palabra "cargando" cuando me llegan los datos del servidor

    })
    
})








