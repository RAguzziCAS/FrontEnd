import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent implements OnInit {

  nombre= ""
  autor= ""
  tema= ""
  sinopsis= ""

  constructor() { }

  ngOnInit(): void {
  }

}
