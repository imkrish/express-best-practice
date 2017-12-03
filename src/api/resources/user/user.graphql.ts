import {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInputObjectType, GraphQLNonNull} from 'graphql'

export const UserType = new GraphQLObjectType({
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

export const UpdatedUserInputType = new GraphQLInputObjectType({
    name: 'UpdatedUser',
    fields: {
        username: {
            type: new GraphQLNonNull(GraphQLString)
        },
    },
})
