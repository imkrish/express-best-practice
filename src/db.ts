import * as mongoose from 'mongoose'
import { appConfig } from './config/appConfig'

(mongoose as any).Promise = global.Promise
export const connectToMongoDB = () =>
    mongoose.connect(
        appConfig.mongodbUri,
        { useMongoClient: true },
        (err) => {
            if (err) {
                console.log(err.message)
            }
        },
    )
    .then(() => console.info(`Connected to mongo db uri: ${appConfig.mongodbUri} successfully.`))
