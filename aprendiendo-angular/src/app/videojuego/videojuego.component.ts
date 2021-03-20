import { Component } from '@angular/core';

@Component({
    selector: 'app-videojuego',
    template: `
        <h2>Componente de Videojuegos</h2>
            <ul>
                <li> GTA </li>
                <li> Tekken</li>
                <li> GTA 2</li>
                <li> GTA 3</li>
            </ul>
    `
})

export class VideojuegoComponent {
    constructor(){
        console.log('se ha cargado el componente: videojuego.component.ts');
    }
}