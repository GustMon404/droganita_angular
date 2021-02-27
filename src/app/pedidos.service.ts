import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor() {
   }

  pedidos:object[] = [{nome:"Losartana 50mg 30cpr", marca: "pratti", tipo: "GN", situacao: "FT"},
                      {nome:"Cetoconazol 50mg 30cpr", marca: "Legrand", tipo: "GN", situacao: "FT"},
                      {nome:"Paracetamol 50mg 30cpr", marca: "Eurodarma", tipo: "GN", situacao: "FT"},]

  lista_pedidos(){
    return this.pedidos
  }

  adicionar_pedidos(produto, marca, tipo,situacao){
    let novo_produto={nome:produto, marca: marca, tipo: tipo, situacao: situacao}
    this.pedidos.unshift(novo_produto)
  }

  
}
