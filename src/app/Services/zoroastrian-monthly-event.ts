import { inject, Injectable } from '@angular/core';
import dayjs, { Dayjs } from 'dayjs';
import { ZoroastrianDate } from './zoroastrian-date';
@Injectable({
  providedIn: 'root',
})
export class ZoroastrianMonthlyEvent {
  private isNabor(dayNumber: number) {
    return [2, 12, 14, 21].includes(dayNumber);
  }
  private zoroastrianDate = inject(ZoroastrianDate);
  eventName(date: Dayjs) {
    const dayNumber = this.zoroastrianDate.getDayOfMonth(date);
    if (this.isNabor(dayNumber))
      return "نبر";
    return null;
  }
}
