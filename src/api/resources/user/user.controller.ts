import { generateController } from '../../modules/generateController'
import { IUserModel, User } from './user.model'

export const userController = generateController<IUserModel>(User)
