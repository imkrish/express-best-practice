import { generateApiSpec } from '../../../test/generateApiSpec'
import { IUserModel, IUser, User } from './user.model'

const newUser: IUser = { username: 'imkrish', passwordHash: 'haha' }

generateApiSpec<IUserModel, IUser>(User, 'user', newUser)
