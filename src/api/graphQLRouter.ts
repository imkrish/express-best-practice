import { graphqlExpress } from 'apollo-server-express'
import { GraphQLSchema, GraphQLObjectType } from 'graphql'
import { UserType } from './resources/user/user.graphql'

const rootType = new GraphQLObjectType({
    name: 'RootType',
    fields: {
        user: { type: UserType },
    },
})

const rootSchema = new GraphQLSchema({
    query: rootType,
})

export const graphQLRouter = graphqlExpress((req) => ({
    schema: rootSchema,
    context: {
        req,
        user: req.user,
    },
}))
