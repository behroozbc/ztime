import { inject, Pipe, PipeTransform } from '@angular/core';
import { ZoroastrianDate } from '../../Services/zoroastrian-date';
import { Dayjs } from 'dayjs';

@Pipe({
  name: 'zoroastrianYear',
})
export class ZoroastrianYearPipe implements PipeTransform {

  private zoroastrianDate = inject(ZoroastrianDate);
  transform(value: Dayjs): number {
    return this.zoroastrianDate.getYear(value);
  }

}
