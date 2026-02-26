import { Pipe, PipeTransform } from '@angular/core';
import { Dayjs } from 'dayjs';

@Pipe({
  name: 'datejs',
})
export class DatejsPipe implements PipeTransform {

  transform(value: Dayjs, format: string = "YYYY/MM/DD", calendar: 'jalali' | 'gregory' = "jalali", locale = "fa"): unknown {
    return value.calendar(calendar).locale(locale).format(format);
  }

}
