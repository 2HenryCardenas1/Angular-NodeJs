import { Component, OnInit } from '@angular/core';
import { ARRAY_UNIVERSITY } from 'src/app/mocks/university-mock';
import { University } from 'src/app/models/university';
import { ArrayPipe } from 'src/app/pipes/array.pipe';

@Component({
  selector: 'app-universidad-listar',
  templateUrl: './universidad-listar.component.html',
  styleUrls: ['./universidad-listar.component.css'],
  providers: [ArrayPipe]
})
export class UniversidadListarComponent implements OnInit {

  public arrayUniversities: Array<University>;
  public actualPage: number;
  public amountShowRecords: number;
  public amountTotalRecords: number;
  public amountTotalPages: number;

  constructor(private order: ArrayPipe) {
    const parameters = ['cod', 'DESC'];
    this.arrayUniversities = this.order.transform(ARRAY_UNIVERSITY, parameters);
    this.actualPage = 1;
    this.amountShowRecords = 5;
    this.amountTotalRecords = this.arrayUniversities.length;
    this.amountTotalPages = Math.ceil(this.amountTotalRecords / this.amountShowRecords);
  }

  ngOnInit(): void {
  }

}
