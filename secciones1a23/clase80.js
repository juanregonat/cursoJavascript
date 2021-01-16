'use strict' 

//fetch hace peticiones ajax
//var usuarios = [];
var div_usuarios = document.querySelector("#usuarios");
var div_janet = document.querySelector("#janet");
var loading = document.querySelector(".loading");

getUsuarios()
    .then(data => data.json())//capturamos los datos que trae fetch
    .then(users => {
    //usuarios = users.data; //guardo los datos en usuarios. "Users" viene de la página    
        listadoUsuarios(users.data);    
        
        return getJanet(); //aca empieza una nueva promesa
    })
    .then(data=>data.json())
    .then(user=>{
        mostrarJanet(user.data);
    });


function getUsuarios(){
    return fetch("https://reqres.in/api/users");
}

function getJanet(){
    return fetch("https://reqres.in/api/users/2");
}

function listadoUsuarios(usuarios){    
    usuarios.map((user, i) => {
        let nombre = document.createElement("h2"); //creo el elemento h2 en el DOM
        nombre.innerHTML = i + " " + user.first_name + " " + user.last_name; //voy cargando los datos de "nombre"
    
        div_usuarios.appendChild(nombre); //en el div "usuarios" del DOM, le agrego la etiqueta hija nombre, que es un h2
        loading.style.display = "none"; //acá borro la palabra "cargando" cuando me llegan los datos del servidor
    
        })
}

function mostrarJanet(user){    
        let nombre = document.createElement("h4");
        let avatar = document.createElement("img");

        nombre.innerHTML = user.first_name + " " + user.last_name; 
        avatar.src = user.avatar;

        div_janet.appendChild(nombre); 
        div_janet.appendChild(avatar); 

        document.querySelector("#janet .loading").style.display = 'none';
}


