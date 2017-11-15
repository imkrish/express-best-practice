import { Application } from 'express'
import * as morgan from 'morgan'
import { json, urlencoded } from 'body-parser'

export const setupMiddleware = (app: Application) => {
    app.use(morgan('dev'))
    app.use(json())
    app.use(urlencoded({ extended: true }))
}
