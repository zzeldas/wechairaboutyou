const Sequelize = require('sequelize')
const Product = require('./product')
const db = require('../db')

const OrderProduct = db.define('orderproduct', {
  unitPrice: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  total: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
})

const updateOrderProductTotal = async op => {
  // console.log("QQQQ", op)
  let product = await Product.findByPk(op.productId)
  // console.log("BBB", x)
  op.unitPrice = product.price
  op.total = op.quantity * op.unitPrice
  console.log('TOTAL', op.total)
}

OrderProduct.beforeBulkCreate(async (orderproducts, options) => {
  for (const op of orderproducts) {
    await updateOrderProductTotal(op)
  }
})
//READ ME TOMORROW
//TODO RECALCULATE TOTAL WHEN QUANITY IS CHANGED
//https://sequelize.org/master/manual/hooks.html grabs hooks from here

OrderProduct.beforeCreate(async op => {
  await updateOrderProductTotal(op)
})

// FIXME: If the quanity is updated, the total will not update. NEED TO FIX

module.exports = OrderProduct
