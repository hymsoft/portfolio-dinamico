import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css'],
})
export class EncabezadoComponent implements OnInit {
  logoArgentinaPrograma = '../assets/img/APLogo-20-20.png';
  logoArgentinaProgramaAlt = 'Logo Plan Argentina Programa';
  brand = '#YoProgramo';

  constructor() {}

  ngOnInit(): void {}
}
