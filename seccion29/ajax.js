$(document).ready(function(){

    

    //LOAD:

    //$("#datos").load("https://reqres.in");

 

///////////////////////////////////////////////

    //GET

    $.get("https://reqres.in/api/users", {page:2}, function(response){

        

    console.log("REsponse get: "+ response);

    

    //TODAS ESTAS VERSIONES FUNCIONAN: 

 

    // response.data.forEach((element, index) => {

    //     $("#datos").append("<p>" + 

    //     element.first_name + " " + 

    //     element.last_name + " " +

    //     "</p>")

    // });

 

        

    // response.data.forEach(function (element){

    //     $("#datos").append("<p>" + 

    //     element.first_name + " " + 

    //     element.last_name + " " +

    //     "</p>");

    // });

 

    

    response.data.forEach(element => {

        $("#datos").append("<p>" + element.first_name + " " + element.last_name + "</p>")

        });

 

    });

 

    ///////////////////////////////////////////////    

    //POST:

    // var usuario={

    //     "name":"juan regonat",

    //     "web": "www.juan.com"

    // };

 

    // $.post("https://reqres.in/api/users", usuario, function(response){

    //     console.log(response);

    // });

 

$("#formulario").submit(function(e){
    e.preventDefault(); //evita que nos envie a otra página

    var usuario={
        name:$('input[name="name"]').val(),
        web:$('input[name="web"]').val()
    };
        
    // $.post($(this).attr("action"), usuario, function(response){
    //     console.log(response);
    // }).done(function () {   //cuando se añade el usuario, con "done" se agrega un callback con un msg
    //     alert("usuario añadido exitosamente");
    // });


    //$.ajax es el método mas cómodo. Se le pasan atributos por JSON:
    $.ajax({ 
        type:'POST',
        //dataType:'json',
        //contentType:'application/json',
        url: $(this).attr("action"),
        data: usuario,
        beforeSend: function () {
            console.log("Enviando usuario");
        },
        success: function (response) {
            console.log(response);
        },
        error: function () {
            console.log("error");
        },
        timeout: 2000
    });

    return false; //evita que nos envie a otra página


})


});