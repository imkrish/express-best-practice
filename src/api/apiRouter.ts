import * as express from 'express'
import { userRouter } from './user/userRouter'
export const apiRouter = express.Router()

apiRouter.use('/user', userRouter)
