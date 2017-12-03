import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLInputObjectType,
} from 'graphql'

export const SongType = new GraphQLObjectType({
    name: 'SongType',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID),
        },
        title: {
            type: new GraphQLNonNull(GraphQLString),
        },
        url: {
            type: new GraphQLNonNull(GraphQLString),
        },
        album: {
            type: GraphQLString,
        },
        artist: {
            type: GraphQLString,
        },
        rating: {
            type: new GraphQLNonNull(GraphQLInt),
        },
        favorite: {
            type: new GraphQLNonNull(GraphQLBoolean),
        },
    },
})

export const UpdatedSongInputType = new GraphQLInputObjectType({
    name: 'UpdatedSongInputType',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID),
        },
        title: {
            type: GraphQLString,
        },
        url: {
            type: GraphQLString,
        },
        album: {
            type: GraphQLString,
        },
        artist: {
            type: GraphQLString,
        },
        rating: {
            type: GraphQLInt,
        },
        favorite: {
            type: GraphQLBoolean,
        },
    },
})

export const NewSongType = new GraphQLInputObjectType({
    name: 'NewSongType',
    fields: {
        title: {
            type: new GraphQLNonNull(GraphQLString),
        },
        url: {
            type: new GraphQLNonNull(GraphQLString),
        },
        album: {
            type: GraphQLString,
        },
        artist: {
            type: GraphQLString,
        },
        rating: {
            type: GraphQLInt,
        },
        favorite: {
            type: GraphQLBoolean,
        },
    },
})
