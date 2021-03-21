import { Component, ComponentRef } from '@angular/core';

@Component({
    selector: 'app-zapatillas',
    templateUrl: 'zapatilla.component.html'
})

export class ZapatillasComponent{
    public titulo: string = 'Componente de zapatillas';
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

