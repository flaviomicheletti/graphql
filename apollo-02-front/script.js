const url = "http://localhost:4000/";

// aux
const myFetch = (query) => {
  const opt = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query })
  };

  fetch(url, opt)
    .then(res => res.json())
    .then(console.log)
    .catch(console.error);
}

myFetch(`
query GetBooksAndAuthors {
  books {
    title
  }
  authors {
    name
  }
}
`)

myFetch(`
query GetBooks {
  books {
    title
    author {
      name
    }
  }
}
`)
