const router = require('express').Router()
const {Product} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll({
      order: [['id', 'ASC']]
    })

    res.status(200).json(products)
  } catch (err) {
    next(err)
  }
})

// Find a product by its id :: /api/products/:productId

router.get('/:productId', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.productId)
    res.status(200).json(product)
  } catch (err) {
    console.error('Error ', err)
    next(err)
  }
})
