/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */

import formData from 'express-form-data';
import { App } from '@easyex/core';

@App({ ip : '0.0.0.0', port : 9000, apiRoot : '/' })
class Main {

  constructor() {
    this.server.use(formData.parse({ autoClean : true }));

    this.server.traceLog({ level : ['info'] });
    this.server.accessLog({ writeFile : true });

    this.$logger.info(`port: ${this.port}`);
    this.$logger.info('ip: ', this.ip);
    this.$logger.warn('port: ', this.port);
  }
}
