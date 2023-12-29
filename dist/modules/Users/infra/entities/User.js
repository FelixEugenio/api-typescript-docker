"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;
var _uuid = require("uuid");
class User {
  constructor() {
    if (!this.id) {
      this.id = (0, _uuid.v4)();
    }
  }
}
exports.User = User;