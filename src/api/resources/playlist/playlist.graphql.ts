import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLNonNull,
    GraphQLString,
    GraphQLBoolean,
    GraphQLList,
    GraphQLInputObjectType,
} from 'graphql'

const Playlist = new GraphQLObjectType({
    name: 'Playlist',
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

const UpdatedPlaylist = new GraphQLInputObjectType({
    name: 'Updated Playlist',
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
