import { Injectable } from '@angular/core';
import dayjs, { Dayjs } from 'dayjs';

import jalaliday from 'jalaliday';
@Injectable({
  providedIn: 'root',
})
export class ZoroastrianDate {

  constructor () {
    dayjs.extend(jalaliday);
  }
  getDayOfYear(date: Dayjs): number {
    return (date.calendar('jalali').diff(dayjs(date.calendar('jalali').locale('en').format("YYYY-1-1"), { jalali: true }).calendar('jalali'), 'days')) + 1;
  }
  getDayName(date: Dayjs): string {
    const dayOfYear = this.getDayOfYear(date);
    if (dayOfYear > 360) {
      const extraDays = dayOfYear - 360;
      const panje = ['اَهْنْوَرْد', 'اَشْتُود', 'سْپَنْتَمَد', 'وَهْوَخْشَتَر', 'وَهْوِشْتْواش'];
      return panje[extraDays - 1] || 'پنجه';
    }
    const zDay = dayOfYear % 30 || 30;
    const names = [           // اندیس ۰ استفاده نمی‌شود
      'انارام',        // ۱
      'اورمزد',
      'وهمن',
      'اردیبهشت',
      'شهریور',
      'سپندارمزد',
      'خورداد',
      'امرداد',
      'دی بآذر',
      'آذر',
      'آبان',
      'خور(خیر)',      // ۱۲
      'ماه',
      'تیر',
      'گوش',
      'دی بمهر',
      'مهر',
      'سروش',
      'رشن',
      'فروردین',
      'ورهرام',
      'رام',
      'باد',
      'دی بدین',
      'دین',
      'ارد',
      'اشتاد',
      'آسمان',
      'زامیاد',
      'مانتره سپند'    // ۳۰
    ];

    return names[zDay] || 'نامشخص';
  }
  getDayOfMonth(date: Dayjs) {
    const dayOfYear = this.getDayOfYear(date);
    return (dayOfYear % 30 || 30);
  }
  getMonth(date: Dayjs): number {
    return date.calendar('jalali').month() + 1;
  }
  getMonthName(date: Dayjs): string {
    const month = this.getMonth(date);
    const names = [
      '',               // اندیس ۰ استفاده نمی‌شود
      'فروشی',        // ۱
      'اشاوهیشتا',
      'هه اروتات',
      'تشتریا',
      'اَمرتات',
      'خشتره ویریه',
      'میترا',
      'آبان',
      'آتر',
      'دتوشو',
      'وهومن',
      'سنپتا آرمیتی',      // ۱۲
    ];
    return names[month];
  }
  getYear(date: Dayjs): number {
    return date.calendar('jalali').year() + 2359;
  }
}
