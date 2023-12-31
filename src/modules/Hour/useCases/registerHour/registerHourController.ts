import { container } from "tsyringe";
import { IHourDTO } from "../../infra/entities/Hour";
import { HourRepository } from "../../infra/repository/HourRepository";
import { RegisterHourUseCases } from "./registerHourUseCases";
import express from 'express'


class RegisterHourController{

    constructor(private useCase:RegisterHourUseCases){}

    async handle(req: express.Request,res: express.Response,next:express.NextFunction):Promise<express.Response>{

        const { hour }: IHourDTO = req.body;

        const registerUseCase = container.resolve(RegisterHourUseCases)

        await registerUseCase.execute({
            hour
        })

        return res.status(201).json({message:'Registo criado com sucesso'})
    }
}

export {RegisterHourController}