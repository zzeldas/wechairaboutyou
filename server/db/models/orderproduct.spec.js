const {expect} = require('chai')
const db = require('../index')
const Product = require('../models/orderproduct')

describe('Order Product model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('instanceMethods', () => {
    describe('data', () => {
      let product

      beforeEach(async () => {
        product = await Product.create({
          price: 129.99,
          quantity: 5
        })
      })

      it('it has all fields: price, quantity, and total', () => {
        expect(product.price).to.equal(12999)
        expect(product.quantity).to.equal('Gaming')
        expect(product.total).to.equal(64995)
      })
    }) // end describe('correctPassword')
  }) // end describe('instanceMethods')
}) // end describe('User model')
