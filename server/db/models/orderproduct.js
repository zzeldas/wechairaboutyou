const Sequelize = require('sequelize')
const db = require('../db')

const OrderProduct = db.define('order_product', {
  price: {
    type: Sequelize.DECIMAL(10, 2), // update type here
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

module.exports = OrderProduct
