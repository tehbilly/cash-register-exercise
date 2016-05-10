import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router';

import { AppComponent } from './components/app/app';

bootstrap(AppComponent, [ROUTER_PROVIDERS])
  .catch((err) => {
    console.error('Bootstrapping error: ', err);
  });
