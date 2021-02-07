$(document).ready(function () {
    //alert("SDF");

    // //mover un elemento por la página: 
    // $('.elemento').draggable();

    // //cambiar de tamaño de un elemento: 
    // $('.elemento').resizable();

    // //elegir elementos de una lista y ordenarlos:
    // //$('.lista-seleccionable').selectable();
    // $('.lista-seleccionable').sortable({
    //     update: function (event,ui) {
    //         console.log("ha cambiado la lista");
    //     }
    // });

    // //drop:
    // $('#elemento-movido').draggable();
    // $('#area').droppable({
    //     drop: function(){
    //         console.log("has soltado algo");
    //         //console.log("has movido " + $(this).attr('id') );
    //     }
    // });


    //tootip:
    $(document).tooltip();

    //popup
    $("#lanzar-popup").click(function(){
        $("#popup").dialog();
    });

    //datepicker calendario:
    $("#calendario").datepicker();

    //tabs:
    $("#pestanas").tabs();
    

});