import * as mongoose from 'mongoose'

export interface IUser {
    username: string
    passwordHash: string
}

export interface IUserModel extends IUser, mongoose.Document {}

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
        },
        passwordHash: {
            type: String,
            required: true,
        },
    },
    { timestamps: true },
)

export const User = mongoose.model<IUserModel>('user', userSchema)
