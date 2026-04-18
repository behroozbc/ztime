import { inject, Pipe, PipeTransform } from '@angular/core';
import { ZoroastrianDate } from '../../Services/zoroastrian-date';
import { Dayjs } from 'dayjs';

@Pipe({
  name: 'zoroastrianDay',
})
export class ZoroastrianDayPipe implements PipeTransform {
  private zoroastrianDate = inject(ZoroastrianDate);
  transform(value?: Dayjs, format: string = "full"): string | number {
    if (!value) {
      return '—';
    }



    if (format === "numberic") {
      return this.zoroastrianDate.getDayOfMonth(value);
    }

    return this.zoroastrianDate.getDayName(value);
  }

}
