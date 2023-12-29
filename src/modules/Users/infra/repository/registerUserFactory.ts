import { RegisterUserController } from "../../useCases/registerUser/registerUserController";
import { RegisterUserUseCases } from "../../useCases/registerUser/registerUserUseCases";
import { UserRepository } from "./UserRepository"

const registerUserFactory = () => {

    const userRepository = new UserRepository()

    const registerUserUseCase = new RegisterUserUseCases(userRepository);

    const registerUserController = new RegisterUserController(registerUserUseCase)

    return registerUserController;

}  

export {registerUserFactory}