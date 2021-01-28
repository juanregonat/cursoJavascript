$(document).ready(function(){
var caja = $("#caja");


//click y doble click:
caja.click(function() {
    $(this).css("background","blue")
            .css("color","white")
            .css("border","3px solid green");
});

caja.dblclick(function() {
    $(this).css("background","pink")
            .css("color","yellow");            
});


//focus y blur:
var nombre = $("#nombre");
var datos = $("#datos");

nombre.focus(function(){
    $(this).css("border","5px solid green");
});

nombre.blur(function(){
    $(this).css("border","5px solid #CCC");

    //selecciono el valor de lo que está seleccionado con $(this)
    //con ($this).val() y luego lo agrego con "text()"
    //finalmente cambio la propiedad del div a "show()"
    datos.text($(this).val()).show();

});


//mousedown y mouseup
datos.mousedown(function(){
    $(this).css("border-color","grey");
});

datos.mouseup(function(){
    $(this).css("border-color","black");
});

//mousemove
$(document).mousemove(function(){
    //console.log("en x: " + event.clientX);
    //console.log("en y: " + event.clientY);
    $('body').css("cursor","none"); //elimina el cursor
    $("#sigueme").css("left", event.clientX)
                 .css("top", event.clientY);
    
});




});
