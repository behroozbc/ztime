import { inject, Pipe, PipeTransform } from '@angular/core';
import { ZoroastrianDate } from '../../Services/zoroastrian-date';
import { Dayjs } from 'dayjs';

@Pipe({
  name: 'zoroastrianMonth',
})
export class ZoroastrianMonthPipe implements PipeTransform {
  private zoroastrianDate = inject(ZoroastrianDate);
  transform(value: Dayjs, format: string = "full"): string | number {
    if (format === "numberic")
      return this.zoroastrianDate.getMonth(value);

    return this.zoroastrianDate.getMonthName(value);
  }

}
