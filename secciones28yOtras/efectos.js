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

$("#animame").click(function(){
    //se arma un json con animaciones:
    caja.animate({ 
        marginLeft:'300px',
        fontSize:'50px',
        height: '100px'
    }, 'slow')
    //fin de la primera animacion
    
    //segunda animacion:
    .animate({
        borderRadius: '900px',
        marginTop:'100px'
    }, 'slow')

    //tercera animacion:
    .animate({
        borderRadius: '0px',
        marginLeft:'0px'
    }, 'slow')

    //cuarta animacion:
    .animate({
        borderRadius: '0px',
        margin:'15px',
        fontSize:'19px',
        height:'60px',
        width: '310px'
    }, 'slow'), function(){
        console.log("termine");
    }

    ;
});




});