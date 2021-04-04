# GraphQL with Express

The simplest way to run a GraphQL API server is to use Express, 
a popular web application framework for Node.js

https://graphql.org/graphql-js/running-an-express-graphql-server/

    npm i
    npm start
    http://localhost:4000/graphql


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


## Testing on Terminal

    curl -X POST \
    -H "Content-Type: application/json" \
    -d '{"query": "{ hello }"}' \
    http://localhost:4000/graphql

Result

    {"data":{"hello":"Hello world!"}}


## Client

  fetch('/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({query: "{ hello }"})
  })
    .then(r => r.json())
    .then(data => console.log('data returned:', data));


### Next

https://www.apollographql.com/docs/apollo-server/v1/example/


