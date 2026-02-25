import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zoroastrianMonth',
})
export class ZoroastrianMonthPipe implements PipeTransform {

  transform(value: Date, format: string = "full"): string | number {
    const month = +(new Intl.DateTimeFormat('fa-IR-u-nu-latn', { month: 'numeric' }).format(value));
    if (format === "numberic")
      return month;
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

}
