import { IAppConfig } from './IAppConfig'
import { devConfig } from './dev.config'
import { testConfig } from './test.config'
import { prodConfig } from './prod.config'
import { Modes } from './Modes'

// set mode here
const mode: Modes = Modes.dev

process.env.NODE_ENV = mode

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
