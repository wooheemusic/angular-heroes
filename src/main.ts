import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

console.log("AppModule : ", AppModule);

const bootstrapPromise = platformBrowserDynamic().bootstrapModule(AppModule);

console.log("promise 'platformBrowserDynamic().bootstrapModule(AppModule)' : ", bootstrapPromise);

bootstrapPromise.then((...data) => {
    console.log("promise.then after 'platformBrowserDynamic().bootstrapModule(AppModule)' : ", data);
  })
  .catch(err => console.log(err));
