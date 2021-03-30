import { ApolloServer } from 'apollo-server'
import resolvers from './movies/resolvers'
import typeDefs from './movies/typeDefs'
import dataSources from './movies/dataSources'

const server = new ApolloServer({ typeDefs, resolvers, dataSources })

server.listen().then(({ url }) => {
  // eslint-disable-next-line no-console
  console.log(`Server ready at ${url}`)
})
