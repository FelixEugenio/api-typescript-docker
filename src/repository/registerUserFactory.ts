import { RegisterUserController } from "../useCases/registerUserController";
import { RegisterUserUseCases } from "../useCases/registerUserUseCases"
import { UserRepository } from "./UserRepository"

const registerUserFactory = () => {

    const userRepository = new UserRepository()

    const registerUserUseCase = new RegisterUserUseCases(userRepository);

    const registerUserController = new RegisterUserController(registerUserUseCase)

    return registerUserController;

}  

export {registerUserFactory}