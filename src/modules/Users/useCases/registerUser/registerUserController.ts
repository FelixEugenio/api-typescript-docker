import { IUserDTO } from "../../infra/entities/User";
import { UserRepository } from "../../infra/repository/UserRepository";
import { RegisterUserUseCases } from "./registerUserUseCases"
import express from 'express'


const factory = () =>{
    const userRepository = new UserRepository();
    const useCase = new RegisterUserUseCases(userRepository);

    return useCase;
}

class RegisterUserController{

    constructor(private useCase:RegisterUserUseCases){}

    async handle(req: express.Request,res: express.Response,next:express.NextFunction):Promise<express.Response>{

        const { email, name, password, phone }: IUserDTO = req.body;

        await factory().execute({
            email,
            name,
            password,
            phone
        })

        return res.status(201).json({message:'Registo criado com sucesso'})
    }
}

export {RegisterUserController}