import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categorieListe'
})
export class CategorieListePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
