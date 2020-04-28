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
      firstName: 'Holly',
      lastName: 'Chair',
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
    Category.create({name: 'Office Chairs'}),
    Category.create({name: 'Game Chairs'}),
    Category.create({name: 'Dining Chairs'}),
    Category.create({name: 'Backyard Chairs'}),
    Category.create({name: 'OutDoors'}),
    Category.create({name: 'Living Room'}),
    Category.create({name: 'Patio'}),
    Category.create({name: 'Blue'}),
    Category.create({name: 'Red'}),
    Category.create({name: 'Navy'}),
    Category.create({name: 'Pool'})
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
    }).then(product => product.setCategories([categories[1]])),

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
    }).then(product => product.setCategories([categories[1]])),

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
    }).then(product => product.setCategories([categories[1]])),

    Product.create({
      name: "Animal Adventure | Sweet Seats | Pink Owl Children's Plush Chair",
      description:
        'Plush slip cover is removable and washable.Zipper closure is child-safe (parents can easily open closer with a simple paper clip).Lightweight and easy to move. The perfect size (14"L x 19"W x 20"H). Ages 18 months and up.',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/91dH9MBfqvL._AC_SL1500_.jpg',
      price: 80,
      quantity: '100',
      isActive: true
    }).then(product => product.setCategories([categories[1]])),

    Product.create({
      name: "Animal Adventure | Sweet Seats | Blue Bear Children's Plush Chair",
      description:
        'Plush slip cover is removable and washable. Zipper closure is child-safe (parents can easily open closer with a simple paper clip). Lightweight and easy to move. The perfect size (14"L x 19"W x 20"H). Ages 18 months and up.',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/71JgGHkdADL._AC_SL1282_.jpg',
      price: 80,
      quantity: '80',
      isActive: true
    }).then(product => product.setCategories([categories[1]])),

    Product.create({
      name: 'Kid Foam Sofa Chair, Children Foam Couch for Kid Gift (Blue)',
      description:
        '【Premium Materials】:toddlers sofa made by high density safe solid bio foam and Eco-Friendly PVC cover.no glue used, no odourless 【Product Specification】product size: 50x49x45cm, seat size: w21x D 27cm, seat with max capacity of 43 kg. 【Designed Characteristic】The kid foam sofa is very cute and comfortable, durable.it is for kid seat, playing ,sleep, rest…exc. light weight foam frame design can prevent the kid don’t suffer the injure during he play time.let kid more funny and happy when the kid sit on the chair free move. Enjoying his play time. long term use moderate hardness foam, size suitable the kids sofa make your kid bones growth more and more healthy. 【Quality Requirement】kids couches and sofas related materials have passed the CPSIA,ASTM-963 ,Flammability and children chair structure test. Up to USA standard.So your can use with rest assured. 【Pay Attention Point】Please put child chair on the even ground when you kid sit or play. If your child is very small, please accompanied with his to play. if have a litter stain. Please use wet towel with mild soap for spot clean.',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/61%2B%2B-C09j0L._AC_SL1200_.jpg',
      price: 69.95,
      quantity: '20',
      isActive: true
    }).then(product => product.setCategories([categories[1]])),

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
    }).then(product => product.setCategories([categories[1]])),

    Product.create({
      name: 'RUYU 9 Inch Kids Solid Hard Wood Fruit Chair',
      description:
        'The stool is suitable for children, and the modeling of stool is lovely, delicate and practical. Embedded screws are used for easy installation and operation. Made of pure natural wood and environmentally friendly non-toxic water-based paint. Each product has a smooth edge treatment. Ideal for children over 36 months.For children sit chair. Quality Assurance: No batteries, No harmful substances, Premium quality wooden toys, keep your kids in a healthy environment. Any problem, feel free to contact us.',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/5186TUM3oPL._AC_SL1000_.jpg',
      price: 26.99,
      quantity: '80',
      isActive: true
    }).then(product => product.setCategories([categories[1]])),

    Product.create({
      name: 'RUYU 9 Inch Kids Solid Hard Wood Fruit Chair',
      description:
        'The stool is suitable for children, and the modeling of stool is lovely, delicate and practical. Embedded screws are used for easy installation and operation. Made of pure natural wood and environmentally friendly non-toxic water-based paint. Each product has a smooth edge treatment. Ideal for children over 36 months.For children sit chair. Quality Assurance: No batteries, No harmful substances, Premium quality wooden toys, keep your kids in a healthy environment. Any problem, feel free to contact us.',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51kRKSqIf7L._AC_SL1000_.jpg',
      price: 26.99,
      quantity: '60',
      isActive: true
    }).then(product => product.setCategories([categories[1]])),

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
    }).then(product => product.setCategories([categories[1]])),

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
      product.setCategories([categories[7], categories[1], categories[8]])
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
    }).then(product => product.setCategories([categories[2], categories[3]])),

    Product.create({
      name: 'Upholstered Fabric Dining Chairs',
      description:
        'Upholstered Fabric Dining Chairs with Button-Tufted Details (Gray)',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/71mkytn2NkL._AC_SL1500_.jpg',
      price: 146.99,
      quantity: '25',
      isActive: true
    }).then(product => product.setCategories([categories[9], categories[8]])),

    Product.create({
      name: 'Yaheetech Dining Chair Living Dining Room PU',
      description:
        'Cushion Diner Chair Kitchen Dining Chairs with Solid Wood Legs Set of 4, Brown',
      imageUrl:
        'https://www.amazon.com/Yaheetech-Dining-Living-Cushion-Kitchen/dp/B081KZH2TM/ref=sr_1_9?crid=3KBXGAHAGMYL7&dchild=1&keywords=dining+room+chairs&qid=1587444267&s=home-garden&sprefix=dining+room%2Cgarden%2C140&sr=1-9',
      price: 135.99,
      quantity: '25',
      isActive: true
    }).then(product => product.setCategories([categories[1]])),
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
    }).then(product => product.setCategories([categories[4], categories[5]])),
    Product.create({
      name: 'Signature Design by Ashley - Glambrey Dining Room Chair Set',
      description: ' Scrolled Metal Accents - Set of 4 - Brown',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/7156tDkdKjL._AC_SL1500_.jpg',
      price: 197.0,
      quantity: '25',
      isActive: true
    }).then(product => product.setCategories([categories[9]])),
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
    }).then(product => product.setCategories([categories[10]])),
    Product.create({
      name: 'Inspire Q Wilmington II Window Back Wood Dining Side Chairs',
      description:
        'Set includes: Two(2) Wood Dining Chairs, Window back design, Distressed antique finishes',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/91fH9vX1xFL._AC_SL1500_.jpg',
      price: 154.79,
      quantity: '25',
      isActive: true
    }).then(product => product.setCategories([categories[1]])),
    Product.create({
      name: 'Kirbyville Genuine Leather Task Chair',
      description:
        'Offer a touch of mid-century-inspired style to your home office or workspace with this eye-catching office chair. Crafted from a manufactured wood frame with a black finish, it features genuine top-grain leather upholstery and showcases stitched accents running the length of the seat and back. It has a minimum height of 18" but can be raised an additional 5 inch.',
      imageUrl:
        'https://secure.img1-fg.wfcdn.com/im/29889716/resize-h800-w800%5Ecompr-r85/4288/42882612/Kirbyville+Genuine+Leather+Task+Chair.jpg',
      price: 500.0,
      quantity: '25',
      isActive: true
    }).then(product => product.setCategories([categories[1]])),
    Product.create({
      name: 'Aida Executive Chair',
      description:
        'This office chair features a beautiful walnut bentwood frame with glossy black LeatherSoft upholstery. This chair is sure to make an impression and become the focal point in your office or home office. The mid-back design is a practical choice in a multitude of settings. A mid-back office chair offers support to the mid-to-upper back region. This chair is ideal for anyone who does a great deal of typing throughout the day and needs good back support. The contoured backrest provides firm back support. The waterfall front seat edge removes pressure from the lower legs and improves circulation. Chair easily swivels 360 degrees to get the maximum use of your workspace without strain. The pneumatic adjustment lever will allow you to easily adjust the seat to your desired height.',
      imageUrl:
        'https://secure.img1-fg.wfcdn.com/im/10908341/resize-h800-w800%5Ecompr-r85/6611/66113283/Aida+Executive+Chair.jpg',
      price: 259.99,
      quantity: '25',
      isActive: true
    }).then(product => product.setCategories([categories[1]])),
    Product.create({
      name: 'Jorden Executive Chair',
      description:
        'Get to work in the French country style with this executive chair. Enveloped in linen upholstery, this chair features a high backrest, fixed arms, and a gently contoured seat. Button tufting lends a tailored touch, while foam fill provides comfort and support. Sporting a weathered wood finish, the chair’s base includes tilt control, a swivel mechanism, and a lever-operated lift to adjust the seat height from 20" to 23", while five hooded caster wheels let you glide from task to task with ease.',
      imageUrl:
        'https://secure.img1-fg.wfcdn.com/im/08042200/resize-h800-w800%5Ecompr-r85/3056/30562528/Jorden+Executive+Chair.jpg',
      price: 300.0,
      quantity: '25',
      isActive: true
    }).then(product => product.setCategories([categories[1]])),
    Product.create({
      name: 'Saddle Task Chair',
      description:
        'Featuring a plywood inner frame and an iron base this modern office chair is durable, stable, and fashionable. Its plywood inner frame allows this piece to maintain its unique shape for years to come while its iron base enhances its overall strength.',
      imageUrl:
        'https://secure.img1-fg.wfcdn.com/im/20423580/resize-h800-w800%5Ecompr-r85/4050/40503274/Saddle+Task+Chair.jpg',
      price: 389.0,
      quantity: '25',
      isActive: true
    }).then(product => product.setCategories([categories[1]])),
    Product.create({
      name: 'Blazek Mesh Task Chair',
      description:
        'The perfect perch when you are working from home or just surfing the web, this adjustable height desk chair is an office essential. Founded atop a five-wheel catered base, it can easily float between your computer and printer, with quick trips to the filing cabinet being a breeze. Understated enough for any aesthetic, its frame is crafted from metal with finishes of neutral black and pewter. Plus, it offers a mesh back that molds to yours for useful lumbar support.',
      imageUrl:
        'https://secure.img1-fg.wfcdn.com/im/01866502/resize-h800-w800%5Ecompr-r85/3999/39998737/Tenafly+Mesh+Task+Chair.jpg',
      price: 358.9,
      quantity: '25',
      isActive: true
    }).then(product => product.setCategories([categories[1]])),
    Product.create({
      name: 'Alonie Ergonomic Executive Chair',
      description:
        'Do you have an office job and have to spend half of your day sitting down on a chair? Have you been experiencing some backache lately? If so, then you need an office chair that is perfect for you and can adjust to your needs. They provide you a better sitting experience. What they have are various kinds of office chairs to satisfy all your needs, whatever you need an ergonomic executive office chair, luxurious managerial office chair, or simple but comfortable task chair or other style office chairs. They are a world-class experienced supplier, skilled in advanced intelligent technology, selecting superior quality material, attaching importance to every user needs and experience.',
      imageUrl:
        'https://secure.img1-fg.wfcdn.com/im/50520646/resize-h800-w800%5Ecompr-r85/1126/112645497/Alonie+Ergonomic+Executive+Chair.jpg',
      price: 199.99,
      quantity: '25',
      isActive: true
    }).then(product => product.setCategories([categories[1]])),
    Product.create({
      name: 'Waldrop Side Chair',
      description:
        'Featuring padded and contoured seat and back, this small living room chair will cushion and support you in the right places. Besides being great as a living home chair, its also suitable in high-moisture places such as the kitchen, pantry or bathroom as it’s upholstered in stain-resistant fabric. No more having to worry about spending a lot of effort in maintaining the living room table chair as it’s very easy to wipe clean. The best thing is, the contemporary living room chairs score high on looks with its woody, rustic charm.',
      imageUrl:
        'https://secure.img1-fg.wfcdn.com/im/00445510/compr-r85/6847/68471309/waldrop-side-chair.jpg',
      price: 299.99,
      quantity: '25',
      isActive: true
    }).then(product => product.setCategories([categories[1]])),
    Product.create({
      name: 'Hermod Ergonomic Executive Chair',
      description:
        'Influenced by contemporary designs, it showcases a streamlined design crafted with a plastic frame, a breathable mesh backing, and faux leather armrests. Breathable mesh back and seat provide cooling comfort. Adjustable arms and headrest provide help to support your upper back. Pneumatic seat height adjustment moves the seat up and down to adapt to various body heights. The mesh back chair can recline from 90° to 135° to offer an inviting aesthetic that’s made for up to eight hours of use. Whether this office chair is stationed in the home study or at your personal office desk, it’s sure to lend some support.',
      imageUrl:
        'https://secure.img1-fg.wfcdn.com/im/93693810/resize-h800-w800%5Ecompr-r85/1001/100194059/Hermod+Ergonomic+Executive+Chair.jpg',
      price: 359.99,
      quantity: '25',
      isActive: true
    }).then(product => product.setCategories([categories[1]])),
    Product.create({
      name: 'Hillard Heated Executive Chair',
      description:
        'Ease the tension of your to-do list with this executive chair. With a heated seat, shiatsu-style massage system, and adjustable back angle, this armed chair is designed to bring comfort to the forefront of your office space. This piece is crafted with metal and manufactured wood frame, padding, and faux leather upholstery for a streamlined and inviting look. And thanks to the included ottoman, you can kick up your feet as you take a seat. For added function, this swivel chair can adjust in seat height to suit your needs. The manufacturer backs this product with a two-year warranty in commercial settings.',
      imageUrl:
        'https://secure.img1-fg.wfcdn.com/im/54946192/resize-h800-w800%5Ecompr-r85/9137/91373721/Hillard+Heated+Executive+Chair.jpg',
      price: 328.99,
      quantity: '25',
      isActive: true
    }).then(product => product.setCategories([categories[1]])),
    Product.create({
      name: 'Beckson Ergonomic Mesh Task Chair',
      description:
        'With a contoured waterfall seat and lumbar-friendly mesh back, this task chair is a must-have for any hardworking professional powering through the work day. It’s crafted with a metal frame and features a five-star base complete with rolling casters for mobility. The swivel seat lets you quickly turn from task to task, while the leather upholstery provides an inviting look. Plus, the seat height and armrests can be adjusted for customizable comfort.',
      imageUrl:
        'https://secure.img1-fg.wfcdn.com/im/05559715/resize-h800-w800%5Ecompr-r85/9072/90721782/Beckson+Ergonomic+Mesh+Task+Chair.jpg',
      price: 729.99,
      quantity: '25',
      isActive: true
    }).then(product => product.setCategories([categories[1]]))
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
