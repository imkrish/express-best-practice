import * as mongoose from 'mongoose'
import * as bcrypt from 'bcrypt'

export interface IUser {
    username: string
    passwordHash: string

    // methods
    authenticate: (plainTextPassword: string) => boolean
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

userSchema.methods = {
    authenticate(plainTextPassword: string) {
        return bcrypt.compareSync(plainTextPassword, this.password)
    },
    hashPassword(plainTextPassword: string) {
        if (!plainTextPassword) {
            throw new Error('Could not save user')
        }

        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(plainTextPassword, salt)
    },
}

export const User = mongoose.model<IUserModel>('user', userSchema)
