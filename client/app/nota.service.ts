import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http'
import { Nota } from './shared/models/nota.model';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
 
@Injectable()
export class NotaService {
 
private url = "http://localhost:3000/api/notas";
private headers: Headers = new Headers({ 'Content-Type': 'application/json' });
constructor(private http: Http) { }
 
envia_nota(nota: Nota): Promise<Nota> {
return this.http.post(this.url, JSON.stringify(nota))
.toPromise()
.then(response => response.json().data as Nota)
.catch(this.handleError);
}
 
// return this.http.get(
// 'http://localhost:3000/edata',{
// headers: {'Content-Type', undefined} /** Use Content-type as your requirement undifined OR application/json**/
// }).map(res => res.json())
 
private handleError(err: any): Promise<any> {
return Promise.reject(err.message || err);
}
}
