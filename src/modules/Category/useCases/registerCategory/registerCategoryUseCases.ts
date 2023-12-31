import 'reflect-metadata'
import { inject, injectable } from "tsyringe"
import { ICategoryRepository } from '../../infra/repository/ICategoryRepository'
import { ICategoryDTO } from '../../infra/entities/Category'

@injectable()
class RegisterCategoryUseCases{

    constructor(
      @inject('HourRepository')
      private readonly categoryRepository:ICategoryRepository
      
      ){}
   
    async execute({name}:ICategoryDTO):Promise<void>{
      await this.categoryRepository.register({name})
    }

}

export {RegisterCategoryUseCases}