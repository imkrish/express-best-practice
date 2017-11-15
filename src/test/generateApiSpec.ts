import * as chai from 'chai'
import { expect } from 'chai'
import { dropDb } from './helpers'
import { app } from '../server'
import { User } from '../api/resources/user/user.model'
import { signToken } from '../api/modules/auth'
import { Model, Document } from 'mongoose'
const chaiHttp = require('chai-http')

chai.use(chaiHttp)

export const generateApiSpec = <T extends Document, U>(_model: Model<T>, resourceName: string, _newResource: U) => {
  describe(`/${resourceName}`, () => {
    let jwt: string

    beforeEach(async () => {
      await dropDb()
      const user = await User.create({username: 'stu1', passwordHash: '123'})
      jwt = signToken(user.id)
    })

    afterEach(async () => {
      await dropDb()
    })

    describe(`GET /${resourceName}`, () => {
      it(`should get all ${resourceName}`, async () => {
        const result = await chai.request(app)
          .get(`/api/${resourceName}`)
          .set('Authorization', `Bearer ${jwt}`)

        expect(result).to.have.status(200)
        expect(result).to.be.json
      })
    })

    describe(`POST /${resourceName}`, () => {
      it(`should create a ${resourceName}`, async () => {
        const result = await chai.request(app)
          .post(`/api/${resourceName}`)
          .set('Authorization', `Bearer ${jwt}`)
          .send(_newResource)

        expect(result).to.have.status(201)
        expect(result).to.be.json
      })
    })
  })
}
