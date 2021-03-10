export class Pedido {
    nome: string;
    marca: string;
    tipo: string = "GN";
    encomenda: boolean= false;
    data?: string;
    vendedor?: string;
    situacao?: string;
}
