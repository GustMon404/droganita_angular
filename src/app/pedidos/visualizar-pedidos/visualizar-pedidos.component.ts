import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import {PedidosService} from '../../pedidos.service';

@Component({
  selector: 'app-visualizar-pedidos',
  templateUrl: './visualizar-pedidos.component.html',
  styleUrls: ['./visualizar-pedidos.component.css']
})
export class VisualizarPedidosComponent implements OnInit {

  pedidos: any[] = [];

  constructor(private pedidoService: PedidosService) { }

  ngOnInit(): void {
    this.pedidos = this.pedidoService.lista_pedidos()
  }

  expandir(e, evento: MouseEvent){
    let complemento = e.querySelector("#complemento");
    let del = e.querySelector("#delete")
    
    if (evento.type == "mouseover"){
      del.style.display = "block"
      complemento.style.display = "block";
    }
    else{
      del.style.display = "none";
      complemento.style.display = "none";
    }
  }

}
