import { Injectable } from "@angular/core";
//httpClient hace peticiones ajax
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
//importo el modelo
import { Project } from "../models/project";
//importo el archivo de conf global:
import { Global } from "./global";

@Injectable()
export class ProjectService{
    public url:string;
    constructor(private _http: HttpClient){
        this.url = Global.url;
    }

    testService(){
        return 'Probando el servicio Angular';
    }

}




