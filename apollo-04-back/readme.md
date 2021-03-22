# Apollo Graphql Mutation (first)

Primeiro exemplo de __mutation__ baseado no seguinte repo abaixo:

- https://github.com/carvalhoviniciusluiz/graphql-learn-apollo-server


## queries

    {
      prefixes: items(type: "prefix") {
        id
        type
        description
      }
      sufixes: items(type: "sufix") {
        description
      }
    }

    mutation ($item: ItemInput) {
      newPrefix: saveItem (item: $item) {
        id
        type
        description
      }
    }

## TODO

Fazer (testar) o mutation.

