import { Component, OnInit } from '@angular/core';
import { Pedido } from '../pedido';
import { PedidosService } from '../pedidos.service';

@Component({
  selector: 'app-gerenciar-pedidos',
  templateUrl: './gerenciar-pedidos.component.html',
  styleUrls: ['../pedidos.component.css', './gerenciar-pedidos.component.css']
})
export class GerenciarPedidosComponent implements OnInit {

  constructor(private pedidoService: PedidosService) { }

  ngOnInit(): void {
    this.pedidoService.lista_pedidos().subscribe(pedidos => this.pedidos = pedidos)
  }

  pedidos: Pedido[];

  // encontrarPedido(valueArray, pedido){
  //   return 
  // }

  mudarSituacao(pedido, situacao){
    this.pedidoService.mudar_situacao(pedido, situacao).subscribe(
      () => pedido.situacao = situacao
    )
      // pedido=> {
      //   var t = this.pedidos.filter(pedidoList => pedido.id == pedidoList.id)
      //   console.log(t)
      // }
  }

}
