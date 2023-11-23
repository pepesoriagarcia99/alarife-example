/* eslint-disable require-jsdoc */
import { App, Value } from '@alarife/core/decorators';

@App({ ip : '0.0.0.0', port : 9000, apiRoot : '/' })
class Main {

  @Value('configuration') configuration;

  constructor() {
    this.configuration.traceLog({ levels : ['info', 'debug', 'error', 'warn'] });
    this.configuration.accessLog({ active : true });
  }
}

export default Main;
