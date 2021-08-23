import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AutenticacionService } from './servicios/autenticacion.service';

@Injectable({
  providedIn: 'root',
})
export class VigilanteGuard implements CanActivate {
  constructor(private autenticacionService: AutenticacionService, private router: Router) {}

  canActivate(): boolean {
    if (this.autenticacionService.verificarCredenciales()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
