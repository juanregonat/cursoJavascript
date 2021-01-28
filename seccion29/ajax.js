$(document).ready(function(){
    
    //LOAD:
    //$("#datos").load("https://reqres.in");


///////////////////////////////////////////////
    //GET
    $.get("https://reqres.in/api/users", {page:2}, function(response){
        
    console.log(response);
    
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
    var usuario={
        "name":"juan regonat",
        "web": "www.juan.com"
    };

    $.post("https://reqres.in/api/users", usuario, function(response){
        console.log(response);
    });



});