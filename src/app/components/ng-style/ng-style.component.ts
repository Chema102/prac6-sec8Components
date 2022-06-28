import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
   <button class="btn btn-primary" (click)="tamanio= tamanio + 0.2">
      <i class="fa fa-plus"></i>
    </button>
    <button class="btn btn-danger m-2" (click)="tamanio= tamanio - 0.2">
      <i class="fa fa-minus"></i>
    </button>
    <p [style.fontSize.rem]="tamanio">
      esto es una prueba de estilos
    </p>

  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {
  tamanio : number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
