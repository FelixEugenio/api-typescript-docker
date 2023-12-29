"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerRoutes = void 0;
var _express = require("express");
var _celebrate = require("celebrate");
var _validator = require("../../../../modules/Users/useCases/registerUser/validator");
var _registerUserController = require("../../../../modules/Users/useCases/registerUser/registerUserController");
const registerRoutes = exports.registerRoutes = (0, _express.Router)();
const registerUserController = new _registerUserController.RegisterUserController();
registerRoutes.post('/', (0, _celebrate.celebrate)(_validator.registerValidatorv), registerUserController.handle);