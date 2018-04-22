import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// if statemant starting
if (environment.production) {
    // production mode is on
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
    // here comes eventlistener
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
})