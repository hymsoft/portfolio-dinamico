import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {
  @Input() experiencia: any;
  constructor() {}

  ngOnInit(): void {}
}
