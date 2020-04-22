const {expect} = require('chai')
const db = require('../index')
const Product = require('../models/product')

describe('Product model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('instanceMethods', () => {
    describe('correctField', () => {
      let product

      beforeEach(async () => {
        product = await Product.create({
          name: 'Devoko',
          price: 129.99,
          category: 'Gaming',
          description:
            'Devoko high back ergonomic gaming chair covered by premium breathable leather and freely adjustable lumbar support & headrest pillow protecting your spinal & neck.',
          color: 'Red',
          size: 'Large',
          imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/71iD3uTLZ0L._AC_SL1500_.jpg',
          quantity: 7
        })
      })

      it('it has all field: name, price, category, description, color, size, imageUrl, quantity', () => {
        expect(product.name).to.equal('Devoko')
        expect(product.price).to.equal(12999)
        expect(product.category).to.equal('Gaming')
        expect(product.description).to.equal(
          'Devoko high back ergonomic gaming chair covered by premium breathable leather and freely adjustable lumbar support & headrest pillow protecting your spinal & neck.'
        )
        expect(product.color).to.equal('Red')
        expect(product.size).to.equal('Large')
        expect(product.imageUrl).to.equal(
          'https://images-na.ssl-images-amazon.com/images/I/71iD3uTLZ0L._AC_SL1500_.jpg'
        )
        expect(product.quantity).to.equal(7)
      })
    }) // end describe('correctPassword')
  }) // end describe('instanceMethods')
}) // end describe('User model')

// describe("Sequelize Model", () => {
//     before(() => db.sync({ force: true }));
//     afterEach(() => db.sync({ force: true }));

//     xit("it returns correct fields name, description, category, imageUrl, price, size, color, quantity", async () => {
//       const product = await Product.create({
//         name: "Devoko",
//         price: 129.99,
//         category: "Gaming",
//         description: "Devoko high back ergonomic gaming chair covered by premium breathable leather and freely adjustable lumbar support & headrest pillow protecting your spinal & neck.",
//         color: "Red",
//         size: "Large",
//         imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71iD3uTLZ0L._AC_SL1500_.jpg",
//         quantity: 7
//       });

//       expect(product.name).to.equal("Devoko");
//       expect(product.price).to.equal(129.99);
//       expect(product.category).to.equal("Gaming");
//       expect(product.description).to.equal("Devoko high back ergonomic gaming chair covered by premium breathable leather and freely adjustable lumbar support & headrest pillow protecting your spinal & neck."
//       );
//       expect(product.color).to.equal("Red");
//       expect(product.size).to.equal("Large");
//       expect(product.imageUrl).to.equal("/images/jupiter.png");
//       expect(product.quantity).to.equal(7);
//     });
// });
