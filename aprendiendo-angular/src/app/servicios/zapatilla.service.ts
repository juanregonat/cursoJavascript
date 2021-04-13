import { Injectable } from '@angular/core'
import { Zapatilla } from '../models/zapatilla';


@Injectable()
export class ZapatillaService {
    public zapatillas: Array<Zapatilla>;


    constructor(){
        this.zapatillas = [
            new Zapatilla('Reebook Classic', 'Reebook', 'Blanca', 100, true),
            new Zapatilla('Reebook Botitas', 'Reebook Luxury', 'Azul', 120, true),
            new Zapatilla('Reebook Dama', 'Reebook', 'Rojo', 80, true),
            new Zapatilla('Reebook Girl', 'Reebook', 'Verde', 70, false)
        ];


    }

    getZapatillas():Array<Zapatilla>{
        return this.zapatillas;
    }

    getTexto(){
        return 'Hola mundo desde un servicio';
    }

}



