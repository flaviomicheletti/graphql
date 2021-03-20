# Graphql

The simplest way to run a GraphQL API server is to use Express, 
a popular web application framework for Node.js

https://graphql.org/graphql-js/running-an-express-graphql-server/

    npm i
    npm start
    http://localhost:4000/


Query

    {
      hello
    }

Result

    {
      "data": {
        "hello": "Hello world!"
      }
    }


## Terminal

    curl -X POST \
    -H "Content-Type: application/json" \
    -d '{"query": "{ hello }"}' \
    http://localhost:4000/graphql

Result

    {"data":{"hello":"Hello world!"}}