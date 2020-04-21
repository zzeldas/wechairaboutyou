const Sequelize = require('sequelize')
const db = require('../db')

const OrderProduct = db.define('orderproduct', {
  price: {
    type: Sequelize.DECIMAL(10, 2),
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
