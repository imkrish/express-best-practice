import { Playlist, IPlaylistModel, IPlaylist } from './playlist.model'
import { generateApiSpec } from '../../../test/generateApiSpec'

const newPlayList: IPlaylist = {title: 'study jams', favourite: true, songs: []}

generateApiSpec<IPlaylistModel, IPlaylist>(Playlist, 'playlist', newPlayList)
