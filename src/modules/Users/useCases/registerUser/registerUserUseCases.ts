import { inject, injectable } from "tsyringe"
import { IUserDTO } from "../../infra/entities/User"
import { IUserRepository } from "../../infra/repository/IUserRepository"

@injectable()
class RegisterUserUseCases{

    constructor(
      @inject('UserRepository')
      private userRepository:IUserRepository
      
      ){}

    async execute({email,name,password,phone}:IUserDTO):Promise<void>{
      await this.userRepository.register({email,name,password,phone})
    }

}

export {RegisterUserUseCases}