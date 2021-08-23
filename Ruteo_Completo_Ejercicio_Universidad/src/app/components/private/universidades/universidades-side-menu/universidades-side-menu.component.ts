import { ProfesoresAdminComponent } from '../../../public/profesores/profesor-admin/professor-admin.component';
import { Component, OnInit } from '@angular/core';
import { ARRAY_UNIVERSITY } from 'src/app/mocks/university-mock';
import { University } from 'src/app/models/university';
import { ArrayPipe } from 'src/app/pipes/array.pipe';

@Component({
  selector: 'app-universidades-side-menu',
  templateUrl: './universidades-side-menu.component.html',
  styleUrls: ['./universidades-side-menu.component.css'],
  providers: [ArrayPipe]
})
export class UniversidadesSideMenuComponent implements OnInit {

  public arrayUniversities: Array<University>;
  public objSelectedUniversity: University;

  constructor(private order: ArrayPipe) {
    this.arrayUniversities = [];
    this.objSelectedUniversity = new University(0, '', '', '');
  }

  ngOnInit(): void {
    const parametersU = ['nameUniversity', 'DESC'];
    this.arrayUniversities = this.order.transform(ARRAY_UNIVERSITY, parametersU);
  }

  public seleccionarUniversidad(obj: University): void {
    this.objSelectedUniversity = obj;
  }

  public inicializar(): void {
    const parameters = ['nameUniversity', 'DESC'];
    this.arrayUniversities = this.order.transform(ARRAY_UNIVERSITY, parameters);
    this.objSelectedUniversity = new University(0, '', '', '');
  }
}
