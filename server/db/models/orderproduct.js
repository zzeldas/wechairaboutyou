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
  op.total = op.quantity * op.unitPrice
}

OrderProduct.beforeBulkCreate(async (orderproducts, options) => {
  for (const op of orderproducts) {
    await updateOrderProductTotal(op)
  }
})
//READ ME TOMORROW
//TODO RECALCULATE TOTAL WHEN QUANITY IS CHANGED
//https://sequelize.org/master/manual/hooks.html grabs hooks from here

OrderProduct.beforeCreate(op => {
  op.total = op.quantity * op.unitPrice
})

// FIXME: If the quanity is updated, the total will not update. NEED TO FIX

module.exports = OrderProduct
