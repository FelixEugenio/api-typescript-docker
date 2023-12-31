import 'reflect-metadata'
import { inject, injectable } from "tsyringe"
import { IHourRepository } from '../../infra/repository/IHourRepository';
import { IHourDTO } from '../../infra/entities/Hour';

@injectable()
class RegisterHourUseCases{

    constructor(
      @inject('HourRepository')
      private readonly hourRepository:IHourRepository
      
      ){}
   
    async execute({hour}:IHourDTO):Promise<void>{
      await this.hourRepository.register({hour})
    }

}

export {RegisterHourUseCases}