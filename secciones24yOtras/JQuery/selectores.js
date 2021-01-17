$(document).ready(function() {

    //SELECTORES POR ID:
    var rojo = $("#rojo");
    rojo.css("background","red")
    .css("margin-left","25px")
    .css("margin-bottom","0px")
    .css("margin-top","0px")
    .css("padding","20px")
    .css("width","400px");
    
    var amarillo = $("#amarillo");
    amarillo.css("background","yellow")
    .css("margin-left","25px")
    .css("margin-bottom","0px")
    .css("margin-top","0px")
    .css ("padding","20px")
    .css("width","300px");
    
    var verde = $("#verde");
    verde.css("background","green")
    .css("margin-left","25px")
    .css("margin-bottom","0px")
    .css("margin-top","0px")
    .css("padding","20px")
    .css("width","200px");
    
    var rojo2 = $("#rojo2");
    rojo2.css("background","red")
    .css("margin-left","25px")
    .css("margin-bottom","0px")
    .css("margin-top","0px")
    .css("padding","20px")
    .css("width","100px");
        


    //SELECTORES POR CLASE:
    $(".sin_borde").click(function(){
        console.log("ok");
        $(this).addClass("zebra");
    });



    //SELECTORES POR ETIQUETA:
    var parrafos= $('p').css("cursor","pointer");

    parrafos.click(function(){
        var that = $(this);
        if(!that.hasClass('grande')){
            that.addClass('grande');
    } else {
        that.removeClass('grande');
    }
});

    //SELECTORES POR ATRIBUTOS:
    $("[title = 'google']").css("background","red");
    $("[title = 'fb']").css("background","orange");



    //OTROS SELECTORES:
    $('p, a').addClass('margen_sup'); //SELECTOR DE VARIOS ELEMENTOS
    
    var busqueda = $('#caja').find('.resaltado');   //SELECTOR CON METODO FIND
    console.log(busqueda);

    var busquedaParent = $('#caja .resaltado').eq(0).
    parent().parent().parent().parent().find('[title="Google"]');   //SELECTOR CON METODO PARENT
    console.log(busquedaParent);

});

