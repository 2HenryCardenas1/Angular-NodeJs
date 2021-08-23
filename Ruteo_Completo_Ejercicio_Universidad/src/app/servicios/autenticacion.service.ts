import { Injectable } from '@angular/core';
import { Usuario } from './../models/usuario';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  public objUsuario: Usuario;

  constructor(private http: HttpClient, private router: Router) {
    this.objUsuario = new Usuario(0, 0, '', '', '');
  }

  public salir(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }

  public obtenerToken(): any {
    return localStorage.getItem('token');
  }

  public obtenerUsuario(): Usuario {
    return this.objUsuario;
  }

  public verificarCredenciales(): boolean {
    if (localStorage.getItem('token')) {
      const miToken = this.obtenerToken();

      try {
        const miObj = jwtDecode(miToken) as any;

        this.objUsuario.codusuario = miObj.id;
        this.objUsuario.correo = miObj.correo;
        console.log('El token decodificado es: ', miObj);
        return true;
      } catch (error) {
        return false;
      }
    }
    return false;
  }
}
