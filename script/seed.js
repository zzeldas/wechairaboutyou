'use strict'

const db = require('../server/db')
const {User, Product} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const dummyUsers = [
    {
      firstName: 'Dayle',
      lastName: 'Mixter',
      email: 'dmixter1n@time.com',
      password: 'ok3DVa4Wmq7',
      address: '7 Vahlen Place',
      isAdmin: true
    },
    {
      firstName: 'Amerigo',
      lastName: 'Stow',
      email: 'astow1o@netscape.com',
      password: 'kkxsaneBsS',
      address: '33 Trailsway Junction',
      isAdmin: false
    },
    {
      firstName: 'Em',
      lastName: 'Skuse',
      email: 'eskuse1p@buzzfeed.com',
      password: 'epc2dqX8g',
      address: '22488 Larry Circle',
      isAdmin: false
    },
    {
      firstName: 'Dasha',
      lastName: 'Woolfall',
      email: 'dwoolfall1q@altervista.org',
      password: 'ROEl3zuXN',
      address: '2 Declaration Crossing',
      isAdmin: false
    },
    {
      firstName: 'Griff',
      lastName: 'Ludovici',
      email: 'gludovici1r@prlog.org',
      password: 'iW9TNl',
      address: '679 Cardinal Way',
      isAdmin: true
    },
    {
      firstName: 'Selig',
      lastName: 'Chadwin',
      email: 'schadwin1s@geocities.jp',
      password: 'LegJF4',
      address: '08744 Springs Court',
      isAdmin: true
    },
    {
      firstName: 'Carline',
      lastName: 'Nelligan',
      email: 'cnelligan1t@tripod.com',
      password: 'q5IjpYr',
      address: '2 Jenifer Trail',
      isAdmin: false
    },
    {
      firstName: 'Kip',
      lastName: 'Crannage',
      email: 'kcrannage1u@alexa.com',
      password: 'uEHNth7Rd',
      address: '27947 Montana Avenue',
      isAdmin: true
    },
    {
      firstName: 'Russell',
      lastName: 'Heady',
      email: 'rheady1v@youtu.be',
      password: 'ipCtkUBr',
      address: '673 Messerschmidt Park',
      isAdmin: false
    },
    {
      firstName: 'Javier',
      lastName: 'Leamy',
      email: 'jleamy1w@stumbleupon.com',
      password: 'nqWvgAXWHw7v',
      address: '76 Grover Avenue',
      isAdmin: false
    },
    {
      firstName: 'Holly',
      lastName: 'Bradder',
      email: 'hbradder1x@businessweek.com',
      password: 'vPvU4L',
      address: '06658 Scott Court',
      isAdmin: true
    },
    {
      firstName: 'Rustin',
      lastName: 'Collcott',
      email: 'rcollcott1y@bloomberg.com',
      password: 'qym4Cs',
      address: '4551 Sunnyside Point',
      isAdmin: true
    },
    {
      firstName: 'Chrissie',
      lastName: 'Peaseman',
      email: 'cpeaseman1z@hexun.com',
      password: 'Y7JGGJNJU',
      address: '51 Erie Road',
      isAdmin: false
    },
    {
      firstName: 'Lanie',
      lastName: 'Meran',
      email: 'lmeran20@earthlink.net',
      password: 'ass33tFYD',
      address: '7330 Summit Street',
      isAdmin: false
    },
    {
      firstName: 'Gaye',
      lastName: 'Teeney',
      email: 'gteeney21@pagesperso-orange.fr',
      password: 'VulrOH',
      address: '034 Hallows Avenue',
      isAdmin: false
    }
  ]

  const users = await Promise.all([User.bulkCreate(dummyUsers)])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)

  const products = [
    {
      name:
        'HomePop Parsons Classic Upholstered Accent Dining Chair, Set of 2, Gray',
      description:
        'Set of 2 chairs Patina Gray wood finished legs assemble required',
      category: 'Dining Room',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/71%2B%2Bbg5LazL._AC_SL1500_.jpg',
      price: 135.99,
      size: 'regular',
      color: 'Gray',
      quantity: '25',
      isActive: true
    },
    {
      name: 'mecor Modern Armless Accent',
      description:
        'Chairs Set of 2, Upholstered Fabric Dining Chairs w/Solid Wood Legs for Dining Living Room Sofa (Letter-Print, Beige)',
      category: 'Dining Room',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/81sqw7rbggL._AC_SL1500_.jpg',
      price: 129.99,
      size: 'regular',
      color: 'Gray',
      quantity: '25',
      isActive: true
    },
    {
      name: 'Upholstered Fabric Dining Chairs',
      description:
        'Upholstered Fabric Dining Chairs with Button-Tufted Details (Gray)',
      category: 'Dining Room',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/71mkytn2NkL._AC_SL1500_.jpg',
      price: 146.99,
      size: 'regular',
      color: 'Gray',
      quantity: '25',
      isActive: true
    },
    {
      name: 'Yaheetech Dining Chair Living Dining Room PU',
      description:
        'Cushion Diner Chair Kitchen Dining Chairs with Solid Wood Legs Set of 4, Brown',
      category: 'Dining Room',
      imageUrl:
        'https://www.amazon.com/Yaheetech-Dining-Living-Cushion-Kitchen/dp/B081KZH2TM/ref=sr_1_9?crid=3KBXGAHAGMYL7&dchild=1&keywords=dining+room+chairs&qid=1587444267&s=home-garden&sprefix=dining+room%2Cgarden%2C140&sr=1-9',
      price: 135.99,
      size: 'regular',
      color: 'Brown',
      quantity: '25',
      isActive: true
    },

    {
      name: 'Huaki Modern Dining Chairs, Mid - Century',
      description:
        'Style Birds Nest Dining Room Chair for Home Kitchen Living Room Indoor Outdoor Black, Set of 4',
      category: 'Dining Room',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/61Cp0anAodL._AC_SL1000_.jpg',
      price: 129.99,
      size: 'regular',
      color: 'Black',
      quantity: '25',
      isActive: true
    },

    {
      name:
        'Yaheetech Dining Room Chairs Kitchen Living Room Chairs Vanity  Makeup  Leisure',
      description:
        'Accent Upholstered Side Chairs with Soft Velvet Seat Backrest and Adjustable Wooden Style Metal Legs Set of 2, Pink',
      category: 'Dining Room',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/61RAjTL%2BJDL._AC_SL1500_.jpg',
      price: 94.98,
      size: 'regular',
      color: 'Pink',
      quantity: '25',
      isActive: true
    },

    {
      name: 'Signature Design by Ashley - Glambrey Dining Room Chair Set',
      description: ' Scrolled Metal Accents - Set of 4 - Brown',
      category: 'Dining Room',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/7156tDkdKjL._AC_SL1500_.jpg',
      price: 197.0,
      size: 'regular',
      color: 'Brown',
      quantity: '25',
      isActive: true
    },

    {
      name:
        'Sole Designs The Julia Collection Contemporary Style Fabric Upholstered Armless Dining Side Chairs(Set of 2), Ruby',
      description:
        'SIZED TO PERFECTION, EVERLASTING CONSTRUCTION, CONTEMPORARY CHIC STYLE, DESIGNED WITH COMFORT IN MIND: PURCHASE WITH CONFIDENCE',
      category: 'Dining Room',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/91aCIofrUkL._AC_SL1500_.jpg',
      price: 344.99,
      size: 'regular',
      color: 'Ruby',
      quantity: '25',
      isActive: true
    },

    {
      name:
        'BIRDROCK HOME Crossback Side Chairs - 2pc - Delivered Fully Assembled(Mahogany, Upholstered Side Chair)',
      description:
        'Modern design crafted from solid wood with a rich distressed finish and an elegant neutral upholstered seat',
      category: 'Dining Room',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/71vQBiRncmL._AC_SL1500_.jpg',
      price: 245.92,
      size: 'regular',
      color: 'Mahogany',
      quantity: '25',
      isActive: true
    },

    {
      name: 'Inspire Q Wilmington II Window Back Wood Dining Side Chairs',
      description:
        'Set includes: Two(2) Wood Dining Chairs, Window back design, Distressed antique finishes',
      category: 'Dining Room',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/91fH9vX1xFL._AC_SL1500_.jpg',
      price: 154.79,
      size: 'regular',
      color: 'Sage',
      quantity: '25',
      isActive: true
    }
  ]

  await Promise.all(
    products.map(product => {
      return Product.create(product)
    })
  )

  console.log(`seeded ${products.length} products`)
  console.log(`products seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
