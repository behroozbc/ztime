import { CommonModule } from '@angular/common';
import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ZoroastrianYearPipe } from './pipes/zoroastrian-year/zoroastrian-year-pipe';
import { ZoroastrianMonthPipe } from './pipes/zoroastrian-month/zoroastrian-month-pipe';
import { ZoroastrianDayPipe } from './pipes/zoroastrian-day/zoroastrian-day-pipe';
import dayjs, { Dayjs } from 'dayjs';
import { DatejsPipe } from './pipes/persian-date/datejs-pipe';
import { ZoroastrianDate } from './Services/zoroastrian-date';
import { ZoroastrianMonthlyEvent } from './Services/zoroastrian-monthly-event';
interface Day {
  number: number;
  isWeekend: boolean;
}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ZoroastrianYearPipe, ZoroastrianMonthPipe, ZoroastrianDayPipe, DatejsPipe,],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.css'
})
export class App {
  private zoroastrianDate = inject(ZoroastrianDate);
  private zoroastrianMonthlyEvent = inject(ZoroastrianMonthlyEvent);
  today: Dayjs = dayjs();
  /**
   *
   */
  yearProgressed = 0;
  constructor () {
    this.yearProgressed = this.zoroastrianDate.getProgessedDays(this.today);
  }
}
