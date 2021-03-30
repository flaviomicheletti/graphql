import { Context,  NewMovieInput,  CreateMovieResponse,  Movie } from './types'
import { IResolvers } from 'apollo-server'

const resolvers: IResolvers = {
  Query: {
    movies: ( _: unknown, __: unknown, { dataSources }: Context ): Promise<Movie[]> =>
      dataSources.service.getMovies(),
  },
  Mutation: {
    createMovie: ( _: unknown, { newMovie }: NewMovieInput, { dataSources }: Context ): CreateMovieResponse => {
      const movies = dataSources.service.createMovie(newMovie)
      return { movies }
    },
  },
}

export default resolvers
