import { prismaClient } from "../../../../shared/infra/prisma/prismaClient";
import { ICategoryRepository } from "./ICategoryRepository";
import { ICategoryDTO } from "../entities/Category";

class CategoryRepository implements ICategoryRepository{

     async register({name}: ICategoryDTO): Promise<void> {
        await prismaClient.category.create({
          data:{
            name:name
          }
        })
    }
}

export {CategoryRepository}