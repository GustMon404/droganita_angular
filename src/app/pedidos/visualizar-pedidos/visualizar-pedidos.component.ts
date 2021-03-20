import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import {PedidosService} from '../pedidos.service';

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

}
