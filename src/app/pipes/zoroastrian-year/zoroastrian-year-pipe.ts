import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zoroastrianYear',
})
export class ZoroastrianYearPipe implements PipeTransform {

  transform(value: Date): number {
    return +(new Intl.DateTimeFormat('fa-IR-u-nu-latn', { year: 'numeric' }).format(value)) + 2359;
  }

}
