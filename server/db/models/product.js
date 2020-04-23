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
      get() {
        return this.getDataValue('price') / 100
      },
      allowNull: false,
      validate: {
        min: 0,
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
      defaultValue: false
    }
  },
  {
    defaultScope: {
      include: [{model: Category}]
    }
  }
)

const isPriceInt = product => {
  product.price = product.price * 100
}
const isPriceDec = product => {
  product.price = product.price / 100
}

Product.beforeValidate(isPriceInt)
Product.afterValidate(isPriceDec)
Product.beforeCreate(isPriceInt)

module.exports = Product
