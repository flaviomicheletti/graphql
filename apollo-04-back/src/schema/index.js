const { gql } = require('apollo-server')

const typeDefs = gql`
  type Item {
    id: Int
    type: String
    description: String
  }

  type Query {
    items (type: String): [Item]
  }

  input ItemInput {
    type: String
    description: String
  }

  type Mutation {
    saveItem (item: ItemInput): Item
    deleteItem (id: Int): Boolean
  }
`;

module.exports = typeDefs