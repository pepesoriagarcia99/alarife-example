/* eslint-disable require-jsdoc */
import { AutoWired, Controller, Get, Use } from '@easyex/core';

import UserService from './user/user.service';
import { protect } from '../middleware/auth.js';

@Controller('/user')
class UserController {

  @AutoWired(UserService) userService;

  @Get('/list')
  @Use(protect(['user']))
  userList(req, res) {
    const users = this.userService.getAllUsers();

    this.$logger.info(users);

    res.success().json(users);
  }
}

export default UserController;
