'use strict'

var boton = document.querySelector("#boton");


boton.addEventListener('click', cambiarColor);

boton.addEventListener('mouseover', function(){
    boton.style.background = "#dda";
})
boton.addEventListener('mouseout', function(){
    boton.style.background = "#ff5";
    boton.style.color = "#000";
})



function cambiarColor(){
    console.log("me has dado click");
    var bg = boton.style.background;

    if (bg == "green"){
        boton.style.background = "red";
    } else {
        boton.style.background = "green";
    }

    boton.style.color = "white";
    boton.style.border = "1 px solid #ccc";
    return true;
    
}






