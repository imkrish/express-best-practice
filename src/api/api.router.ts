import * as express from 'express'
import { userRouter } from './user/user.router'
export const apiRouter = express.Router()

apiRouter.use('/user', userRouter)
