import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion-list',
  templateUrl: './educacion-list.component.html',
  styleUrls: ['./educacion-list.component.css'],
})
export class EducacionListComponent implements OnInit {
  educacionTitulo = 'Educación';
  cursosTitulo = 'Cursos';
  educacionList = [
    {
      tipo: 'Educacion',
      establecimiento: 'Universidad Tecnológica Nacional',
      fechaInicio: 'Marzo 1991',
      fechaFinal: 'Junio 1993',
      titulo: 'Ingeniería en Sistemas de la Información',
      certificado: '',
      estado: 'Incompleto',
    },
    {
      tipo: 'Educacion',
      establecimiento: 'Escuela Nacional de Comercio',
      fechaInicio: 'Marzo 1985',
      fechaFinal: 'Junio 1990',
      titulo: 'Perito Mercantil con orientación contable',
      certificado: '',
      estado: 'Completo',
    },
  ];
  cursosList = [
    {
      tipo: 'Curso',
      establecimiento: 'FreeCodeCamp',
      fechaInicio: 'Septiembre 2020',
      fechaFinal: 'Noviembre 2020',
      titulo: 'Responsive Web Design',
      certificado:
        'https://www.freecodecamp.org/certification/hymsoft/responsive-web-design',
      estado: 'Completo',
    },
    {
      tipo: 'Curso',
      establecimiento: 'Ministerio de Desarrollo Productivo',
      fechaInicio: 'Agosto 2021',
      fechaFinal: 'Diciembre 2021',
      titulo: 'Argentina Programa Etapa 1 #SeProgramar',
      certificado:
        'https://mumuki.io/argentina-programa/certificates/verify/BLx2c7WVoncbill5',
      estado: 'Completo',
    },
    {
      tipo: 'Curso',
      establecimiento: 'Ministerio de Desarrollo Productivo',
      fechaInicio: 'Febrero 2022',
      fechaFinal: '',
      titulo: 'Full Stack Developer. Argentina Programa Etapa 2 #YoProgramo',
      certificado: '',
      estado: 'Cursando',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
