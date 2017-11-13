import { Request, Response } from 'express'

export class UserController {
    public static getAll = (req: Request, res: Response) => {
        console.log(req, res)
        const data = { hello: 'world' }
        res.json(data)
    }

    public static post = (req: Request, res: Response) => {
        console.log(req, res)
    }

    public static getOne = (req: Request, res: Response) => {
        console.log(req, res)
    }

    public static put = (req: Request, res: Response) => {
        console.log(req, res)
    }

    public static delete = (req: Request, res: Response) => {
        console.log(req, res)
    }
}
