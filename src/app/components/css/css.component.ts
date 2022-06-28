import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p>
      css works!
    </p>
  `,
  styles: [`
        /* esto solo afecto a lo que esta adentro de template o adentro del componente,
         no efectara a los de afuera de este, solo si estan en el estilo global 'styles.css' */
      p{
        color:red;
        font-size:2rem;
      }
  `
  ]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
