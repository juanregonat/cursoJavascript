
// Initialize the slider
$(document).ready(function(){

    if(window.location.href.indexOf('index') > -1){ //solo carga en la index.html
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth:1200
    
    });
    
    
    //ARRAY DE JSON DE POST
    var posts = [
        {
            title: 'Prueba de titulo 1',
            date: 'Publicado el día ' + moment().format("D") + ' de ' + moment().format('MMMM') + ' de ' + moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt auctor nisi ac viverra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras eget tincidunt sem. Pellentesque pellentesque pretium dui. Ut et elementum libero. Etiam egestas imperdiet nibh at convallis. Pellentesque et luctus neque. Sed commodo vitae felis hendrerit luctus. Phasellus quis dui consectetur, porttitor felis mollis, luctus ante.'
        },
        {
            title: 'Prueba de titulo 2',
            date: 'Publicado el día ' + moment().format("D") + ' de ' + moment().format('MMMM') + ' de ' + moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt auctor nisi ac viverra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras eget tincidunt sem. Pellentesque pellentesque pretium dui. Ut et elementum libero. Etiam egestas imperdiet nibh at convallis. Pellentesque et luctus neque. Sed commodo vitae felis hendrerit luctus. Phasellus quis dui consectetur, porttitor felis mollis, luctus ante.'},
        {
            title: 'Prueba de titulo 3',
            date: 'Publicado el día ' + moment().format("D") + ' de ' + moment().format('MMMM') + ' de ' + moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt auctor nisi ac viverra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras eget tincidunt sem. Pellentesque pellentesque pretium dui. Ut et elementum libero. Etiam egestas imperdiet nibh at convallis. Pellentesque et luctus neque. Sed commodo vitae felis hendrerit luctus. Phasellus quis dui consectetur, porttitor felis mollis, luctus ante.'
        },
        {
            title: 'Prueba de titulo 4',
            date: 'Publicado el día ' + moment().format("D") + ' de ' + moment().format('MMMM') + ' de ' + moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt auctor nisi ac viverra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras eget tincidunt sem. Pellentesque pellentesque pretium dui. Ut et elementum libero. Etiam egestas imperdiet nibh at convallis. Pellentesque et luctus neque. Sed commodo vitae felis hendrerit luctus. Phasellus quis dui consectetur, porttitor felis mollis, luctus ante.'
        },
        {
            title: 'Prueba de titulo 5',
            date: 'Publicado el día ' + moment().format("D") + ' de ' + moment().format('MMMM') + ' de ' + moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt auctor nisi ac viverra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras eget tincidunt sem. Pellentesque pellentesque pretium dui. Ut et elementum libero. Etiam egestas imperdiet nibh at convallis. Pellentesque et luctus neque. Sed commodo vitae felis hendrerit luctus. Phasellus quis dui consectetur, porttitor felis mollis, luctus ante.'
        }

    ]


    
    // CARGA DINÁMICA DE POSTS: se arma una plantilla, y se configura con 
    // comillas invertidas `` y  ${item.propiedad Json}

    posts.forEach((item, index) => {
        var post = `
        <article class = "post">
        <h2>${item.title}</h2>
        <span class="date">${item.date}</span>
        <p>${item.content}</p>
        
        <a href="#" class="button-more">Leer más</a>
        </article>
        `;
        console.log(posts)
        $("#posts").append(post);
    });

    }

    //Selector de tema: tomo el obj con id theme, que era la etiqueta de link css
    //y le cambio el atributo href
        var theme = $("#theme");

        $("#to-green").click(function(){
            theme.attr("href","css/green.css");
            console.log("to green");
        });
        $("#to-red").click(function(){
            theme.attr("href","css/red.css");
            console.log("to red");
        });
        $("#to-blue").click(function(){
            theme.attr("href","css/blue.css");
        });

        
    //Scroll arriba web:       
        $('.subir').click(function (e) {
            e.preventDefault();

        $('html, body').animate({
            scrollTop:0
        }, 500);
    });


    //login falso:
    $('#login form').submit(function () {
        var form_name = $("#form_name").val();
        console.log(form_name);        
        localStorage.setItem("form_name",form_name);
    });

    var form_name = localStorage.getItem("form_name");

    if(form_name != null && form_name != 'undefined'){
        var about_parrafo = $('#about p');

        about_parrafo.html("<strong>Bienvenido, " + form_name  + "</strong>");
        about_parrafo.append(" <a href='#' id='logout'>Cerrar sesión</a> ");

        $('#login').hide();
    }

    $('#logout').click(function(){
        localStorage.clear(); //vacia el localstorage
        location.reload(); //recarga la página
    });



    // ACORDEON DE about_parrafo.HTML
    if(window.location.href.indexOf('about') > -1){ //solo carga en la about.html
        $('#acordeon').accordion();
    }


    // RELOJ
    if(window.location.href.indexOf('reloj') > -1){ //solo carga en la about.html
        setInterval(function(){
            var reloj = moment().format("hh:mm:ss");
            $('#reloj').html(reloj);
        }, 1000);
        
    }
    

    //VALIDACION DEL FORMULARIO DE CONTACTO:
    if(window.location.href.indexOf('contacts') > -1){ 
    //todos los campos que sean tipo "date", ponerle un datepicker
        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });
        
        // //llamo al validador de formularios:
        $.validate({
            lang:'es',
            errorMessagePosition:'top',
            scrollToTopOnError:false
        });
        
    }





});
