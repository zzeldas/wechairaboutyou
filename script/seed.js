'use strict'

const db = require('../server/db')
const {
  User,
  Product,
  Category,
  Order,
  OrderProduct
} = require('../server/db/models')

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
      firstName: 'user',
      lastName: 'user',
      email: 'user@wechair.com',
      password: 'user123',
      address: '7 Vahlen Place',
      isAdmin: false
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
    },
    {
      firstName: 'Admin',
      lastName: 'Admin',
      email: 'admin@wechair.com',
      password: 'admin123',
      address: '034 Hallows Avenue',
      isAdmin: true
    }
  ]

  const users = await Promise.all([User.bulkCreate(dummyUsers)])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)

  const categories = await Promise.all([
    Category.create({name: 'Office Chairs'}), //0
    Category.create({name: 'Game Chairs'}), //1
    Category.create({name: 'Dining Chairs'}), //2
    Category.create({name: 'Kids Chairs'}), //3
    Category.create({name: 'Backyard Chairs'}), //4
    Category.create({name: 'OutDoors'}), //5
    Category.create({name: 'Living Room'}), //6
    Category.create({name: 'Patio'}), //7
    Category.create({name: 'Blue'}), //8
    Category.create({name: 'Red'}), //9
    Category.create({name: 'Navy'}), //10
    Category.create({name: 'Pink'}), //11
    Category.create({name: 'Green'}), //12
    Category.create({name: 'Beige'}) //13
  ])

  console.log(`seeded ${categories.length} categories`)
  console.log(`seeded categories successfully`)

  const products = await Promise.all([
    Product.create({
      name:
        "Flash Furniture Green Plastic Stackable School Chair with 10.5'' Seat Height",
      description:
        'When considering school seating for early childhood centers this plastic school chair should be at the top of your list with its safety design. Pair with our plastic height adjustable activity table for ease of maintenance around messy kids. Stack quantity: 10, static load capacity: 154 pounds. Contoured one-piece polypropylene shell, no metal parts eliminate pinch injury. Ideal use in the classroom, daycare, preschool, homeschool, after school centers\nPRODUCT MEASUREMENTS >>> Overall Size: 12.5"W x 14"D x 20"H | Seat Size: 10"W x 10"D x 10.75"H | Back Size: 11"W x 10.5"H',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/31wlseSFIgL._AC_.jpg',
      price: 14.31,
      quantity: '50',
      isActive: true
    }).then(product => product.setCategories([categories[3], categories[12]])),

    Product.create({
      name:
        'Angeles Value Stack Kids Chair, Preschool Daycare Playroom Furniture, Flexible Seating Classroom Furniture for Toddlers, Red, 9',
      description:
        'DURABLE MATERIAL: Value Stack Chairs are durable and created using solid one-piece construction. Protective boots help prevent sliding and reduce noise. Chairs accommodate up to 100 lbs.\nSTACKABLE KIDS CHAIR DESIGN: All chair sizes conveniently stack together. Value Stack Chairs come in 5", 7", 9", 11", and 13". PERFECT FOR HOMESCHOOLS & PLAYROOMS: It\'s extremely common for parents to be homeschooling their kids while daycares and schools are closed. Setting up a kid-sized activity table or desk with a chair will help normalize the lives of your children so you can attempt to keep their school learning on track while you work from home.\nDIMENSIONS: 15.625" x 15" x 19.75". AGES: 2-3 years. WARRANTY: Limited Lifetime',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/71iPzaBuIEL._AC_SL1500_.jpg',
      price: 27.16,
      quantity: '80',
      isActive: true
    }).then(product => product.setCategories([categories[3], categories[9]])),

    Product.create({
      name:
        'Emma + Oliver Blue Plastic Stackable School Chair with 12 Seat Height',
      description:
        'Stacking Student Chair. 176 lb. Static Load Capacity. Stacks up to 10 Chairs High, Lightweight Design. Designed to encourage proper sitting habits',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/41icTz278kL._AC_.jpg',
      price: 27.99,
      quantity: '80',
      isActive: true
    }).then(product => product.setCategories([categories[3], categories[8]])),

    Product.create({
      name: "Animal Adventure | Sweet Seats | Pink Owl Children's Plush Chair",
      description:
        'Plush slip cover is removable and washable.Zipper closure is child-safe (parents can easily open closer with a simple paper clip).Lightweight and easy to move. The perfect size (14"L x 19"W x 20"H). Ages 18 months and up.',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/91dH9MBfqvL._AC_SL1500_.jpg',
      price: 80,
      quantity: '100',
      isActive: true
    }).then(product => product.setCategories([categories[3], categories[11]])),

    Product.create({
      name: "Animal Adventure | Sweet Seats | Blue Bear Children's Plush Chair",
      description:
        'Plush slip cover is removable and washable. Zipper closure is child-safe (parents can easily open closer with a simple paper clip). Lightweight and easy to move. The perfect size (14"L x 19"W x 20"H). Ages 18 months and up.',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/71JgGHkdADL._AC_SL1282_.jpg',
      price: 80,
      quantity: '80',
      isActive: true
    }).then(product => product.setCategories([categories[3], categories[8]])),

    Product.create({
      name: 'Kid Foam Sofa Chair, Children Foam Couch for Kid Gift (Blue)',
      description:
        '【Premium Materials】:toddlers sofa made by high density safe solid bio foam and Eco-Friendly PVC cover.no glue used, no odourless 【Product Specification】product size: 50x49x45cm, seat size: w21x D 27cm, seat with max capacity of 43 kg. 【Designed Characteristic】The kid foam sofa is very cute and comfortable, durable.it is for kid seat, playing ,sleep, rest…exc. light weight foam frame design can prevent the kid don’t suffer the injure during he play time.let kid more funny and happy when the kid sit on the chair free move. Enjoying his play time. long term use moderate hardness foam, size suitable the kids sofa make your kid bones growth more and more healthy. 【Quality Requirement】kids couches and sofas related materials have passed the CPSIA,ASTM-963 ,Flammability and children chair structure test. Up to USA standard.So your can use with rest assured. 【Pay Attention Point】Please put child chair on the even ground when you kid sit or play. If your child is very small, please accompanied with his to play. if have a litter stain. Please use wet towel with mild soap for spot clean.',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/61%2B%2B-C09j0L._AC_SL1200_.jpg',
      price: 69.95,
      quantity: '20',
      isActive: true
    }).then(product => product.setCategories([categories[3], categories[8]])),

    Product.create({
      name:
        'Lukeight Stuffed Animal Storage Bean Bag Chair, Bean Bag Cover for Organizing Kid’s Room',
      description:
        "Bean bag cover can hide kid's stuffed animals and all soft items, creating a fun bean bag chair. 100% cotton canvas, soft, durable and cozy. Children love sitting on this storage bag to watch TV, read book or sleep every day. X-Large size can hold about small stuffed animals 180, medium stuffed animals 90, large stuffed animals 40 or 200 ml beans, suitable for kids from 5 to 10 years old, teens and adults. Toy storage bag with double stitched, long zipper and handle can move smoothly from room to anther. Best storage equipment for kids room. Perfect gift for mothers, children or someone you love. You can see kids growing with this bag",
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51xtOkeFjjL._AC_SL1001_.jpg',
      price: 34.95,
      quantity: '90',
      isActive: true
    }).then(product => product.setCategories([categories[3]])),

    Product.create({
      name: 'RUYU 9 Inch Kids Solid Hard Wood Fruit Chair',
      description:
        'The stool is suitable for children, and the modeling of stool is lovely, delicate and practical. Embedded screws are used for easy installation and operation. Made of pure natural wood and environmentally friendly non-toxic water-based paint. Each product has a smooth edge treatment. Ideal for children over 36 months.For children sit chair. Quality Assurance: No batteries, No harmful substances, Premium quality wooden toys, keep your kids in a healthy environment. Any problem, feel free to contact us.',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/5186TUM3oPL._AC_SL1000_.jpg',
      price: 26.99,
      quantity: '80',
      isActive: true
    }).then(product => product.setCategories([categories[3]])),

    Product.create({
      name: 'RUYU 9 Inch Kids Solid Hard Wood Fruit Chair',
      description:
        'The stool is suitable for children, and the modeling of stool is lovely, delicate and practical. Embedded screws are used for easy installation and operation. Made of pure natural wood and environmentally friendly non-toxic water-based paint. Each product has a smooth edge treatment. Ideal for children over 36 months.For children sit chair. Quality Assurance: No batteries, No harmful substances, Premium quality wooden toys, keep your kids in a healthy environment. Any problem, feel free to contact us.',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51kRKSqIf7L._AC_SL1000_.jpg',
      price: 26.99,
      quantity: '60',
      isActive: true
    }).then(product => product.setCategories([categories[3]])),

    Product.create({
      name:
        'BIRDROCK HOME Crossback Side Chairs - 2pc - Delivered Fully Assembled(Mahogany, Upholstered Side Chair)',
      description:
        'Modern design crafted from solid wood with a rich distressed finish and an elegant neutral upholstered seat',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/71vQBiRncmL._AC_SL1500_.jpg',
      price: 245.92,
      quantity: '25',
      isActive: true
    }).then(product => product.setCategories([categories[2]])),

    Product.create({
      name:
        'HomePop Parsons Classic Upholstered Accent Dining Chair, Set of 2, Gray',
      description:
        'Set of 2 chairs Patina Gray wood finished legs assemble required',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/71%2B%2Bbg5LazL._AC_SL1500_.jpg',
      price: 135.99,
      quantity: '25',
      isActive: true
    }).then(product =>
      product.setCategories([categories[7], categories[2], categories[13]])
    ),

    Product.create({
      name: 'mecor Modern Armless Accent',
      description:
        'Chairs Set of 2, Upholstered Fabric Dining Chairs w/Solid Wood Legs for Dining Living Room Sofa (Letter-Print, Beige)',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/81sqw7rbggL._AC_SL1500_.jpg',
      price: 129.99,
      quantity: '25',
      isActive: true
    }).then(product => product.setCategories([categories[2], categories[13]])),

    Product.create({
      name: 'Upholstered Fabric Dining Chairs',
      description:
        'Upholstered Fabric Dining Chairs with Button-Tufted Details (Gray)',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/71mkytn2NkL._AC_SL1500_.jpg',
      price: 146.99,
      quantity: '25',
      isActive: true
    }).then(product => product.setCategories([categories[2], categories[7]])),

    Product.create({
      name: 'Yaheetech Dining Chair Living Dining Room PU',
      description:
        'Cushion Diner Chair Kitchen Dining Chairs with Solid Wood Legs Set of 4, Brown',
      imageUrl:
        'https://www.amazon.com/Yaheetech-Dining-Living-Cushion-Kitchen/dp/B081KZH2TM/ref=sr_1_9?crid=3KBXGAHAGMYL7&dchild=1&keywords=dining+room+chairs&qid=1587444267&s=home-garden&sprefix=dining+room%2Cgarden%2C140&sr=1-9',
      price: 135.99,
      quantity: '25',
      isActive: true
    }).then(product => product.setCategories([categories[2]])),
    Product.create({
      name: 'Huaki Modern Dining Chairs, Mid - Century',
      description:
        'Style Birds Nest Dining Room Chair for Home Kitchen Living Room Indoor Outdoor Black, Set of 4',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/61Cp0anAodL._AC_SL1000_.jpg',
      price: 129.99,
      quantity: '25',
      isActive: true
    }).then(product => product.setCategories([categories[10]])),
    Product.create({
      name:
        'Yaheetech Dining Room Chairs Kitchen Living Room Chairs Vanity  Makeup  Leisure',
      description:
        'Accent Upholstered Side Chairs with Soft Velvet Seat Backrest and Adjustable Wooden Style Metal Legs Set of 2, Pink',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/61RAjTL%2BJDL._AC_SL1500_.jpg',
      price: 94.98,
      quantity: '25',
      isActive: true
    }).then(product =>
      product.setCategories([categories[2], categories[5], categories[4]])
    ),
    Product.create({
      name: 'Signature Design by Ashley - Glambrey Dining Room Chair Set',
      description: ' Scrolled Metal Accents - Set of 4 - Brown',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/7156tDkdKjL._AC_SL1500_.jpg',
      price: 197.0,
      quantity: '25',
      isActive: true
    }).then(product => product.setCategories([categories[2]])),
    Product.create({
      name:
        'Sole Designs The Julia Collection Contemporary Style Fabric Upholstered Armless Dining Side Chairs(Set of 2), Ruby',
      description:
        'SIZED TO PERFECTION, EVERLASTING CONSTRUCTION, CONTEMPORARY CHIC STYLE, DESIGNED WITH COMFORT IN MIND: PURCHASE WITH CONFIDENCE',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/91aCIofrUkL._AC_SL1500_.jpg',
      price: 344.99,
      quantity: '25',
      isActive: true
    }).then(product => product.setCategories([categories[9], categories[2]])),
    Product.create({
      name: 'Inspire Q Wilmington II Window Back Wood Dining Side Chairs',
      description:
        'Set includes: Two(2) Wood Dining Chairs, Window back design, Distressed antique finishes',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/91fH9vX1xFL._AC_SL1500_.jpg',
      price: 154.79,
      quantity: '25',
      isActive: true
    }).then(product => product.setCategories([categories[2]]))
  ])

  console.log(`seeded ${products.length} products`)
  console.log(`products seeded successfully`)

  const dummyOrders = [
    {userId: 1}, //Order 1
    {userId: 2},
    {userId: 3},
    {userId: 4},
    {userId: 5},
    {userId: 16}
  ]
  const orders = await Promise.all([Order.bulkCreate(dummyOrders)])

  console.log(`seeded ${orders.length} orders`)
  console.log(`seeded successfully`)

  const dummyOrderProducts = [
    {
      unitPrice: 13599,
      quantity: 4,
      orderId: 6,
      productId: 1
    },
    {
      unitPrice: 12999,
      quantity: 4,
      orderId: 6,
      productId: 2
    },
    {
      unitPrice: 14699,
      quantity: 4,
      orderId: 6,
      productId: 9
    },
    {
      unitPrice: 13599,
      quantity: 4,
      orderId: 3,
      productId: 4
    },
    {
      unitPrice: 12999,
      quantity: 4,
      orderId: 3,
      productId: 5
    }
  ]

  const orderProducts = await Promise.all([
    OrderProduct.bulkCreate(dummyOrderProducts)
  ])

  console.log(`seeded ${orderProducts.length} orders`)
  console.log(`seeded successfully`)
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
