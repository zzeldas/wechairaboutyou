const User = require('./user')
const Product = require('./product')
const Order = require('./order')
const OrderProduct = require('./orderproduct')
const Cart = require('./cart')
const CartProduct = require('./cartproduct')

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

//OUR ASSOCIATIONS
// User.hasMany(Order)
// Order.belongsTo(User)

// Order.belongsToMany(Product, {through: OrderProduct})
// Product.belongsToMany(Order, {through: OrderProduct})

//ARIELLE ASSOCIATIONS

User.hasOne(Cart)
User.hasMany(Order)

Cart.hasMany(CartProduct)

CartProduct.belongsTo(Product)

Order.hasMany(OrderProduct)

OrderProduct.belongsTo(Product)
Cart.belongsTo(User)
CartProduct.belongsTo(Cart)
Order.belongsTo(User)
OrderProduct.belongsTo(Order)

module.exports = {
  User,
  Product,
  Order,
  OrderProduct,
  CartProduct,
  Cart
}
