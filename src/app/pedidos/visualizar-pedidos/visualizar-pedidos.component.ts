import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from '../pedido';

import {PedidosService} from '../pedidos.service';

@Component({
  selector: 'app-visualizar-pedidos',
  templateUrl: './visualizar-pedidos.component.html',
  styleUrls: ['./visualizar-pedidos.component.css']
})
export class VisualizarPedidosComponent implements OnInit {

  pedidos: Pedido[];
  pedidos$: Observable<Pedido[]>

  constructor(private pedidoService: PedidosService) { }

  ngOnInit(): void {
    //this.pedidoService.lista_pedidos().subscribe(pedidos => this.pedidos = pedidos)
    this.listaPedido()
  }

  listaPedido(){
    this.pedidos$ = this.pedidoService.lista_pedidos()
  }

  deletar(e){
    this.pedidoService.deletar(e).subscribe(()=>this.listaPedido())
  }

}
