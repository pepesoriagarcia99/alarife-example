/* eslint-disable require-jsdoc */
import { Controller, Ws } from '@easyex/core';

@Controller('/promotions')
class TestController {

  @Ws('/express')
  ping(ws, req) {
    this.$logger.info('sec-websocket-key: ', req.headers['sec-websocket-key']);
    ws.on('message', event => {
      this.$logger.info(event);
    });
  }
}

export default TestController;
