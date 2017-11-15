import { Request, Response, NextFunction } from 'express'

export const globalErrorHandling = (
    err: Error & { status: number},
    _req: Request,
    res: Response,
    _next: NextFunction,
) => {
    if (err) {
        console.error(err.message)
        res.status(500).send(err)
    }
}
