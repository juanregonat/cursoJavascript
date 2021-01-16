'use strict' 

//fetch hace peticiones ajax
//var usuarios = [];
var div_usuarios = document.querySelector("#usuarios");
var div_janet = document.querySelector("#janet");
var div_profesor = document.querySelector("#profesor");

getUsuarios()
    .then(data => data.json())//capturamos los datos que trae fetch
    .then(users => {
            listadoUsuarios(users.data);
            return getInfo();
    })
    .then(data => {
        console.log(data);
        div_profesor.innerHTML = data;
        return getJanet();
    })
    .then(data => data.json())
    .then(user => {
        mostrarJanet(user.data);
    })
    .catch(error => {
        alert('Error en las peticiones');h
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
        //document.querySelector("#usuarios .loading").style.display = 'none';
        document.querySelector("#usuarios .loading").style.display = 'none';
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

function getInfo(){
    var profesor = {
        nombre: "victor",
        apellido:"robles",
        url:"www.victorrobles.es"
    };

    return new Promise((resolve, reject)=>{
        var profesor_string = "";

        setTimeout(function(){
            profesor_string = JSON.stringify(profesor);
            if(typeof profesor_string != 'string' || profesor_string =="") return reject('error')            
            return resolve (profesor_string);
        }, 3000);


    });    
}
