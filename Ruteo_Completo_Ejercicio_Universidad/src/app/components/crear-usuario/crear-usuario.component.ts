import { UsuariosService } from './../../servicios/usuarios.service';
import { Usuario } from './../../models/usuario';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import * as miSha512 from 'js-sha512';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css'],
})
export class CrearUsuarioComponent implements OnInit {
  public objUsuario: Usuario;
  public subscription: Subscription;
  public patronCorreo = '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  private tmp: any;

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private usuariosService: UsuariosService
  ) {
    this.objUsuario = new Usuario(0, 0, '', '', '');
    //suscribe para guardar
    this.subscription = this.tmp;
  }

  ngOnInit(): void {}

  public crearUsu(form: NgForm): void {
    const miHash = miSha512.sha512(this.objUsuario.clave);
    var usuarioNuevo = new Usuario(0,1,this.objUsuario.correo,miHash,miHash);
    delete usuarioNuevo.reclave;
    this.subscription = this.usuariosService
      .mompaCreelo(usuarioNuevo)
      .subscribe(
        (res) => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/militar']);
        },
        (err) => {
          console.log(err);
          this.toastEditable(
            'LAS EMBARRASTES',
            'Note puedo crear el usuario',
            'error'
          );
          form.resetForm();
        }
      );
  }

  public toastEditable(tituloT: string, mensajeT: string, tipoT: string): void {
    const parametros = {
      closeButton: true,
      enableHtml: true,
      progressBar: true,
      positionClass: 'toast-top-right',
      timeOut: 8000,
    };
    switch (tipoT.toLowerCase()) {
      case 'success':
        this.toastr.success(mensajeT, tituloT, parametros);
        break;
      case 'info':
        this.toastr.info(mensajeT, tituloT, parametros);
        break;
      case 'warning':
        this.toastr.warning(mensajeT, tituloT, parametros);
        break;
      case 'error':
        this.toastr.error(mensajeT, tituloT, parametros);
        break;
    }
  }
}
