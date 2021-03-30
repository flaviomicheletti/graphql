import Service from './service'

export interface Movie {
  id: string
  title: string
}

export interface NewMovie {
  title: string
}

export interface NewMovieInput {
  newMovie: NewMovie
}

export interface CreateMovieResponse {
  movies: Promise<Movie[]>
}

export interface DataSources {
  service: Service
}

export interface Context {
  dataSources: DataSources
}
