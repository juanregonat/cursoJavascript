$(document).ready(function(){
//contar elementos, en este caso, enlaces a
    console.log($('a').length);

    reloadLinks();

    $("#add_button").click(function(){
        //console.log($("#add_link").val());
        var link = $("#add_link").val();
        
        //sobre escribe
        //$('#menu').html('<li><a href="'+ link +'"></a></li>');

        //agrega al final
        $('#menu').append('<li><a href="'+ link +'"></a></li>');
        
        //agrega al principio
        //$('#menu').prepend('<li><a href="'+ link +'"></a></li>');
        
        //agrega antes del elemento (en otra lista, en este caso)
        //$('#menu').before('<li><a href="'+ link +'"></a></li>');
        
        //agrega luego del elemento
        //$('#menu').after('<li><a href="'+ link +'"></a></li>');

        $("#add_link").val('');

        reloadLinks();
    });


    function reloadLinks(){
    $('a').each(function(index){
        //capturar los valores href.
        var that = $(this);

        //agregar atributos al enlace
        that.attr('target','_blank');

        //quitar atributos al enlace
        //that.removeAttr('target');

        var enlaces = that.attr('href');
        that.text(enlaces);
    });
}

});