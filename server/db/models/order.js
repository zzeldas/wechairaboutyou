const Sequelize = require('sequelize')
const OrderProduct = require('./orderproduct')
const db = require('../db')

const Order = db.define('order', {
  status: {
    type: Sequelize.ENUM({
      values: ['pending', 'complete']
    }),
    allowNull: false,
    defaultValue: 'pending'
  },
  total: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
})

const updateOrderTotal = async o => {
  let orderproducts = await OrderProduct.findAll({
    where: {
      orderId: o.id
    }
  })
  console.log('OP', orderproducts)
}
module.exports = Order
