import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'coFounders'
})
export class CoFoundersPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value === 1) {
      return 'Unique';
    } else if (value === 2) {
      return 'Couple';
    } else if (value > 2) {
      return 'Groupes';
    } else {
      return 'Error';
    }
  }

}
