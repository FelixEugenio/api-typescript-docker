"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserRepository = void 0;
var _prismaClient = require("../../../../shared/infra/prisma/prismaClient");
class UserRepository {
  async register({
    email,
    name,
    password,
    phone
  }) {
    await _prismaClient.prismaClient.user.create({
      data: {
        name: name,
        password: password,
        phone: phone,
        email: email
      }
    });
  }
}
exports.UserRepository = UserRepository;