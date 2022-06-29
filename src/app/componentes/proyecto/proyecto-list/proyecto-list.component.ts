import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from 'src/app/servicios/portfolio-data.service';

@Component({
  selector: 'app-proyecto-list',
  templateUrl: './proyecto-list.component.html',
  styleUrls: ['./proyecto-list.component.css'],
})
export class ProyectoListComponent implements OnInit {
  proyectoTitulo = 'Proyectos';
  proyectosList: any;
  constructor(private portfolioData: PortfolioDataService) {}

  ngOnInit(): void {
    this.portfolioData.obtenerDatos().subscribe((data) => {
      this.proyectosList = data.proyectos;
    });
  }
}
