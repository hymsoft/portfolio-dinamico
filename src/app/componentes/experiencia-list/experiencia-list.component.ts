import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia-list',
  templateUrl: './experiencia-list.component.html',
  styleUrls: ['./experiencia-list.component.css'],
})
export class ExperienciaListComponent implements OnInit {
  experienciaTitulo: string = 'Experiencia';
  experienciaList = [
    {
      logo: '../assets/img/logo_diseno5.png',
      logoAlt: 'Logo Diseño 5 S.R.L.',
      empresa: 'Diseño 5 S.R.L',
      puesto: 'Diseñador Gráfico',
      descripcion:
        'Diseño gráfico en general, con el uso de programas como Photoshop,InDesign, Illustrator.',
      fechaIngreso: 'Enero 2010',
      fechaEgreso: 'Julio 2018',
      meses: '102',
    },
    {
      logo: '../assets/img/logo_scd.png',
      logoAlt: 'Logo SCD Servicios Informáticos',
      empresa: 'SCD Servicios Informáticos',
      puesto: 'Técnico de Campo',
      descripcion:
        'Mantenimiento y configuración de equipos informáticos relacionados con el despacho de combustibles líquidos, en todas las estaciones de servicio YPF-ESSO, desde Río Gallegos(Santa Cruz) hasta Comodoro Rivadavia(Chubut).',
      fechaIngreso: 'Enero 2006',
      fechaEgreso: 'Enero 2010',
      meses: '48',
    },
    {
      logo: '../assets/img/logo_stylus.png',
      logoAlt: 'Logo Stylus S.A.',
      empresa: 'Stylus S.A.',
      puesto: 'Encargado de RMA',
      descripcion:
        'Encargado de la recepción, clasificación, prueba, tramitación y entrega de los artículos en estado de RMA (Return material authorization). Armado y prueba de equipos de computación. Instalación de software en general. Mantenimiento de la red interna de la sucursal Córdoba.',
      fechaIngreso: 'Enero 2003',
      fechaEgreso: 'Diciembre 2005',
      meses: '23',
    },
    {
      logo: '',
      logoAlt: '',
      empresa: 'Barone S.A.',
      puesto: 'Encargado y programador del centro de cómputos de la sucursal',
      descripcion:
        'Desarrollo de varios sistemas para el control de la sucursal en conjunto con el encargado de cómputos de Casa Central Control de stock y facturación de la sucursal.',
      fechaIngreso: 'Abril 1992',
      fechaEgreso: 'Octubre 1994',
      meses: '30',
    },
    {
      logo: '../assets/img/logo_municiplidad_de_concepcion.jpg',
      logoAlt: 'Logo Municipalidad de Concepción - Tucumán',
      empresa: 'Municipalidad de Concepción',
      puesto: 'Ayudante de programador / programador',
      descripcion:
        'Carga de datos en la Tesorería de la Municipalidad Ayudante de Programación de sistema para el área Tierra y cementerio. Programador de sistema para área Catastro Implementación de la red que une el Área Catastro - Tierras - Tesorería.',
      fechaIngreso: 'Marzo 1990',
      fechaEgreso: 'Enero 1992',
      meses: '22',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
