import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from 'src/app/servicios/portfolio-data.service';

@Component({
  selector: 'app-experiencia-list',
  templateUrl: './experiencia-list.component.html',
  styleUrls: ['./experiencia-list.component.css'],
})
export class ExperienciaListComponent implements OnInit {
  experienciaTitulo: string = 'Experiencia';
  experienciaList: any;
  constructor(private portfolioData: PortfolioDataService) {}

  ngOnInit(): void {
    this.portfolioData.obtenerDatos().subscribe((data) => {
      this.experienciaList = data.experiencia;
    });
  }
}
