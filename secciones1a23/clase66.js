'use strict'

var divrojos = document.getElementsByClassName("rojo");
var divamarillos = document.getElementsByClassName("amarillo");
//console.log(divrojos)


for(let div in divrojos){
    if (divrojos[div].className == "rojo" )
    divrojos[div].style.background = "red";
}


for (let div2 = 0; div2<divamarillos.length; div2++){
    divamarillos[div2].style.background = "blue";
}



//Query selector

var id = document.querySelector(".rojo")
id.style.background = "grey";

