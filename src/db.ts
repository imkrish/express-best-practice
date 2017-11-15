import * as mongoose from 'mongoose'
import { appConfig } from './config/app.config'

(mongoose as any).Promise = global.Promise
export const connectToMongoDB = () =>
    mongoose.connect(
        appConfig.db.url,
        { useMongoClient: true },
        (err) => {
            if (err) {
                console.log(err.message)
            }
        },
    )
    .then(() => console.info(`Connected to mongo db uri: ${appConfig.db.url} successfully.`))
