import { container } from "tsyringe";
import express from 'express'
import { RegisterCategoryUseCases } from "./registerCategoryUseCases";
import { CategoryRepository } from "../../infra/repository/CategoryRepository";
import { ICategoryDTO } from "../../infra/entities/Category";


class RegisterCategoryController{

    constructor(private useCase:RegisterCategoryUseCases){}

    async handle(req: express.Request,res: express.Response,next:express.NextFunction):Promise<express.Response>{

        const { name }: ICategoryDTO = req.body;

        const registerUseCase = container.resolve(RegisterCategoryUseCases)

        await registerUseCase.execute({
            name
        })

        return res.status(201).json({message:'Registo criado com sucesso'})
    }
}

export {RegisterCategoryController}