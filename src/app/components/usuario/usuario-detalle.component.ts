import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-detalle',
  template: `
    <p>
      usuario-detalle works!
    </p>
  `,
  styles: [
  ]
})
export class UsuarioDetalleComponent implements OnInit {

  constructor(public router:ActivatedRoute) {
    this.router.parent?.params.subscribe(data =>{
        console.log('hija');
        console.log(data);

    });

   }

  ngOnInit(): void {
  }

}
