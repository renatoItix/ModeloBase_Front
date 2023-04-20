import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ClienteModel } from '../models/cliente.model';

@Injectable({
    providedIn: 'root'
})
export class ClienteService {
   
    constructor(
        private http: HttpClient
    ) { }

    getListaClientes(): Observable<any> {
        return this.http.get("http://localhost:3000/clientes");
    }

    getById(id: any): Observable<any> {
        const _url = `${"http://localhost:3000/clientes"}/${id}`;
        return this.http.get(_url);
    }

    postCliente(cliente: ClienteModel): Observable<any> {
        return this.http.post("http://localhost:3000/clientes", cliente);
    }
   
    putCliente(id: any, cliente: ClienteModel): Observable<any> {
        return this.http.put("http://localhost:3000/clientes/".concat(id), cliente);
    }

    deleteClientes(id: any) {
        return this.http.delete<any>("http://localhost:3000/clientes/".concat(id));
    }
}
