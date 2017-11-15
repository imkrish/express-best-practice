import * as mongoose from 'mongoose'

export interface ISong {
    title: string
    url: string
    album: string
    artist: string
    rating: number
    favourite: boolean
}

export interface ISongModel extends ISong, mongoose.Document {}

const songSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Song must have a title'],
        unique: [true, 'Song title must be uniqued'],
    },
    url: {
        type: String,
        unique: true,
        required: [true, 'Song must have a url'],
    },
    album: {
        type: String,
    },
    artist: {
        type: String,
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        default: 0,
    },
    favourite: {
        type: Boolean,
        default: false,
    },
})

export const Song = mongoose.model<ISongModel>('song', songSchema)
