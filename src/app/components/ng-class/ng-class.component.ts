import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styles: [
  ]
})
export class NgClassComponent implements OnInit {
  alet: string = 'alert-danger';
  alert2: boolean = true;
  cambioAlert: boolean = true;

  loading: boolean= true;
  //lo intente con el objeto y no funciono
  objeto2:Object ={
    danger: false,
  }

  constructor() { }

  ngOnInit(): void {
  }
  cambio(){
    this.loading = false
    setTimeout( ()=> this.loading = true, 3000 );
  }


}
