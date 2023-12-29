"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RegisterUserController = void 0;
var _tsyringe = require("tsyringe");
var _registerUserUseCases = require("./registerUserUseCases");
class RegisterUserController {
  constructor(useCase) {
    this.useCase = useCase;
  }
  async handle(req, res, next) {
    const {
      email,
      name,
      password,
      phone
    } = req.body;
    const registerUseCase = _tsyringe.container.resolve(_registerUserUseCases.RegisterUserUseCases);
    await registerUseCase.execute({
      email,
      name,
      password,
      phone
    });
    return res.status(201).json({
      message: 'Registo criado com sucesso'
    });
  }
}
exports.RegisterUserController = RegisterUserController;