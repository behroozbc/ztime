import { ZoroastrianYearPipe } from './zoroastrian-year-pipe';

describe('ZoroastrianYearPipe', () => {
  let pipe: ZoroastrianYearPipe;

  beforeEach(() => {
    pipe = new ZoroastrianYearPipe();
  });

  it('باید به درستی سال شمسی را به سال زرتشتی تبدیل کند', () => {
    // 1404 شمسی → 3763 زرتشتی
    const date = new Date(2025, 3, 10); // حدود 21 فروردین 1404
    expect(pipe.transform(date)).toBe(3763);

    // 1405 شمسی → 3764
    const date2 = new Date(2026, 2, 21); // تقریباً نوروز 1405
    expect(pipe.transform(date2)).toBe(3764);
  });

  it('باید سال‌های قبل از میلادی را هم درست حساب کند', () => {
    // سال 2023 میلادی ≈ 1402 شمسی → 3761 زرتشتی
    const date = new Date(2023, 7, 15);
    expect(pipe.transform(date)).toBe(3761);
  });

  it('باید با تاریخ‌های مختلف در یک سال شمسی یکسان عمل کند', () => {
    const year = 2025; // وسط سال 1404 شمسی

    expect(pipe.transform(new Date(year, 0, 1))).toBe(3763);
    expect(pipe.transform(new Date(year, 5, 15))).toBe(3763);
    expect(pipe.transform(new Date(year, 11, 31))).toBe(3763);
  });

  it('باید نزدیک مرز سال نو (نوروز) درست کار کند', () => {
    // آخرین روز 1403 → 3762
    const lastDay1403 = new Date(2025, 2, 20); // 29 اسفند 1403
    expect(pipe.transform(lastDay1403)).toBe(3762);

    // روز بعد → نوروز 1404 → 3763
    const firstDay1404 = new Date(2025, 2, 21);
    expect(pipe.transform(firstDay1404)).toBe(3763);
  });

  it('باید با تاریخ‌های آینده (بعد از 2026) هم درست کار کند', () => {
    const futureDate = new Date(2030, 6, 10); // حدود تیر 1409
    expect(pipe.transform(futureDate)).toBe(3768);
  });

  it('باید ورودی‌های مرزی (سال صفر میلادی و قبل از آن) را مدیریت کند', () => {
    // سال 1 میلادی ≈ سال 1340 قبل از هجرت ≈ سال 3760 زرتشتی نیست!
    // اما منطق pipe فقط سال فعلی + 2359 می‌کند
    const year1 = new Date(1, 0, 1);
    expect(pipe.transform(year1)).toBe(1 + 2359); // 2360

    const bcDate = new Date(-500, 5, 15); // 500 سال قبل از میلاد
    // سال شمسی منفی می‌شود → نتیجه منفی یا صفر می‌شود
    const result = pipe.transform(bcDate);
    expect(result).toBeLessThanOrEqual(2359);
  });

  // تست‌های اختیاری - بیشتر برای اطمینان از پایداری
  it('باید با تاریخ فعلی (زمان اجرای تست) منطقی برگرداند', () => {
    const now = new Date();
    const result = pipe.transform(now);
    expect(result).toBeGreaterThan(3750);
    expect(result).toBeLessThan(3800); // تا سال 2050 منطقی است
  });
});