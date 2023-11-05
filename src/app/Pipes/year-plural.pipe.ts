import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yearPlural',
  standalone:true
})
export class YearPluralPipe implements PipeTransform {

  transform(year: number): string {
    if (year===0) {
      return 'New';
    }
    else if(year===1){
      return '1 Year';
    }
    else if(year>1){
      return `${year} Years`;
    }
    else return 'N/A';
  }

}
