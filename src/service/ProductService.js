/* eslint-disable require-jsdoc */

import { Logger } from '@easyex/core';

@Logger
class ProductService {

  constructor() {
    this.$logger.info('ProductService constructor');
  }

}

export default ProductService;
