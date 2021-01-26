$(document).ready(function(){
    //alert("adsd");

var mostrar = $("#mostrar");
var ocultar = $("#ocultar");
var caja =$("#caja");
var todoenuno = $("#todoenuno");

//mostrar.hide();
mostrar.fadeOut("slow");

mostrar.click(function(){
    $(this).hide();
    //ocultar.show();
    ocultar.fadeIn();

    //caja.show("fast");
    caja.fadeTo("slow",1);
});

ocultar.click(function(){
    $(this).hide();
    mostrar.show("slow");

    caja.css("display","none");
});



todoenuno.text("Presioname");

todoenuno.click(function(){
    //caja.toggle();
    //ademas estan el fadeToggle, slideToggle, etc
    caja.toggle("slow", function(){
        caja.text("abierto");
    });



});



});