import { generateController } from '../modules/query'
import { IPlaylistModel, Playlist } from './playlist.model'

export const playlistController = generateController<IPlaylistModel>(Playlist)
