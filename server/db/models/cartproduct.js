const Sequelize = require('sequelize')
const db = require('../db')

const CartProduct = db.define('cartProduct', {
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
