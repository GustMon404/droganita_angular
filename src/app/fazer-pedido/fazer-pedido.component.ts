import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../pedidos.service';

@Component({
  selector: 'app-fazer-pedido',
  templateUrl: './fazer-pedido.component.html',
  styleUrls: ['./fazer-pedido.component.css']
})
export class FazerPedidoComponent implements OnInit {

  constructor(private produtoService: PedidosService) { }

  ngOnInit(): void {
  }

  produto: string=null;
  marca: string=null;
  tipo: string="GN";
  situacao: string = "FT";

  adicionar_produto(e){
    if(this.produto === null){
      e.nomeProduto.className="form-control is-invalid"
    }
    if(this.marca === null){
      e.marcaProduto.className="form-control is-invalid"
    }
    else{
      this.produtoService.adicionar_pedidos(this.produto, this.marca, this.tipo, this.situacao)

      e.nomeProduto.className="form-control"
      e.marcaProduto.className="form-control"
      
      this.produto =null;
      this.marca = null;
      this.tipo = "GN";
      this.situacao = "FT";
    }
  }

}
