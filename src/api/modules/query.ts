import { Request, Response, NextFunction } from 'express'
import { Model, Document } from 'mongoose'
import * as R from 'ramda'

const controllers = {
    createOne(model: Model<any>, body: any) {
        return model.create(body)
    },

    updateOne(docToUpdate: Document, update: any) {
        R.merge(docToUpdate, update)
        return docToUpdate.save()
    },

    deleteOne(docToDelete: Document) {
        return docToDelete.remove()
    },

    getOne(docToGet: Document) {
        return Promise.resolve(docToGet)
    },

    getAll(model: Model<any>) {
        return model.find({})
    },

    findById(model: Model<any>, id: string) {
        return model.findById(id)
    },
}

const createOne = (model: Model<any>) => (req: Request, res: Response, next: NextFunction) => {
    return controllers.createOne(model, req.body)
        .then((doc) => res.status(201).json(doc))
        .catch((error) => next(error))
}

const updateOne = (_model: Model<any>) => async (req: Request, res: Response, next: NextFunction) => {
    const docToUpdate = (req as any).docFromId
    const update = req.body

    return controllers.updateOne(docToUpdate, update)
        .then((doc) => res.status(201).json(doc))
        .catch((error) => next(error))
}

export const deleteOne = (_model: Model<any>) => (req: Request, res: Response, next: NextFunction) => {
    return controllers.deleteOne((req as any).docFromId)
        .then((doc) => res.status(201).json(doc))
        .catch((error) => next(error))
}

export const getOne = (_model: Model<any>) => (req: Request, res: Response, next: NextFunction) => {
    return controllers.getOne((req as any).docFromId)
      .then((doc) => res.status(200).json(doc))
      .catch((error) => next(error))
  }

export const getAll = (model: Model<any>) => (_req: Request, res: Response, next: NextFunction) => {
    return controllers.getAll(model)
      .then((docs) => res.json(docs))
      .catch((error) => next(error))
  }

export const findById = (model: Model<any>) => (req: Request, _res: Response, next: NextFunction, id: string) => {
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

export const generateController = (model: Model<any>, overrides = {}) => {
    const defaults = {
        findById: findById(model),
        getAll: getAll(model),
        getOne: getOne(model),
        deleteOne: deleteOne(model),
        updateOne: updateOne(model),
        createOne: createOne(model),
    }

    return {...defaults, ...overrides}
}
