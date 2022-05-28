import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
// importaciones para el proyecto y acceso de la camara
import { defineCustomElements } from '@ionic/pwa-elements/loader';
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
  //llamar el elemento
  defineCustomElements(window);
