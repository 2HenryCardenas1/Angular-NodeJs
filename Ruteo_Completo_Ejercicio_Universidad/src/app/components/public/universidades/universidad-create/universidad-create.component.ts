import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ARRAY_UNIVERSITY } from 'src/app/mocks/university-mock';
import { University } from 'src/app/models/university';

@Component({
  selector: 'app-universidad-create',
  templateUrl: './universidad-create.component.html',
  styleUrls: ['./universidad-create.component.css']
})
export class UniversidadCreateComponent implements OnInit {

  public tempBase64: any;
  public objUniversity: University;

  constructor(public modalService:BsModalService, private toastr:ToastrService, private router:Router) {
    this.objUniversity = new University(0,'','','');
  }

  ngOnInit(): void {
  }

  public selectedPhoto(input: any): any {
    if (!input.target.files[0] || input.target.files[0].length === 0) return;
    const mimeType = input.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.ToastrModal('Only <b>images</b> are followed', 'Warning', 3);
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
    this.createUniversity();
    this.objUniversity = new University(0,'','','');
    this.ToastrModal('The university has been <b>created</b> sucessfully', 'Success', 1);
    this.router.navigate(['/universidad/listar']);
    return true;
  }

  public createUniversity(): void{
    this.objUniversity.cod = ARRAY_UNIVERSITY.length+1;
    ARRAY_UNIVERSITY.push(this.objUniversity);
  }

  public ToastrModal(message: string, title: string, opcion: number) {
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
