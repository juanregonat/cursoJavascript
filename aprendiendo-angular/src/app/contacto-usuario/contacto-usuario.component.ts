import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from '../models/contacto.usuario';


@Component({
  selector: 'app-contacto-usuario',
  templateUrl: './contacto-usuario.component.html',
  styleUrls: ['./contacto-usuario.component.css']
})
export class ContactoUsuarioComponent implements OnInit {
  public usuario : ContactoUsuario;

  constructor() { 
    this.usuario = new ContactoUsuario('','','','');
  }

  ngOnInit(): void {
  }

  onSubmit(form){
    //console.log("Evento submit lanzado");
    console.log(this.usuario);
    form.reset();

  }

}
