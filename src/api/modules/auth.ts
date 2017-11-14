import * as jwt from 'jsonwebtoken'
import * as expressJwt from 'express-jwt'
import { appConfig } from '../../config/appConfig'
import { Request, Response, NextFunction } from 'express'
import { User } from '../user/user.model'

const ACCESS_TOKEN = 'access_token'

// this will call next if token is valid and send error
// if its not. It will attached the decoded token to req.user
const checkToken = expressJwt({ secret: appConfig.secrets.jwtSecret })

export const signin = (req: Request, res: Response, _next: NextFunction) => {
    const token = signToken(req.user.id)
    res.json({ token })
}

export const decodeToken = (req: Request, res: Response, next: NextFunction) => {
    if (req.query && req.query.hasOwnProperty(ACCESS_TOKEN)) {
        req.headers.authorization = 'Bearer ' + req.query[ACCESS_TOKEN]
    }

    checkToken(req, res, next)
}

export const getFreshUser = (req: Request, res: Response, next: NextFunction) => {
    User.findById(req.user.id)
        .then((user) => {
            if (!user) {
                res.status(401).send('Unauthorized')
                return
            }

            req.user = user
            next()
        })
        .catch((err: Error) => next(err))
}

export const verifyUser = (req: Request, res: Response, next: NextFunction) => {
    const username = req.body.username
    const password = req.body.password

    if (!username || !password) {
        res.status(400).send('You need a username ans password')
        return
    }

    User.findOne({ username })
        .then((user) => {
            if (!user) {
                res.status(401).send('No user with the given username')
                return
            }

            if (!user.authenticate(password)) {
                res.status(401).send('Wrong password')
                return
            }

            req.user = user
            next()
        })
        .catch((err: Error) => next(err))
}

export const signToken = (id: string) => jwt.sign(
    { id },
    appConfig.secrets.jwtSecret,
    { expiresIn: appConfig.expireTime },
)

export const authProtectMiddlewares = appConfig.disableAuth ? [] : [decodeToken, getFreshUser]