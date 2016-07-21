import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { ChordGameAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(ChordGameAppComponent);
