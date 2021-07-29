const { crudControllers } = require('@library/crud')
const { Item } = require('./exemple.model')

module.exports = crudControllers(Item)
