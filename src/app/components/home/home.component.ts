import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>
  <app-css></app-css>
  <p>
    si que si pa, esto es una prueba
  </p> -->
  <app-ng-class></app-ng-class>

  <p [appResaltado]="'orange'">
    pipo es grande//directiva pa
  </p>
  <br>
  <app-ng-switch></app-ng-switch>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
