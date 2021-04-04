// Import Apollo Azure integration library
const { ApolloServer, gql } = require('apollo-server-azure-functions');

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

//
// Define your data set
//
const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({ typeDefs, resolvers, playground: false });
exports.graphqlHandler = server.createHandler();