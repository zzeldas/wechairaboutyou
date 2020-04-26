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
// api/carts/ --- Change order status from "pending"  to "completed"

router.put('/cart/:orderId', async (req, res, next) => {
  try {
    let order = await Order.findByPk(req.params.orderId)

    if (order !== null) {
      const updateOrder = await order.update({status: 'completed'})
      res.json(updateOrder)
    }
  } catch (error) {
    next(error)
  }
})

//api/carts/history
router.get('/history', async (req, res, next) => {
  try {
    const pastOrders = await Order.findAll({
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
//not tested
router.post('/cart', async (req, res, next) => {
  try {
    const {product, orderInfo} = req.body
    const addedProduct = await OrderProduct.create({
      unitPrice: product.price * 100,
      quantity: 1,
      orderId: orderInfo.id,
      productId: product.id
    })
    res.json(orderInfo)
  } catch (err) {
    next(err)
  }
})

router.put('/cart', async (req, res, next) => {
  try {
    const findProduct = await OrderProduct.findOne({
      where: {productId: req.body.product.id}
    })
    findProduct.quantity++
    await findProduct.save()
    const updatedOrder = await Order.findAll({
      where: {
        userId: req.user.id,
        status: 'pending'
      },
      include: [{model: OrderProduct}]
    })
    res.json(updatedOrder[0].dataValues)
  } catch (err) {
    next(err)
  }
})

router.put('/cart/:id/increase', async (req, res, next) => {
  try {
    const id = req.params.id
    const findItem = await OrderProduct.findOne({where: {productId: id}})
    findItem.quantity++
    await findItem.save()
    res.json(findItem)
  } catch (err) {
    next(err)
  }
})

router.put('/cart/:id/decrease', async (req, res, next) => {
  try {
    const id = req.params.id
    const findItem = await OrderProduct.findOne({where: {productId: id}})
    findItem.quantity--
    await findItem.save()
    res.json(findItem)
  } catch (err) {
    next(err)
  }
})

router.delete('/cart/:itemId', async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {
        userId: req.user.id,
        status: 'pending'
      },
      include: [{model: OrderProduct}]
    })
    //i have propduct id 9 from thunk, i have orderproduct id 6
    let orderproducts = order.dataValues.orderproducts
    console.log(orderproducts)
    console.log('order id', order.dataValues.id)
    console.log('req.params.id', req.params.itemId)

    const deletedItem = await OrderProduct.destroy({
      where: {
        orderId: order.dataValues.id,
        productId: req.params.itemId
      }
    })

    res.json(deletedItem)
  } catch (err) {
    next(err)
  }
})

router.get('/cart/:id', async (req, res, next) => {
  try {
    const findAllPendingCart = await Order.findAll({
      where: {
        userId: req.user.id,
        status: 'pending'
      },
      include: [{model: OrderProduct}]
    })
  } catch (err) {
    next(err)
  }
})

module.exports = router
