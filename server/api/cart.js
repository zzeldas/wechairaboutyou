const router = require('express').Router()
const {Order, OrderProduct, Product} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  //FIXME -user route checks if person is logged in
  try {
    const cart = await Order.findAll({
      include: [{model: Product}]
    })

    if (cart.length === 0) {
      res.json('Your cart is empty')
    } else {
      res.json(cart)
    }
  } catch (err) {
    console.error(err)
    next(err)
  }
})

module.exports = router
