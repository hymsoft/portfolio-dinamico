import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css'],
})
export class SobreMiComponent implements OnInit {
  sobreMi = {
    titulo: 'Hola, soy @hymsoft',
    texto: [
      'Un antiguo programador. Empecé con dbase, Clipper, FoxPro for D.O.S., Visual FoxPro, basic, visual basic... Apasionado por la tecnología, siempre estudiando y aprendiendo. Usuario avanzado de Excel, ferviente eliminador de virus informáticos sin pérdida de datos. Amante del backend, enamorándome del FrontEnd.',
      'Actualmente aprendiendo: Programación web con HTML-CSS-JS Curso de C# en la UTN-FRT - Universidad Tecnológica Nacional - Facultad Regional Tucumán - Profesora: Escobar Estela Mabel Segunda etapa del plan #ProgramaArgentina - Full Stack Developer - Profesora: Karin Fleischer.',
      'Me gustan los deportes, especialmente rugby. Hincha de Boca Juniors, Club Atético Talleres de Córdoba y Huirapuca R.C',
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
