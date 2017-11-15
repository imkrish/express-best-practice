import { Song, ISongModel, ISong } from './song.model'
import { generateApiSpec } from '../../../test/generateApiSpec'

const newSong: ISong = {
    title: 'perfect',
    url: 'youtube',
    album: 'love',
    artist: 'Ed sheeran',
    rating: 5,
    favourite: true,
}

generateApiSpec<ISongModel, ISong>(Song, 'song', newSong)
