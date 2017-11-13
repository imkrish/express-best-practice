export interface IController {
    getAll: (req: Request, res: Response) => void
    createOne: (req: Request, res: Response) => void
    getOne: (req: Request, res: Response) => void
    updateOne: (req: Request, res: Response) => void
    deleteOne: (req: Request, res: Response) => void
    findById: (req: Request, res: Response) => void
}
