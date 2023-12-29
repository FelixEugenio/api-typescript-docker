import { RegisterUserController } from "./registerUserController";
import { RegisterUserUseCases } from "./registerUserUseCases";
import { UserRepository } from "../../infra/repository/UserRepository"

const registerUserFactory = () => {

    const userRepository = new UserRepository()

    const registerUserUseCase = new RegisterUserUseCases(userRepository);

    const registerUserController = new RegisterUserController(registerUserUseCase)

    return registerUserController;

}  

export {registerUserFactory}