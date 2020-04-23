const router = require('express').Router()
const {Order, OrderProduct, Product, User} = require('../db/models')
module.exports = router

//logged in user cart
router.get('/', async (req, res, next) => {
  //FIXME -user route checks if person is logged in

  //Check if there is a pending cart in orders
  //if pending cart, it goes to cart id
  //else create pending order

  try {
    //----
    let cart = await Order.findAll({
      where: {
        status: 'pending'
      },
      include: OrderProduct
    })

    if (!cart) {
      let newCart = Order.create()
      res.json(newCart)
    } else {
      res.json(cart)
    }
  } catch (err) {
    console.error(err)
    next(err)
  }
})

module.exports = router
