import { AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

import { PedidosService } from '../pedidos.service';

@Component({
  selector: 'app-todos-pedidos',
  templateUrl: './todos-pedidos.component.html',
  styleUrls: ['./todos-pedidos.component.css']
})
export class TodosPedidosComponent implements OnInit, AfterViewInit {

  CODE_ELEMENT_TYPE=1;

  pedidos:any = [];

  pedidoElement = null;

  constructor(private pedidosService: PedidosService, private renderer: Renderer2, private el: ElementRef) {
    // window.onload = function(){
    //   document.querySelectorAll("tbody>tr")[0].className="selecionado"
    // }
   }

  ngOnInit(): void {
    this.pedidos = this.pedidosService.lista_pedidos()
  }

  
  @ViewChild('selecao') selecao: ElementRef
  ngAfterViewInit() {
    this.renderer.addClass(this.selecao.nativeElement.firstChild,'selecionado');
    this.pedidoElement = this.selecao.nativeElement.firstChild; //this.el.nativeElement.querySelector("tbody").firstElementChild;
  }

  @HostListener("window:keydown",["$event"])
  mudarSituacao(event){
    if(event.key === "ArrowDown" && this.pedidoElement.nextSibling.nodeType == this.CODE_ELEMENT_TYPE){
      this.renderer.removeClass(this.pedidoElement, 'selecionado');
      this.renderer.addClass(this.pedidoElement.nextSibling,'selecionado');
      this.pedidoElement = this.pedidoElement.nextSibling;
    }
    if(event.key === "ArrowUp" && this.pedidoElement.previousSibling !== null){
      this.renderer.removeClass(this.pedidoElement, 'selecionado');
      this.renderer.addClass(this.pedidoElement.previousSibling,'selecionado');
      this.pedidoElement = this.pedidoElement.previousSibling;
    }
  }
}