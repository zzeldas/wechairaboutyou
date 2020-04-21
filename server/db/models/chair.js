const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Chair = db.define('chair', {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	description: {
		type: Sequelize.TEXT,
		defaultValue: 'Chair description will come soon'
	},
	category: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	imageUrl: {
		type: Sequelize.TEXT,
		defaultValue: 'http://placehold.it/400x600'
	},
	price: {
		type: Sequelize.DECIMAL(10, 2),
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	size: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	color: {
		type: Sequelize.STRING,
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
	isActive: {
		type: Sequelize.BOOLEAN,
		defaultValue: true
	}
})

module.exports = Chair;