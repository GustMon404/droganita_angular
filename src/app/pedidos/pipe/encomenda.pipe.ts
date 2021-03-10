import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'encomenda'
})
export class EncomendaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(value== true){
      return 'Sim'
    }
    return 'Não';
  }

}
