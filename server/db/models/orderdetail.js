const Sequelize = require('sequelize')
const db = require('../db')

const OrderDetail = db.define('orderdetail', {
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
	},
})

module.exports = OrderDetail;