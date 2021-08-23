import { TemplateRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ARRAY_PROFESSOR } from 'src/app/mocks/professor-mock';
import { Professor } from 'src/app/models/professor';
import { ArrayPipe } from 'src/app/pipes/array.pipe';

@Component({
  selector: 'app-teacher-admin',
  templateUrl: './professor-admin.component.html',
  styleUrls: ['./professor-admin.component.css'],
  providers: [ArrayPipe],
})
export class ProfesoresAdminComponent implements OnInit {
  public profesorSelected: Professor;
  public arrayProfessors: Array<Professor>;
  public actualPage: number;
  public amountShowRecords: number;
  public amountTotalRecords: number;
  public amountTotalPages: number;

  public modalRef: BsModalRef;
  public modalTitulo: string;
  public modalTexto: string;
  public modalContenido: string;
  public truco: any;

  constructor(
    private order: ArrayPipe,
    public modalService: BsModalService,
    private toastService: ToastrService,
    private router: Router
  ) {
    const parameters = ['document', 'ASC'];
    this.profesorSelected = new Professor(0, 0, '', '', '');
    this.arrayProfessors = this.order.transform(ARRAY_PROFESSOR, parameters);
    this.actualPage = 1;
    this.amountShowRecords = 5;
    this.amountTotalRecords = this.arrayProfessors.length;
    this.amountTotalPages = Math.ceil(
      this.amountTotalRecords / this.amountShowRecords
    );

    this.modalRef = this.truco;
    this.modalTitulo = '';
    this.modalTexto = '';
    this.modalContenido = '';
  }

  ngOnInit(): void {
    const parameters = ['document', 'ASC'];
    this.arrayProfessors = this.order.transform(ARRAY_PROFESSOR, parameters);

  }

  public selected(tmpProfesor: Professor): void {
    this.profesorSelected = tmpProfesor;
  }

  public modalRefbtn(): void {
    this.modalRef.hide();
    this.profesorSelected = new Professor(0, 0, '', '', '');
  }

  public deleteProfessor(objProfessor: Professor): void {
    this.arrayProfessors = this.arrayProfessors.filter(
      (element) => element != objProfessor
    );
    this.amountTotalRecords = this.arrayProfessors.length;
    this.amountTotalPages = Math.ceil(
      this.amountTotalRecords / this.amountShowRecords
    );

    this.profesorSelected = new Professor(0, 0, '', '', '');
  }

  public btnEliminar(): void {
    this.deleteProfessor(this.profesorSelected);

    this.ToastrModal(
      'El profesor a sido <b>eleminado</b> correctamente',
      'Hecho',
      1
    );

    this.modalRef.hide();
  }

  public abrirModalBorrar(
    template: TemplateRef<any>,
    profesorTmp: Professor
  ): void {
    this.profesorSelected = profesorTmp;
    this.modalRef = this.modalService.show(template, { class: 'modal-md' });
    this.modalTitulo = 'Advertencia';
    this.modalTexto = '¿Estas seguro de eliminar el profesor?';
    this.modalContenido = this.profesorSelected.nameProfessor;
  }

  public ToastrModal(message: string, title: string, opcion: number): void {
    const parameters = {
      closeButton: true,
      enableHtml: true,
      progressBar: true,
      positionClass: 'toast-top-right',
      timeout: 8000,
    };
    switch (opcion) {
      case 1:
        this.toastService.success(message, title, parameters);
        break;
      case 2:
        this.toastService.info(message, title, parameters);
        break;
      case 3:
        this.toastService.warning(message, title, parameters);
        break;
      case 4:
        this.toastService.error(message, title, parameters);
        break;

      default:
        break;
    }
  }
}
