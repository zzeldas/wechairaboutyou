const router = require('express').Router()
const {Product} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll({
      order: [['id', 'ASC']]
    })

    res.json(products)
  } catch (err) {
    next(err)
  }
})

// Find a product by its id :: /api/products/:productId

router.get('/:productId', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.productId)
    res.json(product)
  } catch (err) {
    next(err)
  }
})

// Add a product only if you are an Admin

//router.post("/", isAdmin, async (req, res, next) => {
router.post('/', async (req, res, next) => {
  try {
    if (!req.body.content) {
      res.status(500)
    }

    const newProductInstance = {
      name: req.body.name,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      price: req.body.price,
      color: req.body.color,
      size: req.body.size,
      category: req.body.category,
      quantity: req.body.quantity,
      isActive: req.body.isActive
    }
    const createdProduct = await Product.create(newProductInstance)

    const checkExist = await Product.findByPk(createdProduct.id)

    const resMessage = {
      message: 'Created successfully',
      Product: checkExist
    }

    res.json(createdProduct)
  } catch (err) {
    next(err)
  }
})

// Update a product only if you are an Admin

//router.put('/:ProductId', isAdmin, async (req, res, next) => {

router.put('/:ProductId', async (req, res, next) => {
  try {
    let product = await Product.findByPk(req.params.ProductId)
    if (product === null) {
      res.status(404).json('Not Found!')
    } else {
      const update = await Product.update(
        {
          name: req.body.name,
          description: req.body.description,
          imageUrl: req.body.imageUrl,
          price: req.body.price,
          color: req.body.color,
          size: req.body.size,
          category: req.body.category,
          quantity: req.body.quantity,
          isActive: req.body.isActive
        },
        {
          where: {id: req.params.ProductId},
          returning: true,
          plain: true
        }
      )

      const checkExist = await Product.findByPk(req.params.ProductId)

      const resMessage = {
        message: 'Updated successfully',
        product: checkExist
      }

      res.json(resMessage)
    }
  } catch (err) {
    next(err)
  }
})

// Delete a product only if you are an Admin

//router.delete('/:ProductId', isAdmin, async (req, res, next) => {
router.delete('/:ProductId', async (req, res, next) => {
  const ProductId = req.params.ProductId
  try {
    await Product.destroy({where: {id: ProductId}})
    res.json(ProductId)
  } catch (err) {
    next(err)
  }
})

const isAdmin = (req, res, next) => {
  if (!req.user || !req.user.isAdmin) {
    const err = new Error('You need to be an Admin to perform this transaction')
    err.status = 401
    return next(err)
  }
  next()
}
