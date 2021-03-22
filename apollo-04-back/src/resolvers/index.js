const { items } = require('../models/')

const resolvers = {
  Query: {
    items(_, args) {
      return items
    }
  },
  Mutation: {
    saveItem(_, args) {
      const item = args.item
      item.id = Math.floor(Math.random() * 1000)
      items.push(item)
      return item
    },
    deleteItem(_, args) {
      const id = args.id
      const item = items.find(item => item.id === id)
      if (!item) {
        return false
      }
      items.splice(items.indexOf(item), 1)
      return true
    }
  }
}

module.exports = resolvers