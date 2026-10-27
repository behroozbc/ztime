import { ApplicationConfig, provideBrowserGlobalErrorListeners, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { TranslocoHttpLoader } from './transloco-loader';
import { getBrowserLang, provideTransloco } from '@jsverse/transloco';

const availableLangs = ['fa', 'en'];

function getDefaultLang(): string {
  const browserLang = getBrowserLang();
  return availableLangs.includes(browserLang ?? '') ? browserLang! : 'fa';
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideHttpClient(), provideTransloco({
        config: { 
          availableLangs,
          defaultLang: getDefaultLang(),
          // Remove this option if your application doesn't support changing language in runtime.
          reRenderOnLangChange: true,
          prodMode: !isDevMode(),
        },
        loader: TranslocoHttpLoader
      })
  ]
};
