import { IHourDTO } from "../entities/Hour"

interface IHourRepository{
    register(hour:IHourDTO):Promise<void>
}

export {IHourRepository}