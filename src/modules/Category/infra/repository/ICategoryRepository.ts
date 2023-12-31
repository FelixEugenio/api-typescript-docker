import { ICategoryDTO } from "../entities/Category"

interface ICategoryRepository{
    register(name:ICategoryDTO):Promise<void>
}

export {ICategoryRepository}