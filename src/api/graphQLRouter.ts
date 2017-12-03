import { graphqlExpress } from 'apollo-server-express'
import { GraphQLSchema, GraphQLObjectType, GraphQLNonNull } from 'graphql'
import { UserType } from './resources/user/user.graphql'
import { SongType } from './resources/song/song.graphql'
import { PlaylistType } from './resources/playlist/playlist.graphql'

const rootType = new GraphQLObjectType({
    name: 'RootType',
    fields: {
        getMe: { type: new GraphQLNonNull(UserType) },
        song: { type: new GraphQLNonNull(SongType) },
        playlist: { type: new GraphQLNonNull(PlaylistType) },

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
