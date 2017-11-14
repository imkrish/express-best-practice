export const appConfig = {
    env: process.env.NODE_ENV || 'development',

    logging: false,

    port: 3003,

    mongodbUri: 'mongodb://localhost/jams',

    secrets: {
        jwtSecret: process.env.JWT_SECRET,
    },
}
