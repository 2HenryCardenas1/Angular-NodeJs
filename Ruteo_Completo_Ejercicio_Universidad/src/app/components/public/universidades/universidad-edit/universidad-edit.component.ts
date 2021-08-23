import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ARRAY_UNIVERSITY } from 'src/app/mocks/university-mock';
import { University } from 'src/app/models/university';

@Component({
  selector: 'app-universidad-edit',
  templateUrl: './universidad-edit.component.html',
  styleUrls: ['./universidad-edit.component.css']
})
export class UniversidadEditComponent implements OnInit {

  public tempBase64: any;
  public objUniversity: University;

  constructor(public modalService: BsModalService, private toastr: ToastrService, private route: ActivatedRoute, private router: Router) {
    this.objUniversity = new University(0,'','','');
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((parameter: ParamMap) =>{
      let tempObj: any;
      const data = String(parameter.get('codUniversidad'));
      const numericalData = parseFloat(data);
      tempObj = ARRAY_UNIVERSITY.find((university) => university.cod === numericalData);
      this.objUniversity = tempObj;
    });
  }

  public selectedPhoto(input: any): any{
    if(!input.target.files[0] || input.target.files[0].length === 0) return;
    const mimeType = input.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.ToastrModal('Solo <b>imagenes</b> permitidas', 'Advertencia', 3);
    }
    const reader = new FileReader();
    reader.readAsDataURL(input.target.files[0]);
    reader.onload = () => {
      this.tempBase64 = reader.result;
      this.objUniversity.logoBase64 = this.tempBase64;
      this.objUniversity.logo = input.target.files[0].name;
    };
  }

  public sendInfo(form: NgForm): boolean {
    this.ToastrModal('La universidad ha sido  <b>actualizada</b> son exito ', 'Hecho', 1);
    this.router.navigate(['/universidad/admin'])
    return true;
  }

  public ToastrModal(message: string, title: string, opcion: number){
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
