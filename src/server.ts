import * as express from 'express'
import { apiRouter } from './api/api.router'
import { connectToMongoDB } from './db'
import { authProtectMiddlewares, signinMiddlewares } from './api/modules/auth'
import { setupMiddleware } from './middlewares/setupMiddleware'
import { globalErrorHandling } from './middlewares/globalErrorHandling'
import { graphiqlExpress } from 'apollo-server-express'
import { graphQLRouter } from './api/graphQLRouter'

// export the app for testing
export const app = express()

// connect to mongo db
connectToMongoDB()

// setup the app midleware
setupMiddleware(app)

// setup the api
app.use('/signin', signinMiddlewares)
app.use('/api', authProtectMiddlewares, apiRouter)
app.use('/graphql', graphQLRouter)
app.get('/docs', graphiqlExpress({ endpointURL: '/graphql' }))

// catch all
app.all('*', (_req, res) => {
    res.json({message: 'catch all *'})
})

// setup global error handling
app.use(globalErrorHandling)
