import * as mongoose from 'mongoose'

export interface IPlaylist {
    title: string
    songs: string[]
    favourite: boolean
}

export interface IPlaylistModel extends IPlaylist, mongoose.Document {}

const playlistSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Playlist must have title'],
    },

    songs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'song',
    }],

    favourite: {
        type: Boolean,
        required: true,
        default: false,
    },
})

export const Playlist = mongoose.model<IPlaylistModel>('Playlist', playlistSchema)
