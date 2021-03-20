const query = `
  query {
    books {
      title
      author
    }
  }
`;

const url = "http://localhost:4000/";

const opts = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query })
};

fetch(url, opts)
  .then(res => res.json())
  .then(console.log)
  .catch(console.error);