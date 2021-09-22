# Apollo GraphQL Schema basics

Baseado no exemplo anterior eu tentei me aproximar do repo abaixo:

- https://github.com/Umoren/graphql-auth.git


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


## Postman

![print-postman](https://user-images.githubusercontent.com/1257048/134265790-9e157a61-7173-4139-b646-22e55b940e55.png)