//api/products/carts cart history all completed orders

const router = require('express').Router()
const {Order, OrderProduct} = require('../db/models')
const Category = require('../db/models/category')
const {isAdmin, isLoggedIn} = require('../middleware')

//api/carts/cart
router.get('/cart', async (req, res, next) => {
  try {
    const order = await Order.findOrCreate({
      where: {
        userId: req.user.id,
        status: 'pending'
      },
      include: [{model: OrderProduct}]
    })

    res.json(order)
  } catch (error) {
    next(error)
  }
})

//api/carts/history
router.get('/history', async (req, res, next) => {
  try {
    const pastOrders = await Order.findOne({
      where: {
        userId: req.user.id,
        status: 'completed'
      },
      include: [{model: OrderProduct}]
    })
    console.log(req.user.id)
    res.json(pastOrders)
  } catch (err) {
    next(err)
  }
})

//user adds item to cart
//api/carts/addToCart
router.post('/cart', async (req, res, next) => {
  try {
    const addedProduct = await OrderProduct.create()
    //check for pending order
    let {orders} = await User.findByPk(req.params.userId, {
      include: [{model: Order}]
    })
    // if there is one pending order
    // look up pending order's id
    // assign addedProduct's orderId to the id of the pending order
    // if there is no pending order
    let newCart = Order.create()
    // assign addedProduct's orderId to the if of the newCart
    res.json(newCart)
  } catch (err) {
    next(err)
  }
})

module.exports = router
