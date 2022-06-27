import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habilidad-list',
  templateUrl: './habilidad-list.component.html',
  styleUrls: ['./habilidad-list.component.css'],
})
export class HabilidadListComponent implements OnInit {
  habilidadesTitulo = 'Habilidades';
  habilidadesSubTitulo = 'Progreso medido en años';
  habilidades = [
    {
      habilidad: 'Excel',
      fechaInicio: '2001',
      fechaActual: '2022',
      porcentaje: 100,
      cantidadAnios: '21',
    },
    {
      habilidad: 'Illustrator',
      fechaInicio: '2010',
      fechaActual: '2022',
      porcentaje: 57,
      cantidadAnios: '12',
    },
    {
      habilidad: 'PhotoShop',
      fechaInicio: '2010',
      fechaActual: '2022',
      porcentaje: 57,
      cantidadAnios: '12',
    },
    {
      habilidad: 'Indesign',
      fechaInicio: '2011',
      fechaActual: '2022',
      porcentaje: 52,
      cantidadAnios: '11',
    },
    {
      habilidad: 'HTML5',
      fechaInicio: '2020',
      fechaActual: '2022',
      porcentaje: 9,
      cantidadAnios: '2',
    },
    {
      habilidad: 'CSS',
      fechaInicio: '2020',
      fechaActual: '2022',
      porcentaje: 9,
      cantidadAnios: '2',
    },
    {
      habilidad: 'Javascrpit',
      fechaInicio: '2021',
      fechaActual: '2022',
      porcentaje: 4,
      cantidadAnios: '1',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
