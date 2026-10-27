import { TestBed } from '@angular/core/testing';
import { TranslocoTestingModule } from '@jsverse/transloco';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        App,
        TranslocoTestingModule.forRoot({
          langs: {
            fa: {
              title: 'تقویم زرتشتیان',
            },
            en: {
              title: 'Zoroastrian Calendar',
            },
          },
          translocoConfig: {
            availableLangs: ['fa', 'en'],
            defaultLang: 'fa',
          },
        }),
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('تقویم زرتشتیان');
  });

  it('should set document direction to rtl for Persian', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    app.setLang('fa');
    expect(document.documentElement.getAttribute('dir')).toBe('rtl');
    expect(document.documentElement.getAttribute('lang')).toBe('fa');
  });

  it('should set document direction to ltr for English', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    app.setLang('en');
    expect(document.documentElement.getAttribute('dir')).toBe('ltr');
    expect(document.documentElement.getAttribute('lang')).toBe('en');
  });
});
