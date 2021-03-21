import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pedido } from './pedido';


@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private http: HttpClient) {
  }

  lista_pedidos(){
    return this.http.get<Pedido[]>(`${environment.API}pedidos`)
  }

  adicionar_pedidos(produto: Pedido){
    // let novo_produto={nome:produto,encomenda:encomenda,  marca: marca, tipo: tipo, situacao: situacao}
    //this.pedidos.unshift(produto)
  }

  
}
