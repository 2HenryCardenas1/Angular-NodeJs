import { Injectable } from '@angular/core';
import * as misURLS from '../dominios/uris';
import { Usuario } from './../models/usuario';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  public apiRegistrar: string = misURLS.API_USUARIO;

  constructor(private http: HttpClient, private router: Router) {}
  //LLamado del servicio
  public mompaCreelo(nuevecito: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiRegistrar + '/crear', nuevecito);
  }
}
