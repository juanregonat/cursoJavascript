
// Initialize the slider
$(document).ready(function(){
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


});
