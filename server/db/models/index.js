const User = require('./user')
const Product = require('./product')
const Order = require('./order')
const OrderProduct = require('./orderproduct')
const Category = require('./category')
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

User.hasMany(Order)
Order.belongsTo(User)

// Order.belongsToMany(Product, {through: OrderProduct})
// Product.belongsToMany(Order, {through: OrderProduct})

OrderProduct.belongsTo(Order)
// Product.belongsTo(Order)
Order.hasMany(OrderProduct)
// Product.hasMany(OrderProduct)
OrderProduct.belongsTo(Product)

// Category model relationships
Product.belongsToMany(Category, {through: 'ProductCategory'})
Category.belongsToMany(Product, {through: 'ProductCategory'})

module.exports = {
  User,
  Product,
  Order,
  OrderProduct,
  Category
}
