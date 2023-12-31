import 'reflect-metadata'
import { inject, injectable } from "tsyringe"
import { IUserDTO } from "../../infra/entities/User"
import { IUserRepository } from "../../infra/repository/IUserRepository"
import { hash } from 'bcryptjs'

@injectable()
class RegisterUserUseCases{

    constructor(
      @inject('UserRepository')
      private readonly userRepository:IUserRepository
      
      ){}

   
    async execute({email,name,password,phone}:IUserDTO):Promise<void>{
      const PasswordHash = await hash(password,8);
      await this.userRepository.register({email,name,password:PasswordHash,phone})
    }

}

export {RegisterUserUseCases}