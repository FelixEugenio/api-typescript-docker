import {container} from 'tsyringe'

import { UserRepository } from '../../modules/Users/infra/repository/UserRepository'
import { IUserRepository } from '../../modules/Users/infra/repository/IUserRepository'
import { IHourRepository } from '../../modules/Hour/infra/repository/IHourRepository'
import { HourRepository } from '../../modules/Hour/infra/repository/HourRepository'

container.registerSingleton<IUserRepository>('UserRepository',UserRepository)
container.registerSingleton<IHourRepository>('HourRepository',HourRepository)

