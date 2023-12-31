import {container} from 'tsyringe'

import { UserRepository } from '../../modules/Users/infra/repository/UserRepository'
import { IUserRepository } from '../../modules/Users/infra/repository/IUserRepository'
import { IHourRepository } from '../../modules/Hour/infra/repository/IHourRepository'
import { HourRepository } from '../../modules/Hour/infra/repository/HourRepository'
import { CategoryRepository } from '../../modules/Category/infra/repository/CategoryRepository'
import { ICategoryRepository } from '../../modules/Category/infra/repository/ICategoryRepository'

container.registerSingleton<IUserRepository>('UserRepository',UserRepository)
container.registerSingleton<IHourRepository>('HourRepository',HourRepository)
container.registerSingleton<ICategoryRepository>('CategoryRepository',CategoryRepository)

