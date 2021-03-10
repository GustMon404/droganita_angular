import { Component, OnInit } from '@angular/core';
import { Pedido } from '../pedido';
import {PedidosService} from '../pedidos.service';
@Component({
  selector: 'app-fazer-pedido',
  templateUrl: './fazer-pedido.component.html',
  styleUrls: ['./fazer-pedido.component.css']
})
export class FazerPedidoComponent implements OnInit {

  constructor(private produtoService: PedidosService) { }

  ngOnInit(): void {
  }

  produto = new Pedido()

  // produto: string=null;
  // marca: string=null;
  // tipo: string="GN";
  // situacao: boolean = false;

  adicionar_produto(e){
    console.log(this.produto)
    if(this.produto.nome === null){
      e.nomeProduto.className="form-control is-invalid"
    }
    if(this.produto.marca === null){
      e.marcaProduto.className="form-control is-invalid"
    }
    else{
      this.produtoService.adicionar_pedidos(this.produto)

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
