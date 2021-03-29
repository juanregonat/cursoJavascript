import { Component, OnInit } from '@angular/core';
import {Zapatilla} from '../models/zapatilla'


@Component({
    selector: 'app-zapatillas',
    templateUrl: 'zapatilla.component.html'
})

export class ZapatillasComponent implements OnInit{
    public titulo: string = 'Componente de zapatillas';
    public zapatillas:Array<Zapatilla>;
    public marcas: String[] = [];

    constructor(){
        this.marcas = new Array();        
        this.zapatillas = [
            new Zapatilla('Reebook Classic', 'Reebook', 'Blanca', 100, true),
            new Zapatilla('Reebook Botitas', 'Reebook Luxury', 'Azul', 120, true),
            new Zapatilla('Reebook Dama', 'Reebook', 'Rojo', 80, true),
            new Zapatilla('Reebook Girl', 'Reebook', 'Verde', 70, false)
        ];
    }

    ngOnInit(){
        console.log(this.zapatillas);
        this.getMarcas();
    }

    getMarcas(){
        this.zapatillas.forEach((zapatilla, index)=>{
            //busca con indexOf, sino lo encuentra lo agrega
            if(this.marcas.indexOf(zapatilla.marca) <0 ){
                this.marcas.push(zapatilla.marca);
                // console.log(index);
            }
        });
        console.log(this.marcas);    
    };
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

