/* eslint-disable @typescript-eslint/no-explicit-any */
import gql from 'graphql-tag'

import { Movie } from '../types'

import testServer from './testServer'
import { moviesSample } from './moviesSample'
import Service from '../service'

describe('resolvers', () => {
  it('fetches all movies', async () => {
    // We cannot stub a protected method,
    // so we declare the type as 'any'
    const service: any = new Service()

    // We create a stub because we don't
    // want to call an external service.
    // We also want to use it for testing.
    const getStub = (): Promise<Movie[]> =>
      Promise.resolve(moviesSample())
    service.get = jest.fn(getStub)

    // We use a test server instead of the actual one.
    const { query } = testServer(() => ({ service }))

    const GET_MOVIES = gql`
      query GetMovies {
        movies {
          id
          title
        }
      }
    `

    // A query is made as if it was a real service.
    const res = await query({ query: GET_MOVIES })

    // We ensure that the errors are undefined.
    // This helps us to see what goes wrong.
    expect(res.errors).toBe(undefined)

    // We check to see if the `movies`
    // endpoint is called properly.
    expect(service.get).toHaveBeenCalledWith('movies')

    // We check to see if we have
    // all the movies in the sample.
    expect(res?.data?.movies).toEqual(moviesSample())
  })

  it('creates a movie', async () => {
    const service: any = new Service()

    const newMovie = {
      title: 'Manos: The Hands of Fate',
    }

    const updatedMovies = [
      ...moviesSample(),
      { id: 'an id', ...newMovie },
    ]
    service.post = jest.fn(() =>
      Promise.resolve(updatedMovies)
    )

    const { mutate } = testServer(() => ({ service }))

    const CREATE_MOVIE = gql`
      mutation CreateMovie($newMovie: NewMovie!) {
        createMovie(newMovie: $newMovie) {
          movies {
            id
            title
          }
        }
      }
    `

    const res = await mutate({
      mutation: CREATE_MOVIE,
      variables: { newMovie },
    })

    // This helps us see the errors if there are any
    expect(res.errors).toBe(undefined)
    expect(service.post).toHaveBeenCalledWith(
      'movies',
      newMovie
    )
    expect(res?.data?.createMovie).toEqual({
      movies: updatedMovies,
    })
  })
})
