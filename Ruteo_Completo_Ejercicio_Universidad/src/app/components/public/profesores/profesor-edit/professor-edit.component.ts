import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ARRAY_PROFESSOR } from 'src/app/mocks/professor-mock';
import { Professor } from 'src/app/models/professor';

@Component({
  selector: 'app-teacher-edit',
  templateUrl: './professor-edit.component.html',
  styleUrls: ['./professor-edit.component.css']
})
export class ProfesoresEditComponent implements OnInit {

  public tempBase64: any;
  public objProfessor: Professor;

  constructor(public modalService: BsModalService, private toastr: ToastrService, private route: ActivatedRoute, private router: Router) {
    this.objProfessor = new Professor(0, 0, '', '', '');
  }


  ngOnInit(): void {
    this.route.paramMap.subscribe((parameter: ParamMap)=>{
      let tempObject : any;
      const data = String(parameter.get('codProfessor'));
      const numericalData = parseFloat(data);
      tempObject = ARRAY_PROFESSOR.find((professor)=>professor.cod===numericalData);
      this.objProfessor = tempObject;
    });

  }

  public selectPhoto(input: any): any {
    if (!input.target.files[0] || input.target.files[0].length === 0) {
      return;
    }
    const mimeType = input.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.ToastrModal('Solo <b>imagenes</b> son aceptadas', 'Error', 3);
    }
    const reader = new FileReader();
    reader.readAsDataURL(input.target.files[0]);
    reader.onload = () => {
      this.tempBase64 = reader.result;
      this.objProfessor.photoBase64 = this.tempBase64;
      this.objProfessor.photo = input.target.files[0].name;
    };
  }

  public sendInfo(form: NgForm): boolean {
    this.ToastrModal('El profesor a sido <b>actualizado</b> correctamente', 'Hecho', 1);
    this.router.navigate(['/profesor/listar']);
    return true;
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
