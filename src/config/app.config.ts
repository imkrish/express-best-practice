import { IAppConfig } from './IAppConfig'
import { devConfig } from './dev.config'
import { testConfig } from './test.config'
import { prodConfig } from './prod.config'

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const env = process.env.NODE_ENV

export let appConfig: IAppConfig

switch (env) {
    case 'development':
    case 'dev':
        appConfig = devConfig
        break
    case 'testing':
    case 'test':
        appConfig = testConfig
        break
    case 'prod':
    case 'production':
        appConfig = prodConfig
        break
    default:
        appConfig = devConfig
}
