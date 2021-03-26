import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';


@Component({
    selector: 'app-videojuego',
    templateUrl: './videojuego.component.html'
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {
    public titulo: string;
    public listado: string;

    constructor(){
        this.titulo = 'Componente de videojuegos';
        this.listado = 'Listado de los juegos más populares';


        console.log('se ha cargado el componente: videojuego.component.ts');
    }

    ngOnInit(){
        console.log('se ha cargado el componente onint');
    }

    ngDoCheck(){
        console.log('DoCheck ejecutado');
    }

    cambiarTitulo(){
        this.titulo ='Nuevo titulo';
    }

    ngOnDestroy(){
        console.log('OnDestroy ejecutado');
    }

}
