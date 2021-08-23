import { ARRAY_PROFESSOR } from './../../../../mocks/professor-mock';
import { Professor } from './../../../../models/professor';
import { Component, OnInit } from '@angular/core';
import { ProfessorUniversity } from 'src/app/models/professor-university';
import { University } from 'src/app/models/university';
import { ToastrService } from 'ngx-toastr';
import { ARRAY_PROFESSOR_UNIVERSITY } from 'src/app/mocks/professor-university-mock';
import { ARRAY_UNIVERSITY } from 'src/app/mocks/university-mock';
import { Router } from '@angular/router';
import { ArrayPipe } from 'src/app/pipes/array.pipe';

@Component({
  selector: 'app-asociar-profesor',
  templateUrl: './asociar-profesor.component.html',
  styleUrls: ['./asociar-profesor.component.css'],
  providers: [ArrayPipe]
})
export class AsociarProfesorComponent implements OnInit {
  public arrayProfessorsUniversities: Array<ProfessorUniversity>;
  public arrayUniversities: Array<University>;
  public arrayProfessors: Array<Professor>;
  public objProfessorUniversity: ProfessorUniversity;
  public objUniversity: University;
  public objProfessor: Professor;

  constructor(private toastr: ToastrService, private router: Router,private order: ArrayPipe) {
    this.arrayProfessorsUniversities = ARRAY_PROFESSOR_UNIVERSITY;
    this.arrayUniversities = ARRAY_UNIVERSITY;
    this.arrayProfessors = ARRAY_PROFESSOR;
    this.objProfessorUniversity = new ProfessorUniversity(new Professor(0, 0,'', '', ''), new University(0, '', '', ''));
    this.objUniversity = new University(0, '', '', '');
    this.objProfessor = new Professor(0, 0, '', '', '');
  }

  ngOnInit(): void {
    const parametersU = ['nameUniversity', 'DESC'];
    this.arrayUniversities = this.order.transform(ARRAY_UNIVERSITY, parametersU);

  }
  public asociar(objUni: University, objPro: Professor): void {
    this.objProfessorUniversity = new ProfessorUniversity(objPro, objUni);
    ARRAY_PROFESSOR_UNIVERSITY.push(this.objProfessorUniversity);
    this.ToastrModal('El profesor a sido asiganado a la universidad con <b>exito</b>', 'Hecho', 1);
    this.router.navigate(['/externa/universidad/universidad-detail']);
  }

  public seleccionarUniversidad(obj: University): void {
    this.objUniversity = obj;
  }

  public seleccionarProfesor(obj: Professor): void {
    this.objProfessor = obj;
  }

  public ToastrModal(message: string, title: string, opcion: number): void {
    const parameters = {
      closeButton: true,
      enableHtml: true,
      progressBar: true,
      positionClass: 'toast-top-right',
      timeout: 8000
    };
    switch (opcion) {
      case 1:
        this.toastr.success(message, title, parameters);
        break;
      case 2:
        this.toastr.info(message, title, parameters);
        break;
      case 3:
        this.toastr.warning(message, title, parameters);
        break;
      case 4:
        this.toastr.error(message, title, parameters);
        break;

      default:
        break;
    }
  }

}
