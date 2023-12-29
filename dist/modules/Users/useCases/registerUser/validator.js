"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerValidatorv = void 0;
var _celebrate = require("celebrate");
const registerValidatorv = exports.registerValidatorv = {
  [_celebrate.Segments.BODY]: _celebrate.Joi.object().keys({
    name: _celebrate.Joi.string().required(),
    email: _celebrate.Joi.string().email().required(),
    password: _celebrate.Joi.string().required(),
    phone: _celebrate.Joi.string().required()
  })
};