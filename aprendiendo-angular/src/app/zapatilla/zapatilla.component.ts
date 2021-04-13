import { Component, OnInit } from '@angular/core';
import {Zapatilla} from '../models/zapatilla';
import {ZapatillaService} from '../servicios/zapatilla.service';

@Component({
    selector: 'app-zapatillas',
    templateUrl: 'zapatilla.component.html',
    providers: ['ZapatillaService'] 
})

export class ZapatillasComponent implements OnInit{
    public titulo: string = 'Componente de zapatillas';
    public zapatillas:Array<Zapatilla>;
    public marcas: String[] = [];
    public color: string ="";
    public mi_marca: string = "";


    constructor(
        private _zapatillaService : ZapatillaService
    ){
        this.marcas = new Array();
        this.color = 'yellow';

    }

    ngOnInit(){
        //console.log(this.zapatillas);
        this.zapatillas =  this._zapatillaService.getZapatillas();
        this.getMarcas();
    }

    getMarcas(){
        this.zapatillas.forEach((zapatilla, index)=>{
            //busca con indexOf, sino lo encuentra lo agrega
            if(this.marcas.indexOf(zapatilla.marca) <0 ){
                this.marcas.push(zapatilla.marca);
                console.log(index);
            }
        });
        console.log(this.marcas);    
    };

    getMarca(){
        console.log(this.mi_marca);
        alert(this.mi_marca);
    }

    addMarca(){
        this.marcas.push(this.mi_marca);        
    }

    borrarMarca(index){
        //delete this.marcas[index];

        //que indice quiero borrar? cuantos elmentos?
        this.marcas.splice(index, 1);
    }


    onBlur(){
        console.log("ha salido del input");
    }

    mostrarPalabra(){
        console.log("presionado enter");
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

