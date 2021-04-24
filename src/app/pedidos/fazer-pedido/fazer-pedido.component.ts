import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Pedido } from '../pedido';
import {PedidosService} from '../pedidos.service';
import { VisualizarPedidosComponent } from '../visualizar-pedidos/visualizar-pedidos.component';
@Component({
  selector: 'app-fazer-pedido',
  templateUrl: './fazer-pedido.component.html',
  styleUrls: ['./fazer-pedido.component.css']
})
export class FazerPedidoComponent implements OnInit {

  constructor(private pedidoService: PedidosService) { }

  ngOnInit(): void {
  }

  @ViewChild(VisualizarPedidosComponent) child:VisualizarPedidosComponent;
  ataulizarLista(){
    this.child.listaPedido()
  }

  produto = new Pedido()

  // produto: string=null;
  // marca: string=null;
  // tipo: string="GN";
  // situacao: boolean = false;

  adicionar_produto(e){
    if(this.produto.nome === null){
      e.nomeProduto.className="form-control is-invalid"
    }
    if(this.produto.marca === null){
      e.marcaProduto.className="form-control is-invalid"
    }
    else{
      
      this.pedidoService.adicionar_pedidos(this.produto).subscribe(() => this.ataulizarLista())

      e.nomeProduto.className="form-control"
      e.marcaProduto.className="form-control"
      
      // this.produto =null;
      // this.produto.marca = null;
      // this.produto.tipo = "GN";
      // this.produto.situacao = "FT";

      this.produto = new Pedido()
    }
  }

}
