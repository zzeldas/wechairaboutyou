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
    next(err)
  }
})

//user adds item to cart
//url /:userId/cart
router.post('/', async (req, res, next) => {
  try {
    const addedProduct = await OrderProduct.create()
    //check for pending order
    let {orders} = await User.findByPk(req.params.userId, {
      include: [{model: Order}]
    })

    //if there is one pending order
    //look up pending order's id
    //assign addedProduct's orderId to the id of the pending order
    //if there is no pending order
    //let newCart = Order.create()
    //assign addedProduct's orderId to the if of the newCart
    //res.json(newCart)
  } catch (err) {
    next(err)
  }
})

module.exports = router
