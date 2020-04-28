// /* global describe beforeEach it */

// const {expect} = require('chai')
// const request = require('supertest')
// const db = require('../db')
// const app = require('../index')
// const User = db.model('user')

// describe('User routes', () => {
//   beforeEach(() => {
//     return db.sync({force: true})
//   })

//   describe('/api/users/', () => {
//     const codysEmail = 'cody@puppybook.com'

//     beforeEach(() => {
//       return User.create({
//         firstName: 'cody',
//         lastName: 'pug',
//         address: '123 new york, newyork',
//         email: codysEmail,
//         password: 'bones',
//         isAdmin: false
//       })
//     })

//     it('GET /api/users', async () => {
//       const res = await request(app)
//         .get('/api/users')
//         .expect(401)

//       expect(res.body).to.be.an('array')
//       expect(res.body[0].email).to.be.equal(codysEmail)
//     })
//   }) // end describe('/api/users')
// }) // end describe('User routes')
