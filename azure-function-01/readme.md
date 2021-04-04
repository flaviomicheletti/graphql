# GraphQL AzureFunction

Baseado neste repo https://github.com/shamique/GraphQL-AzureFunction

E no exemplo https://github.com/flaviomicheletti/graphql/tree/master/apollo-01-back

Query

    {
        books {
            title
            author
        }
    }

Resultado

    {
        "data": {
            "books": [
                {
                    "title": "The Awakening",
                    "author": "Kate Chopin"
                },
                {
                    "title": "City of Glass",
                    "author": "Paul Auster"
                }
            ]
        }
    }