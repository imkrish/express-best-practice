import * as http from 'http'
import { app } from './server'
import { appConfig } from './config/appConfig'

// wrap with http server for hot module or web socket
const server = http.createServer(app)

// start listening
server.listen(appConfig.port, () => console.info(`Server is running on port: ${appConfig.port}`))
