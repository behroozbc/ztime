import { ZoroastrianDayPipe } from './zoroastrian-day-pipe';

describe('ZoroastrianDayPipe', () => {
  let pipe: ZoroastrianDayPipe;

  beforeEach(() => {
    pipe = new ZoroastrianDayPipe();
  });

  it('باید instance درست ساخته شود', () => {
    expect(pipe).toBeTruthy();
  });

  // ────────────────────────────────────────────────
  // تست‌های اصلی منطق روز زرتشتی
  // ────────────────────────────────────────────────

  it('باید روز 21 مارس 2025 (اعتدال بهاری تقریبی) → انارام برگرداند', () => {
    const result = pipe.transform(new Date('2025-03-21'));
    expect(result).toBe('انارام');
  });

  it('باید روز قبل از اعتدال بهاری (20 مارس 2025) → زامیاد برگرداند', () => {
    const result = pipe.transform(new Date('2025-03-20'));
    expect(result).toBe('زامیاد');
  });

  it('باید 25 فوریه 2026 → سپندارمزد برگرداند', () => {
    // طبق محاسبه فعلی pipe شما
    const result = pipe.transform(new Date('2026-02-25'));
    expect(result).toBe('سپندارمزد');
  });

  it('باید سال کبیسه 2024-03-20 → انارام برگرداند', () => {
    const result = pipe.transform(new Date('2024-03-20'));
    expect(result).toBe('انارام');
  });

  it('باید سال کبیسه 2024-03-21 → اورمزد برگرداند', () => {
    const result = pipe.transform(new Date('2024-03-21'));
    expect(result).toBe('اورمزد');
  });

  it('باید روزهای پنجه را درست تشخیص دهد - مثال: 31 دسامبر 2025', () => {
    // این تاریخ معمولاً داخل پنجه قرار می‌گیرد
    const result = pipe.transform(new Date('2025-12-31'));
    expect(['اَهْنْوَرْد', 'اَشْتُود', 'سْپَنْتَمَد', 'وَهْوَخْشَتَر', 'وَهْوِشْتْواش'])
      .toContain(result);
  });

  // ────────────────────────────────────────────────
  // تست‌های edge case و ورودی‌های نامعتبر
  // ────────────────────────────────────────────────

  it('اگر ورودی null باشد → "—" برگرداند', () => {
    expect(pipe.transform(null)).toBe('—');
  });

  it('اگر ورودی undefined باشد → "—" برگرداند', () => {
    expect(pipe.transform(undefined)).toBe('—');
  });

  it('اگر رشته تاریخ نامعتبر باشد → "تاریخ نامعتبر" برگرداند', () => {
    expect(pipe.transform('این تاریخ نیست')).toBe('تاریخ نامعتبر');
  });

  it('اگر ورودی رشته معتبر تاریخ باشد باید کار کند', () => {
    const result = pipe.transform('2026-02-25T12:00:00');
    expect(result).toBe('سپندارمزد');
  });

  it('باید روز 30ام هر ماه زرتشتی را درست محاسبه کند (مانتره سپند)', () => {
    // مثالی که باید به روز ۳۰ برسد
    const result = pipe.transform(new Date('2025-03-19'));
    expect(result).toBe('مانتره سپند');
  });
});