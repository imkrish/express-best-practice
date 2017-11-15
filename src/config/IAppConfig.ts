interface IDBConfig {
    url: string
}

interface ISecretsConfig {
    jwtSecret: string
}

export interface IAppConfig {
    logging: boolean
    port: number
    db: IDBConfig
    secrets: ISecretsConfig
    expireTime: string
    disableAuth: boolean
}
