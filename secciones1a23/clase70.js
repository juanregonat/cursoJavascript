'use strict'

window.addEventListener('load', function(){

    var input = document.querySelector("#campo_nombre");
    //console.log(input);
    
    //focus
    input.addEventListener('focus', function(){
        console.log("Estas dentro del input!");
    })
    
    //blur
    input.addEventListener('blur', function(){
        console.log("Estas fuera del input!");
    })
    
    
    //keydown
    input.addEventListener('keydown', function(){
        console.log("Estas pulsando una tecla! ", String.fromCharCode(event.keyCode));
    })
    
    
    
    //keypress
    input.addEventListener('keypress', function(){
        console.log("Tecla presionada! ", String.fromCharCode(event.keyCode));
    })
    
    
    
    //keyup
    input.addEventListener('keyup', function(){
        console.log("Tecla soltada!", String.fromCharCode(event.keyCode));
    })

})

