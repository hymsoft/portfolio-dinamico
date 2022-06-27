import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad-item.component.html',
  styleUrls: ['./habilidad-item.component.css'],
})
export class HabilidadItemComponent implements OnInit {
  @Input() habilidad: any;

  constructor() {}

  ngOnInit(): void {}
}
