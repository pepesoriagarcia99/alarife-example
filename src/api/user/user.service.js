/* eslint-disable require-jsdoc */
import { Service } from '@easyex/core';

@Service
class UserService {

  getAllUsers() {
    return [
      {
        id   : 1,
        name : 'John'
      }
    ];
  }
}

export default UserService;
