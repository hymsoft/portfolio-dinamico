import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from 'src/app/servicios/portfolio-data.service';

@Component({
  selector: 'app-habilidad-list',
  templateUrl: './habilidad-list.component.html',
  styleUrls: ['./habilidad-list.component.css'],
})
export class HabilidadListComponent implements OnInit {
  habilidadesTitulo = 'Habilidades';
  habilidadesSubTitulo = 'Progreso medido en años';
  habilidades: any;

  constructor(private portfolioData: PortfolioDataService) {}

  ngOnInit(): void {
    this.portfolioData.obtenerDatos().subscribe((data) => {
      this.habilidades = data.habilidades;
    });
  }
}
