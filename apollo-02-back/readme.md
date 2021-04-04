# Apollo GraphQL Schema basics

https://www.apollographql.com/docs/apollo-server/schema/schema/

## queries

    query GetBooksAndAuthors {
      books {
        title
      }

      authors {
        name
      }
    }

    query GetBooks {
      books {
        title
        author {
          name
        }
      }
    }


    