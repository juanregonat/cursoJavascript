import { Component, OnInit } from '@angular/core';
import {Zapatilla} from '../models/zapatilla'


@Component({
    selector: 'app-zapatillas',
    templateUrl: 'zapatilla.component.html'
})

export class ZapatillasComponent implements OnInit{
    public titulo: string = 'Componente de zapatillas';
    public zapatillas:Array<Zapatilla>;

    constructor(){
        this.zapatillas = [
            new Zapatilla('Reebook Classic', 'Reebook', 'Blanca', 80, true),
            new Zapatilla('Reebook Classic', 'Reebook', 'Azul', 80, true),
            new Zapatilla('Reebook Classic', 'Reebook', 'Rojo', 80, true),
            new Zapatilla('Reebook Classic', 'Reebook', 'Verde', 80, false)
        ];
    }

    ngOnInit(){
        console.log(this.zapatillas);
    }



}

// Para crear un cmponente:
// new folder -> Componente
// new file-> Component.html y Component.ts
// component.ts: hacer el import { Component } from '@angular/core'
    // hacer el @Component con su selector y su template
    // despues hacer la exportacion de la clase export class ZapatillaComponent y sus propiedades
// component.html: va el contenido html :<h1>, <p>, etc

// despues agregar el componente al módulo:
// app.module.ts: import { ZapatillaComponent} from './zapatilla/zapatillas.component'
// agregarlo al listado @NgModule

// PARA COMENZAR NG SERVE

// PARA AGREGAR NUEVOS COMPONENTES DESDE LA CONSOLA: ng generate component cursos

