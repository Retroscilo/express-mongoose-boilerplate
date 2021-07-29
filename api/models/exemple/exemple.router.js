const { Router } = require('express')
const controllers = require('./exemple.controllers')

const router = Router()

// /api/exemple
router
  .route('/')
  .get(controllers.getOne)
  .post(controllers.createOne)

// /api/exemple/:id
router
  .route('/:id')
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.removeOne)

module.exports = router
