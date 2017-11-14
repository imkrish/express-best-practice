import { IPlaylistModel, Playlist } from './playlist.model'
import { generateController } from '../generateController'

export const playlistController = generateController<IPlaylistModel>(Playlist)
