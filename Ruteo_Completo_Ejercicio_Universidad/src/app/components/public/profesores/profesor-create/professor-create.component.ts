import { ARRAY_PROFESSOR_UNIVERSITY } from '../../../../mocks/professor-university-mock';
import { ProfessorUniversity } from '../../../../models/professor-university';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ARRAY_PROFESSOR } from 'src/app/mocks/professor-mock';
import { Professor } from 'src/app/models/professor';
import { University } from 'src/app/models/university';
import { ARRAY_UNIVERSITY } from 'src/app/mocks/university-mock';
import { ArrayPipe } from 'src/app/pipes/array.pipe';

@Component({
  selector: 'app-teacher-create',
  templateUrl: './professor-create.component.html',
  styleUrls: ['./professor-create.component.css'],
  providers: [ArrayPipe]
})
export class ProfesoresCrearComponent implements OnInit {

  public tempBase64: any;
  public objProfessor: Professor;

  public objProUni : ProfessorUniversity;

  public arrayUniversities: Array<University>;
  public objSelectedUniversity: University;



  constructor(public modalService:BsModalService, private toastr:ToastrService, private router:Router,private order: ArrayPipe) {
    this.objProfessor = new Professor(0,0,'', '', '');

    this.arrayUniversities = [];
    this.objSelectedUniversity = new University(0, '', '', '');


    this.objProUni = new ProfessorUniversity( this.objProfessor,this.objSelectedUniversity);


  }

  ngOnInit(): void {
    const parametersU = ['nameUniversity', 'DESC'];
    this.arrayUniversities = this.order.transform(ARRAY_UNIVERSITY, parametersU);
  }

  public selectPhoto(input: any): any{
    if(!input.target.files[0] || input.target.files[0].length === 0) {
      return;
    }
    const mimeType = input.target.files[0].type;
    if(mimeType.match(/image\/*/) == null){
      this.ToastrModal('Solo <b>imagenes</b> son aceptadas', 'Error', 3);
    }
    const reader = new FileReader();
    reader.readAsDataURL(input.target.files[0]);
    reader.onload  = () => {
      this.tempBase64 = reader.result;
      this.objProfessor.photoBase64 = this.tempBase64;
      this.objProfessor.photo = input.target.files[0].name;
    };
  }

  public sendInfo(form:NgForm): boolean{
    this.createProfessor();
    this.objProfessor = new Professor(0,0,'','','');
    this.ToastrModal('El profesor a sido <b>creado</b> correctamente', 'Hecho', 1);
    this.router.navigate(['/profesor/listar']);
    console.log(ARRAY_PROFESSOR);
    console.log(ARRAY_PROFESSOR_UNIVERSITY);

    return true;
  }

  public createProfessor(): void{
    this.objProfessor.cod = ARRAY_PROFESSOR.length+1;
    ARRAY_PROFESSOR.push(this.objProfessor);
    ARRAY_PROFESSOR_UNIVERSITY.push(this.objProUni);
    console.log(ARRAY_PROFESSOR);
    console.log(ARRAY_PROFESSOR_UNIVERSITY);
  }

  public seleccionarUniversidad(codU : number,nameU: string,log : string): void {
    this.objSelectedUniversity.nameUniversity = nameU;
    this.objSelectedUniversity.cod = codU;
    this.objSelectedUniversity.logoBase64 = log;
  }

  public ToastrModal(message:string, title:string, opcion:number):void{
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
