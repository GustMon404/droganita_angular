export class Pedido {
    id?: number;
    nome: string;
    marca: string;
    tipo: string = "GN";
    encomenda: boolean= false;
    data?: String;
    vendedor?: string;
    situacao?: string;
}
