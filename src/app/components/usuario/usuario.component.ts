import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {

  constructor(public router:ActivatedRoute) {
    console.log('padre');

    this.router.params.subscribe(data => console.log(data));

   }

  ngOnInit(): void {
  }

}
