const { ApolloServer, gql } = require('apollo-server');

//
// Define your GraphQL schema
//
const typeDefs = gql`

  type Book {
    title: String
    author: Author
  }

  type Author {
    name: String
    books: [Book]
  }
  
  type Query {
    books: [Book]
    authors: [Author]
  }
`;

//
// Define your data set
//
const books = [
  {
    title: 'The Awakening',
    author: { name: 'Kate Chopin' },
  },
  {
    title: 'City of Glass',
    author: { name: 'Paul Auster' },
  },
];

const authors = [
  { name: 'Kate Chopin' },
  { name: 'Paul Auster' },
];


//
// Define a resolver
//
const resolvers = {
  Query: {
    books: () => books,
    authors: () => authors
  },
};

//
// Create an instance of ApolloServer
//

// typeDefs:  your schemadefinition
// resolvers: your set of resolvers
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});