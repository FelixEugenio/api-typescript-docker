"use strict";

var _registerUserUseCases = require("./registerUserUseCases");
var _UserRepository = require("../../infra/repository/UserRepository");
const RegisterUserUseCaseMock = _registerUserUseCases.RegisterUserUseCases;
describe('Register User Use Case', () => {
  let sut;
  const data = {
    name: 'Doana Mado',
    email: 'mado@gmail.com',
    password: '1234',
    phone: '031728499'
  };
  const mockUserRepository = {
    register: jest.fn().mockResolvedValueOnce({})
  };
  beforeEach(() => {
    sut = new RegisterUserUseCaseMock(mockUserRepository);
  });
  test('should be able to create a new register user', async () => {
    const userRepository = new _UserRepository.UserRepository();
    const usecase = new _registerUserUseCases.RegisterUserUseCases(userRepository);
    const response = await sut.execute(data);
    expect(response).toBe(undefined);
  });
});