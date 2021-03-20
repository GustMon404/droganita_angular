import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appExpandir]'
})
export class ExpandirDirective {

  constructor(private e:ElementRef, private render: Renderer2) {
    
   }
  
  
  @HostListener("mouseover")
  expandir(){
    let del = this.e.nativeElement.querySelector("#delete")
    let complemento = this.e.nativeElement.querySelector("#complemento")
    this.render.setStyle(complemento,'display','block')
    this.render.setStyle(del,'display','block')
  }


  @HostListener("mouseout")
  encolher(){
    let del = this.e.nativeElement.querySelector("#delete")
    let complemento = this.e.nativeElement.querySelector("#complemento")
    this.render.setStyle(complemento,'display','none')
    this.render.setStyle(del,'display','none')
  }
}
