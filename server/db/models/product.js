const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
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
    defaultValue: false
  }
})

const isPriceInt = product => {
  product.price = product.price * 100
}

Product.beforeCreate(isPriceInt)

module.exports = Product
