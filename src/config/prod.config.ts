import { IAppConfig } from './IAppConfig'

export const prodConfig: IAppConfig = {
    logging: false,

    port: 4004,

    db: {
        url: 'mongodb://localhost/jams',
    },

    secrets: {
        jwtSecret: process.env.JWT_SECRET || 'abcdefghijklmnopqrst',
    },

    expireTime: '1d',

    disableAuth: false,
}
