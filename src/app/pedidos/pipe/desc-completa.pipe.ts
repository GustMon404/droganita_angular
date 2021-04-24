import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descCompleta'
})
export class DescCompletaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    switch(value){
      case 'PF':
        return 'Pefumaria';
      case 'SM':
        return 'Similar';
      case 'GN':
        return 'Genérico';
      case 'ET':
        return 'Ético';
      case 'FT':
        return 'Em Falta';
      case 'PD':
        return 'Pedido';
      case 'AB':
        return 'Aberto'
    }
  }

}
