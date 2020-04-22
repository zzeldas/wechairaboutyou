const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('products', {
  // make table name singular in definition
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
  category: {
    // consider making a separate categories table and through table for one product to many categories relationship
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
    type: Sequelize.INTEGER,
    get() {
      return this.getDataValue('price') / 1
    },
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
    defaultValue: true // reconsider false
  }
})

const isPriceInt = product => {
  product.price = product.price * 100
}

Product.beforeCreate(isPriceInt)

module.exports = Product
