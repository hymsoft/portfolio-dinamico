import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from 'src/app/servicios/portfolio-data.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css'],
})
export class EncabezadoComponent implements OnInit {
  encabezado: any;

  constructor(private portfolioData: PortfolioDataService) {}

  ngOnInit(): void {
    this.portfolioData.obtenerDatos().subscribe((data) => {
      this.encabezado = data.encabezado;
    });
  }
}
