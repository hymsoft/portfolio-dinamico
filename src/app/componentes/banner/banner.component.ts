import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  perfil = {
    nombre: 'Hugo Antonio Segura',
    titulo: 'Full Stack Developer Jr.',
    slogan: 'while(!(succeed = try()));',
    imagen: '../assets/img/profile.jpg',
    imagenAlt: 'Foto perfil Segura Hugo Antonio',
  };
  constructor() {}

  ngOnInit(): void {}
}
