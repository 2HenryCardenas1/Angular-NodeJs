import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AutenticacionService } from './../../servicios/autenticacion.service';

@Component({
  selector: 'app-mz',
  templateUrl: './mz.component.html',
  styleUrls: ['./mz.component.css'],
})
export class MzComponent implements OnInit {
  public objUsuarioSesion: Usuario;

  constructor(public autenticacionService: AutenticacionService) {
    this.objUsuarioSesion = autenticacionService.obtenerUsuario();
  }

  ngOnInit(): void {}
}
