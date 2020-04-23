const Sequelize = require('sequelize')
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
  }
})

OrderProduct.beforeCreate(op => {
  op.unitPrice = op.unitPrice * 100
  op.total = op.quantity * op.unitPrice
  console.log('TOTAL', op.total)
})

module.exports = OrderProduct
