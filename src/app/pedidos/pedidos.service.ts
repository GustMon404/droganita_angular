import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap, take, map, delay } from 'rxjs/operators';

import { Pedido } from './pedido';


@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private http: HttpClient) {
  }

  private readonly API = `${environment.API}pedido/`

  lista_pedidos(){
    return this.http.get<Pedido[]>(this.API).pipe(
      // tap(ev => console.log(ev)),
      map((res:any) => res.results),
      take(1)
      )
  }

  adicionar_pedidos(produto: Pedido){
    // let novo_produto={nome:produto,encomenda:encomenda,  marca: marca, tipo: tipo, situacao: situacao}
    //this.pedidos.unshift(produto)

    // console.log(produto)

    // let data = new Date();
    // let data_string = `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`
      
    // produto.situacao = "AB";
    // produto.data = data_string;
    // produto.id = Math.random();
    return this.http.post(this.API, produto)
  }

  deletar(pedido){
    return this.http.delete(this.API + pedido.id + "/")
  }

  mudar_situacao(pedido, situacao){
    //;
    return this.http.patch<Pedido>(this.API + pedido.id + "/", {"situacao": situacao }).pipe(take(1))
  }

  pesquisar(nome, tipo){
    // if(tipo !== ''){
    //   return this.http.get<Pedido[]>(this.API + "?nome=" + nome + '&tipo='+tipo).pipe(map((res:any)=>res.results))
    // }
    return this.http.get<Pedido[]>(this.API + "?nome=" + nome + '&tipo='+tipo).pipe(map((res:any)=>res.results))
  }
  
}
