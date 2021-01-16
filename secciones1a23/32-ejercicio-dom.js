'use strict'

window.addEventListener('load', function(){
    console.log("dom cargado");
    
    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none";

    formulario.addEventListener('submit', function(){
        console.log("formulario capturado")
        var nombre = document.querySelector("#nombre").value;
        var apellido = document.querySelector("#apellido").value;
        var edad = parseInt(document.querySelector("#edad").value);
        //document.write(nombre.innerHTML + " " + apellido.innerHTML + " " + edad.innerHTML)
        console.log (nombre, apellido, edad);
        
        

        if ((nombre.trim()).length == 0 || nombre.trim() == null)
        {
            //alert("nombre en blanco");
            document.querySelector("#nombre").style.background = "red";
            document.querySelector("#error_nombre").innerHTML = "El nombre no es válido";
            return false;
        } else{
            document.querySelector("#error_nombre").style.display = "none";
        }

        if ((apellido.trim()).length == 0 || apellido == null)
        {
            alert("apellido en blanco");
            document.querySelector("#error_apellido").innerHTML = "El apellido no es válido";
            return false;
        } else{
            document.querySelector("#error_apellido").style.display = "none";
        }

        if (edad <= 0 || isNaN(edad))
        {
            console.log("edad:" + edad)            
            alert("edad en blanco");
            document.querySelector("#error_edad").innerHTML = "La edad no es válida";
            return false;
        }else{
            document.querySelector("#error_edad").style.display = "none";
        }

        box_dashed.style.display = "block";

        var p_nombre = document.querySelector("#p_nombre span");
        var p_apellido = document.querySelector("#p_apellido span");
        var p_edad = document.querySelector("#p_edad span");

        p_nombre.innerHTML = nombre;
        p_apellido.innerHTML = apellido;
        p_edad.innerHTML = edad;

        
    });




});
