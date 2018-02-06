import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

console.log("AppModule : ", AppModule);

const bootstrapPromise = platformBrowserDynamic().bootstrapModule(AppModule);

console.log("main 'platformBrowserDynamic().bootstrapModule(AppModule)' : ", bootstrapPromise);

bootstrapPromise.then((...data) => {
    console.log("main after 'platformBrowserDynamic().bootstrapModule(AppModule).then args' : ", data);
  })
  .catch(err => console.log(err));
