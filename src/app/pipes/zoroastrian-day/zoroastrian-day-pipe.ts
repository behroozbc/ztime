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

  /** روز سال (۱-based) را محاسبه می‌کند */
  private getDayOfYear(date: Date): number {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date.getTime() - start.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  }
}
