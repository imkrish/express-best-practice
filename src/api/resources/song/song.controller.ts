import { generateController } from '../../modules/generateController'
import { ISongModel, Song } from './song.model'

export const songController = generateController<ISongModel>(Song)
