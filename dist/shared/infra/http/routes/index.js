"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;
var _express = require("express");
var _register = require("./register.routes");
const router = exports.router = (0, _express.Router)();
router.use('/users', _register.registerRoutes);