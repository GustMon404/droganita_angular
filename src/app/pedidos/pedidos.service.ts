import { Injectable } from '@angular/core';
import { Pedido } from './pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor() {
   }

  pedidos:Pedido[] = [{nome:"Losartana 50mg 30cpr", encomenda: false, marca: "pratti", tipo: "GN", situacao: "FT", data: '20/03/2021', vendedor: 'Rafael'},
                      {nome:"Cetoconazol 50mg 30cpr",encomenda: true, marca: "Legrand", tipo: "GN", situacao: "PD", data: '20/03/2021', vendedor: 'Rafael'},
                      {nome:"Paracetamol 50mg 30cpr",encomenda: false, marca: "Eurodarma", tipo: "GN", situacao: "NP", data: '20/03/2021', vendedor: 'Rafael'},]

  lista_pedidos(){
    return this.pedidos
  }

  adicionar_pedidos(produto: Pedido){
    // let novo_produto={nome:produto,encomenda:encomenda,  marca: marca, tipo: tipo, situacao: situacao}
    this.pedidos.unshift(produto)
  }

  
}
