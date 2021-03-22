const { books, authors } = require('../models/')

const resolvers = {
	Query: {
		books: () => books,
		authors: () => authors
	}
}

module.exports = resolvers