import {provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {
  ROUTER_PROVIDERS,
  HashLocationStrategy,
  LocationStrategy
} from 'angular2/router';

import {CironunesApp} from './app/cironunes';


bootstrap(CironunesApp, [
  ROUTER_PROVIDERS, provide(LocationStrategy, { useClass: HashLocationStrategy })
]);
