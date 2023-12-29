"use strict";

var _tsyringe = require("tsyringe");
var _UserRepository = require("../../modules/Users/infra/repository/UserRepository");
_tsyringe.container.registerSingleton('UserRepository', _UserRepository.UserRepository);