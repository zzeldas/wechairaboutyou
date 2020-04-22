const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  status: {
    // reconsider boolean and then rename field to something like "is..."
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isIn: [['pending', 'processed', 'open', 'shipped']]
    }
  }
})

module.exports = Order
