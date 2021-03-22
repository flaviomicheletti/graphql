const server = require('./src/')

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});