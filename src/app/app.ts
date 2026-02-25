import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ZoroastrianYearPipe } from './pipes/zoroastrian-year/zoroastrian-year-pipe';
import { ZoroastrianMonthPipe } from './pipes/zoroastrian-month/zoroastrian-month-pipe';
import { ZoroastrianDayPipe } from './pipes/zoroastrian-day/zoroastrian-day-pipe';
interface Day {
  number: number;
  isWeekend: boolean;
}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ZoroastrianYearPipe, ZoroastrianMonthPipe,ZoroastrianDayPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  today: Date = new Date();

  days: (number | null)[] = [
    1, 2, 3, 4, 5, 6, 7,
    8, 9, 10, 11, 12, 13, 14,
    15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28,
    29, 30
  ];
}
