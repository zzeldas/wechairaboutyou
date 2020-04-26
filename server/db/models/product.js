const Sequelize = require('sequelize')
const db = require('../db')
const Category = require('./category')

const Product = db.define(
  'product',
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    description: {
      type: Sequelize.TEXT,
      defaultValue: 'Product description will come soon'
    },
    imageUrl: {
      type: Sequelize.TEXT,
      defaultValue: 'http://placehold.it/400x600'
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
        notEmpty: true
      },
      // Please leave this getter dividing by one - it serves to convert this into a number when retrieving the rows in the api via sequelize, otherwise the routes were returning a string
      get() {
        return this.getDataValue('price') / 1
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
      defaultValue: false
    }
  },
  {
    defaultScope: {
      include: [{model: Category}]
    }
  }
)

// we are saving price as interger to avoid 1-rounding problems 2- the routes were returning string when saving price as decimal(10,2)
const isPriceInt = product => {
  product.price = product.price * 100
}

Product.beforeUpdate(isPriceInt)
Product.beforeCreate(isPriceInt)

module.exports = Product
