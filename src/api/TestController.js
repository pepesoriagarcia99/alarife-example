/* eslint-disable require-jsdoc */
import { Controller, Get } from '@easyex/core';

@Controller('/test')
class TestController {

  @Get('/ping')
  ping(req, res) {
    return res.success(200).json({ message : 'pong' });
  }
}

export default TestController;
