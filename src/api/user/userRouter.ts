import * as express from 'express'
import { UserController } from './userController'
export const userRouter = express.Router()

userRouter.route('/')
    .get(UserController.getAll)
    .post(UserController.post)

userRouter.route('/:id')
    .get(UserController.getOne)
    .put(UserController.put)
    .delete(UserController.delete)
