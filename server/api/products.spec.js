/* global describe beforeEach it */

// const {expect} = require('chai')
// const request = require('supertest')
// const db = require('../db')
// const app = require('../index')
// const Product = db.model('product')

// describe('Product routes', () => {
//   beforeEach(() => {
//     return db.sync({force: true})
//   })

//   describe('/api/products/', () => {
//     const product = [
//       {
//         name:
//           'HomePop Parsons Classic Upholstered Accent Dining Chair, Set of 2, Gray',
//         description:
//           'Set of 2 chairs Patina Gray wood finished legs assemble required',
//         category: 'Dining Room',
//         imageUrl:
//           'https://images-na.ssl-images-amazon.com/images/I/71%2B%2Bbg5LazL._AC_SL1500_.jpg',
//         price: '135.99',
//         size: 'regular',
//         color: 'Gray',
//         quantity: '25',
//         isActive: true
//       }
//     ]

//     beforeEach(() => {
//       return Product.create({
//         name: product.name,
//         description: product.description,
//         category: product.category,
//         imageUrl: product.imageUrl,
//         price: product.price,
//         size: product.size,
//         color: product.color,
//         quantity: product.quantity,
//         isActive: true
//       })
//     })

//     it('GET /api/products', async () => {
//       const res = await request(app)
//         .get('/api/products')
//         .expect(200)

//       expect(res.body[0].name).to.be.equal(product.name),
//         expect(res.body[0].description).to.be.equal(product.description),
//         expect(res.body[0].category).to.be.equal(product.category),
//         expect(res.body[0].imageUrl).to.be.equal(product.imageUrl),
//         expect(res.body[0].price).to.be.equal(product.price),
//         expect(res.body[0].size).to.be.equal(product.size),
//         expect(res.body[0].color).to.be.equal(product.color),
//         expect(res.body[0].isActive).to.be.equal(product.isActive)
//     })
//   })
// }) // end describe('User routes')
