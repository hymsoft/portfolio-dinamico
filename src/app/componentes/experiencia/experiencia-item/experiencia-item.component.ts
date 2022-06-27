import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia-item.component.html',
  styleUrls: ['./experiencia-item.component.css'],
})
export class ExperienciaItemComponent implements OnInit {
  @Input() experiencia: any;
  constructor() {}

  ngOnInit(): void {}
}
