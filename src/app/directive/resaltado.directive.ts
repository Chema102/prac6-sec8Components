import { Directive, ElementRef , HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {
  @Input('appResaltado') color2!:string;

  constructor(private _elR:ElementRef ) {
    console.log("directiva llamada");

   }

   @HostListener('mouseenter') mause(){
    this.cambiarColor(this.color2 || 'red');
   }

   @HostListener('mouseleave') mause2(){
     this.cambiarColor( "white" );
   }

   private cambiarColor(color:string ){
    this._elR.nativeElement.style.backgroundColor=color;
   }
}
