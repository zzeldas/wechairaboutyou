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
    const order = await Order.findOrCreate({
      where: {
        userId: req.user.id,
        status: 'pending'
      },
      include: [{model: OrderProduct}]
    })
    // console.log('ORDER-- ORDER PRODUCT', order[0].dataValues.orderproducts)
    // console.log('REQ.BODY', req.body)
    // const findProduct = await OrderProduct.findByPk(req.body.product.id)
    // console.log('FIND PRODUCT BEFORE', findProduct);
    let orderproductsList = order[0].dataValues.orderproducts
    let orderproductId = orderproductsList.map(
      eachProduct => eachProduct.productId
    )

    if (orderproductId.includes(req.body.product.id) === false) {
      const addedProduct = await OrderProduct.create({
        unitPrice: req.body.product.price * 100,
        quantity: req.body.quantityToAdd, //FIXME
        orderId: order[0].dataValues.id,
        productId: req.body.product.id
      })
    }
    res.json(order)
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
// router.put('/cart', async (req, res, next) => {
//   try {
//     // console.log('ORDER-- ORDER PRODUCT', order[0].dataValues.orderproducts)
//     console.log('REQ.BODY', req.body)
//     const findProduct = await OrderProduct.findByPk(req.body.product.id)
//     console.log('FIND PRODUCT BEFORE', findProduct);
//     if (findProduct) {
//       findProduct.quantity++;
//       console.log('FIND PRODUCT AFTER', findProduct);
//     }
//     res.json(findProduct)
//   } catch (err) {
//     next(err)
//   }
// })

module.exports = router
