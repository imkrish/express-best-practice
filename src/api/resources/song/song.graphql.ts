import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLInputObjectType,
} from 'graphql'

const Song = new GraphQLObjectType({
    name: 'Song',
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

const UpdatedSong = new GraphQLInputObjectType({
    name: 'Updated Song',
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

const NewSong = new GraphQLInputObjectType({
    name: 'New Song',
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
