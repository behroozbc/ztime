import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zoroastrianDay',
})
export class ZoroastrianDayPipe implements PipeTransform {

  transform(value?: Date | string | number | null, format: string="full"): string | number {
    if (!value) {
      return '—';
    }

    // تبدیل ورودی به شیء Date
    const d = value instanceof Date
      ? value
      : new Date(value);

    if (isNaN(d.getTime())) {
      return 'تاریخ نامعتبر';
    }

    const year = d.getFullYear();
    const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    console.log(isLeap);
    
    // روز سال میلادی (1 تا 366)
    const dayOfYear = this.getDayOfYear(d);

    let dayTemp: number;

    if (dayOfYear > 79) {
      dayTemp = dayOfYear - 79;
    } else {
      dayTemp = dayOfYear + (isLeap ? 18 : 17);
    }

    // روزهای پنجه (۵ روز آخر سال)
    if (dayTemp > 360) {
      const extraDays = dayTemp - 360;
      const panje = ['اَهْنْوَرْد', 'اَشْتُود', 'سْپَنْتَمَد', 'وَهْوَخْشَتَر', 'وَهْوِشْتْواش'];
      return panje[extraDays - 1] || 'پنجه';
    }

    
    // محاسبه روز ماه زرتشتی (۱ تا ۳۰)
    const zDay = dayTemp % 30 || 30; // اگر ۰ شد → ۳۰
    if (format === "numberic") {
      return zDay-1;
    }
    const names = [
      '',               // اندیس ۰ استفاده نمی‌شود
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

  /** روز سال (۱-based) را محاسبه می‌کند */
  private getDayOfYear(date: Date): number {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date.getTime() - start.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  }
}
