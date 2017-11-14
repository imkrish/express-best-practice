import { IPlaylistModel, Playlist } from './playlist.model'
import { generateController } from '../modules/generateController'

export const playlistController = generateController<IPlaylistModel>(Playlist)
