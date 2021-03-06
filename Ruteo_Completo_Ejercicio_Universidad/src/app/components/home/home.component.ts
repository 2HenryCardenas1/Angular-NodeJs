import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public welcome: string;
  public description: string;
  public location: string;

  constructor() {
    this.welcome = 'Full Stack';
    this.description = 'Facultad de Ingenieria de Sistemas';
    this.location = 'Universidad Santo Tomas'
  }

  ngOnInit(): void {
  }

}
