// donde está el componente que se va a mostrar
import { Component } from '@angular/core';
import { configuracion } from './models/configuracion';


// el decorador @Component indica que esto un componente
@Component({
  // selector: donde se va a mostrar
  selector: 'app-root',

  // cual es la vista de este controlador?
  templateUrl: './app.component.html',

  // estilos para este componente en particular:
  styleUrls: ['./app.component.css']
})

 // exportamos este componente para poder usarlo en otros lados y creamos sus propiedades ("title", en este caso)
export class AppComponent {
  public title = 'Master de JS y Angular';  
  public mostrarVideojuegos: boolean = true;
  public descripcion: string;
  public config;


  constructor(){
    this.title = configuracion.titulo;
    this.descripcion = configuracion.descripcion;
    this.config = configuracion;
  }

  ocultarVideojuegos(value:boolean){
    this.mostrarVideojuegos = value;
  }

}



// para que este componente funcione, existe un modulo que es app.module.ts
// para crear un nuevo componente, vamos a hacerlo dentro de una nueva carpeta dentro de la carpeta app
