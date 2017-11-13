import { Request, Response, NextFunction } from 'express'
import { Model, Document } from 'mongoose'
import * as R from 'ramda'

const controllers = {
    createOne<T extends Document>(model: Model<T>, body: T) {
        return model.create(body)
    },

    updateOne<T>(docToUpdate: Document, update: T) {
        R.merge(docToUpdate, update)
        return docToUpdate.save()
    },

    deleteOne(docToDelete: Document) {
        return docToDelete.remove()
    },

    getOne(docToGet: Document) {
        return Promise.resolve(docToGet)
    },

    getAll<T extends Document>(model: Model<T>) {
        return model.find({})
    },

    findById<T extends Document>(model: Model<T>, id: string) {
        return model.findById(id)
    },
}

const createOne = <T extends Document>(model: Model<T>) => (req: Request, res: Response, next: NextFunction) => {
    return controllers.createOne(model, req.body)
        .then((doc) => res.status(201).json(doc))
        .catch((error) => next(error))
}

const updateOne = <T extends Document>(_model: Model<T>) => async (req: Request, res: Response, next: NextFunction) => {
    const docToUpdate = (req as any).docFromId
    const update = req.body

    return controllers.updateOne(docToUpdate, update)
        .then((doc) => res.status(201).json(doc))
        .catch((error) => next(error))
}

export const deleteOne = <T extends Document>(_model: Model<T>) =>
    (req: Request, res: Response, next: NextFunction) => {
        return controllers.deleteOne((req as any).docFromId)
            .then((doc) => res.status(201).json(doc))
            .catch((error) => next(error))
    }

export const getOne = <T extends Document>(_model: Model<T>) => (req: Request, res: Response, next: NextFunction) => {
    return controllers.getOne((req as any).docFromId)
        .then((doc) => res.status(200).json(doc))
        .catch((error) => next(error))
  }

export const getAll = <T extends Document>(model: Model<T>) => (_req: Request, res: Response, next: NextFunction) => {
    return controllers.getAll(model)
        .then((docs) => res.json(docs))
        .catch((error) => next(error))
}

export const findById = <T extends Document>(model: Model<T>) =>
    (req: Request, _res: Response, next: NextFunction, id: string) => {
        return controllers.findById(model, id)
            .then((doc) => {
                if (!doc) {
                    next(new Error('Not Found Error'))
                } else {
                    (req as any).docFromId = doc
                    next()
                }
            })
            .catch((error) => {
                next(error)
            })
    }

export const generateController = <T extends Document>(model: Model<T>, overrides = {}) => {
    const defaults = {
        findById: findById<T>(model),
        getAll: getAll<T>(model),
        getOne: getOne<T>(model),
        deleteOne: deleteOne<T>(model),
        updateOne: updateOne<T>(model),
        createOne: createOne<T>(model),
    }

    return {...defaults, ...overrides}
}
