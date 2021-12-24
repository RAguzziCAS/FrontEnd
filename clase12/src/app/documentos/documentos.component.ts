import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {


  lista = [
    {
      numero:1,
      tipo:"Factura",
      fecha:"2021-12-23",
      cliente:"Robert"
    },
    {
      numero:2,
      tipo:"Nota de Credito",
      fecha:"2021-12-23",
      cliente:"Juan"
    },
    {
      numero:3,
      tipo:"Nota de Debito",
      fecha:"2021-12-23",
      cliente:"Karla"
    },
    {
      numero:4,
      tipo:"Reversión",
      fecha:"2021-12-23",
      cliente:"Laura"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
