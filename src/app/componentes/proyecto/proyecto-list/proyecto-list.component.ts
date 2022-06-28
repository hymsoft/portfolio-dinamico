import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyecto-list',
  templateUrl: './proyecto-list.component.html',
  styleUrls: ['./proyecto-list.component.css'],
})
export class ProyectoListComponent implements OnInit {
  proyectoTitulo = 'Proyectos';
  proyectosList = [
    {
      imagen: '../assets/img/desafio-1.png',
      imagenAlt: 'Proyectos - Desafio 1',
      titulo: 'Desafío 1 Modulo 2',
      subTitulo: 'Plan Argentina Programa',
      texto:
        'El desafio consiste en tomar una plantilla de CV Web estática suministrado por la profesora, y adaptarla a nuestra necesidad, cambiando tipografias, colores, agregando foto/s y todo lo que se considere necesario.',
      enlace: 'https://hymsoft.github.io/desafio-modulo-2',
    },
    {
      imagen: '../assets/img/password-checker.png',
      imagenAlt: 'Proyectos - Desafio 2',
      titulo: 'Desafío 2 Modulo 2',
      subTitulo: 'Plan Argentina Programa',
      texto:
        'Habia que generar cualquier proyecto en Bootstrap y JS. Realicé un controlador de password. Muestra distintos requisitos a cumplir. En verde los que están bien y en rojo los que están mal. Cuando todo esta ok, se habilita el boton de login.',
      enlace: 'https://hymsoft.github.io/password-checker',
    },
    {
      imagen: '../assets/img/veterinaria-cuki.png',
      imagenAlt: 'Proyectos - Desafio 3',
      titulo: 'Veterinaria Cuki',
      subTitulo: 'Plan Argentina Programa | 3º desafío',
      texto:
        'Dado ciertos requerimientos por el cliente, se realizó un sitio web, respetando las especificaciones pero agregando lo que sea necesario al proyecto sin romper su estructura.',
      enlace: 'https://hymsoft.github.io/veterinaria-cuki',
    },
    {
      imagen: '../assets/img/Hugo-Antonio-Segura-Portfolio.png',
      imagenAlt: 'Proyectos - Portfolio Estático',
      titulo: 'Portfolio Estático',
      subTitulo: 'Plan Argentina Programa',
      texto:
        ' Portfolio FrontEnd utilizando HTML-CSS-JS, lenguajes aprendidos durante el segundo modulo del plan #YoProgramo.',
      enlace: 'https://hymsoft.github.io/portfolio-static2',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
