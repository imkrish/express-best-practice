import * as mongoose from 'mongoose'
import { appConfig } from '../config/app.config'

(mongoose as any).Promise = global.Promise

export const removeModel = (modelName: string) => {
  const model = mongoose.model(modelName)
  return new Promise((resolve, reject) => {
    if (!model) {
      return resolve()
    }
    model.remove((err: Error) => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}

export const dropDb = () => {
  return mongoose.connect(appConfig.db.url, {
    useMongoClient: true,
  })
    .then(() => Promise.all(mongoose.modelNames().map(removeModel)))
}
