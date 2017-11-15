import { IAppConfig } from './IAppConfig'

export const devConfig: IAppConfig = {
    logging: false,

    port: 3003,

    db: {
        url: 'mongodb://localhost/jams',
    },

    secrets: {
        jwtSecret: process.env.JWT_SECRET || 'abcdefghijklmnopqrst',
    },

    expireTime: '1d',

    disableAuth: false,
}
