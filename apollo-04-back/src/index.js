const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./schema')
const resolvers = require('./resolvers')

module.exports = new ApolloServer({ typeDefs, resolvers });