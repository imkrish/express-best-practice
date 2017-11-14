import * as express from 'express'
import { userRouter } from './resources/user/user.router'
import { songRouter } from './resources/song/song.router'
import { playlistRouter } from './resources/playlist/playlist.router'
export const apiRouter = express.Router()

apiRouter.use('/user', userRouter)
apiRouter.use('/song', songRouter)
apiRouter.use('/playlist', playlistRouter)
