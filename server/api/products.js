const router = require('express').Router()
const {Product} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll({
      order: [['id', 'ASC']]
    })

    res.json(products) // .status(200) redundant because it is the default status
  } catch (err) {
    console.error('Error ', err) // redundant (refer to line 89 "error handling endware" in /server/index.js)
    next(err)
  }
})

// Find a product by its id :: /api/products/:productId

router.get('/:productId', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.productId)
    res.json(product) // .status(200) redundant because it is the default status
  } catch (err) {
    console.error('Error ', err) // redundant
    next(err)
  }
})
