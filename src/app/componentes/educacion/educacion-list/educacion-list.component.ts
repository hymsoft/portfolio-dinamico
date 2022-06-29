import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from 'src/app/servicios/portfolio-data.service';

@Component({
  selector: 'app-educacion-list',
  templateUrl: './educacion-list.component.html',
  styleUrls: ['./educacion-list.component.css'],
})
export class EducacionListComponent implements OnInit {
  educacionTitulo = 'Educación';
  cursosTitulo = 'Cursos';
  educacionList: any;
  cursosList: any;

  constructor(private portfolioData: PortfolioDataService) {}

  ngOnInit(): void {
    this.portfolioData.obtenerDatos().subscribe((data) => {
      this.educacionList = data.educacion;
      this.cursosList = data.cursos;
    });
  }
}
