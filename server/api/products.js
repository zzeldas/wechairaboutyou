const router = require('express').Router()
const {Product, User, Order} = require('../db/models')
const Category = require('../db/models/category')
const {isAdmin, isLoggedIn} = require('../middleware')
const Sequelize = require('sequelize')

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll({
      attributes: [
        'id',
        'name',
        'description',
        'imageUrl',
        [Sequelize.literal('price / 100.00'), 'price'],
        'quantity'
      ],
      where: {isActive: true},
      order: [['name', 'ASC']],
      include: [
        {
          model: Category,
          attributes: ['name', 'id'],
          through: {attributes: []}, //  <== use to return only the categories and no the CategoryProduct
          required: true
        }
      ]
    })

    res.json(products)
  } catch (err) {
    next(err)
  }
})

// Find a product by its id :: /api/products/:productId

router.get('/:productId', async (req, res, next) => {
  try {
    const product = await Product.findOne({
      attributes: [
        'id',
        'name',
        'description',
        'imageUrl',
        [Sequelize.literal('price / 100.00'), 'price'],
        'quantity',
        'isActive'
      ],
      where: {id: req.params.productId},
      include: [
        {
          model: Category,
          attributes: ['name', 'id'],
          through: {attributes: []}, //  <== use to return only the categories and no the CategoryProduct
          required: true
        }
      ]
    })
    res.json(product)
  } catch (err) {
    next(err)
  }
})

// Add a product only if you are an Admin

router.post('/', isLoggedIn, isAdmin, async (req, res, next) => {
  try {
    if (!req.body.content) {
      res.status(500)
    }

    if (req.body.categories && typeof req.body.categories === 'string') {
      updateCategories = req.body.categories.split(',')
    } else {
      updateCategories = req.body.categories
    }

    const newProductInstance = {
      name: req.body.name,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      price: req.body.price,
      quantity: req.body.quantity,
      isActive: req.body.isActive
    }
    const createdProduct = await Product.create(newProductInstance).then(
      product => {
        product.setCategories(updateCategories)
        res.json(product)
      }
    )
  } catch (err) {
    next(err)
  }
})

// Update a product only if you are an Admin

//router.put('/:productId', isAdmin, async (req, res, next) => {
router.put('/:productId', isLoggedIn, isAdmin, async (req, res, next) => {
  try {
    if (req.body.categories && typeof req.body.categories === 'string') {
      let updateCategories = req.body.categories.split(',')
    } else {
      let updateCategories = req.body.categories
    }
    await Product.findByPk(req.params.productId).then(async product => {
      await product
        .update({
          name: req.body.name,
          description: req.body.description,
          imageUrl: req.body.imageUrl,
          price: req.body.price,
          quantity: req.body.quantity,
          isActive: req.body.isActive
        })
        .then(updatedProduct => {
          updatedProduct.setCategories(updateCategories)
          res.json(updatedProduct)
        })
    })
  } catch (err) {
    next(err)
  }
})

router.get('/categories/:categoryId', async (req, res, next) => {
  try {
    const categoryId = req.params.categoryId
    if (categoryId > 0) {
      const productsByCategory = await Product.findAll({
        attributes: [
          'id',
          'name',
          'description',
          'imageUrl',
          [Sequelize.literal('price / 100.00'), 'price'],
          'quantity'
        ],
        include: [
          {
            model: Category,
            where: {
              id: categoryId
            },
            attributes: ['name', 'id'],
            through: {attributes: []}, //  <== use to return only the categories and no the CategoryProduct
            required: true
          }
        ]
      })
      return res.json(productsByCategory)
    } else {
      return res.json({name: 'There are no products for this category'})
    }
  } catch (err) {
    next(err)
  }
})

// Delete a product only if you are an Admin

//router.delete('/:productId', isAdmin, async (req, res, next) => {
router.delete('/:productId', isLoggedIn, isAdmin, async (req, res, next) => {
  const productId = req.params.productId
  try {
    await Product.destroy({where: {id: productId}})
    console.log(productId)
    res.json(productId)
  } catch (err) {
    next(err)
  }
})

module.exports = router
