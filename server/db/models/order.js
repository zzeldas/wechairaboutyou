const Sequelize = require('sequelize')
const OrderProduct = require('./orderproduct')
const db = require('../db')

const Order = db.define('order', {})

module.exports = Order
