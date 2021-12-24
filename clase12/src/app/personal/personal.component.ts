import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  mostrar = true;

  constructor() { }

  ngOnInit(): void {
  }

  CambiarEstado(){
    this.mostrar = !this.mostrar;
  }

}
