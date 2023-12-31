import 'reflect-metadata'
import { inject, injectable } from "tsyringe"
import { IUserDTO } from "../../infra/entities/User"
import { IUserRepository } from "../../infra/repository/IUserRepository"
import * as argon2 from 'argon2';

@injectable()
class RegisterUserUseCases{

    constructor(
      @inject('UserRepository')
      private readonly userRepository:IUserRepository
      
      ){}

   
    async execute({email,name,password,phone}:IUserDTO):Promise<void>{
      const PasswordHash = await argon2.hash(password);
      await this.userRepository.register({email,name,password:PasswordHash,phone})
    }

}

export {RegisterUserUseCases}