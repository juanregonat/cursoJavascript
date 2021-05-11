import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../servicios/peticiones.servicios';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {
  public user: any;
  public userID: any;
  public fecha: any;

  public new_user: any;
  public usuario_guardado;

  constructor(
    private _peticionesService: PeticionesService
    ) {
        this.userID = 1;
        this.new_user = {
          "name": "",
          "job":""
        };
     }

  ngOnInit() {
   this.cargaUsuario();
   this.fecha = new Date();
  }

  cargaUsuario(){
    this._peticionesService.getUser(this.userID).subscribe(
      result =>{
        this.user = result.data;
      },
      error=>{
        console.log(<any>error);
      }
    );
  }


  onSubmit(form){
    this._peticionesService.addUser(this.new_user).subscribe(
      response =>{
        this.usuario_guardado = response;
        console.log(response);
        form.reset();
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
