import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value === '' || value === null) {
      return 'Non';
    } else {
      return 'Oui';
    }
  }

}
