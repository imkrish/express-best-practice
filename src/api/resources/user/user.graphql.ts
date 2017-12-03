import {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInputObjectType, GraphQLNonNull} from 'graphql'

const User = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        username: {
            type: new GraphQLNonNull(GraphQLString)
        },
        createdAt: {
            type: new GraphQLNonNull(GraphQLString)
        },
        updatedAt: {
            type: new GraphQLNonNull(GraphQLString)
        },
    },
})

const UpdatedUser = new GraphQLInputObjectType({
    name: 'Updated User',
    fields: {
        username: {
            type: new GraphQLNonNull(GraphQLString)
        },
    },
})
