import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLNonNull,
    GraphQLString,
    GraphQLBoolean,
    GraphQLList,
    GraphQLInputObjectType,
} from 'graphql'

export const PlaylistType = new GraphQLObjectType({
    name: 'PlaylistType',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID),
        },
        title: {
            type: new GraphQLNonNull(GraphQLString),
        },
        songs: {
            type: new GraphQLNonNull(new GraphQLList((GraphQLString))),
        },
        favorite: {
            type: new GraphQLNonNull(GraphQLBoolean),
        },
    },
})

export const UpdatedPlaylistInputType = new GraphQLInputObjectType({
    name: 'UpdatedPlaylistInputType',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID),
        },
        title: {
            type: GraphQLString,
        },
        songs: {
            type: new GraphQLList(GraphQLString),
        },
        favorite: {
            type: GraphQLBoolean,
        },
    },
})
