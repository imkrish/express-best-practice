import { Request, Response } from 'express'

export const userController = {
    getAll: (req: Request, res: Response) => {
        console.log(req, res)
        const data = { hello: 'world' }
        res.json(data)
    },
    createOne: (req: Request, res: Response) => {
        console.log(req, res)
    },
    getOne: (req: Request, res: Response) => {
        console.log(req, res)
    },
    updateOne: (req: Request, res: Response) => {
        console.log(req, res)
    },
    deleteOne: (req: Request, res: Response) => {
        console.log(req, res)
    },
    findById: (req: Request, res: Response) => {
        console.log(req, res)
    },
}
