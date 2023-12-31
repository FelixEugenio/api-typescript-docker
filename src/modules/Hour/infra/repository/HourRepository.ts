import { prismaClient } from "../../../../shared/infra/prisma/prismaClient";
import { IHourRepository } from "./IHourRepository";
import { IHourDTO } from "../entities/Hour";

class HourRepository implements IHourRepository{

     async register({hour}: IHourDTO): Promise<void> {
        await prismaClient.hour.create({
          data:{
            hour:hour
          }
        })
    }
}

export {HourRepository}