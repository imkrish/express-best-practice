import * as mongoose from 'mongoose'

(mongoose as any).Promise = global.Promise
export const connectToMongoDB = () =>
    mongoose.connect(
        'mongodb://localhost/jams',
        { useMongoClient: true },
        (err) => {
            if (err) {
                console.log(err.message)
            }
        })
