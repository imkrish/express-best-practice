import * as express from 'express'
import { playlistController } from './playlist.controller'

export const playlistRouter = express.Router()

playlistRouter.param('id', playlistController.findById)

playlistRouter.route('/')
    .get(playlistController.getAll)
    .post(playlistController.createOne)

playlistRouter.route('/:id')
    .get(playlistController.getOne)
    .put(playlistController.updateOne)
    .delete(playlistController.deleteOne)
