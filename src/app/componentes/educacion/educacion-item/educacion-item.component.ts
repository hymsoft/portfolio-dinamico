import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-educacion-item',
  templateUrl: './educacion-item.component.html',
  styleUrls: ['./educacion-item.component.css'],
})
export class EducacionItemComponent implements OnInit {
  @Input() educacion: any;
  constructor() {}

  ngOnInit(): void {}
}
