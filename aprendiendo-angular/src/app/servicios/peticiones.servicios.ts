import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class PeticionesService{
    public url: string;

    constructor(public _http: HttpClient){
        this.url = "https://reqres.in/";
    }

    getUser(userID):Observable<any>{
        return this._http.get(this.url + 'api/users/'+userID);
    }


    addUser(user): Observable<any>{
        //a este servicio hay que enviarle un json-string, para eso usamos el metodo stringify
        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type','application/json');

                                //URL       +        BODY   +  HEADERS
        return this._http.post(this.url+'api/users/', params, {headers: headers});
    }


}
