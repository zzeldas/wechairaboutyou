const router = require('express').Router()
const {Product} = require('../db/models')
const Category = require('../db/models/category')
const {isAdmin, isLoggedIn} = require('../middleware')

module.exports = router

// All categories

router.get('/', async (req, res, next) => {
  try {
    const categories = await Category.findAll({})
    res.json(categories)
  } catch (err) {
    next(err)
  }
})

// Category By ID

router.get('/:categoryId', async (req, res, next) => {
  try {
    const category = await Category.findByPk(req.params.categoryId)
    res.json(category)
  } catch (err) {
    next(err)
  }
})

// Add a category Admins only
//router.post('/', isAdmin, async (req, res, next) => {

router.post('/', async (req, res, next) => {
  try {
    if (!req.body.content) {
      res.status(500)
    }
    const newCategoryInstance = {
      name: req.body.name
    }
    const createdCategory = await Category.create(newCategoryInstance)
    res.json(createdCategory)
  } catch (err) {
    next(err)
  }
})

// Update a Category Admins only

// router.put(`/:categoryId`, isAdmin, async (req, res, next) => {
router.put('/:categoryId', async (req, res, next) => {
  try {
    await Category.findByPk(req.params.categoryId).then(async category => {
      await category.update({
        name: req.body.name
      })
      res.json(category)
    })
  } catch (err) {
    next(err)
  }
})

// Delete  a Category Admins only

//router.delete('/:categoryId', isAdmin, async (req, res, next) => {

router.delete('/:categoryId', async (req, res, next) => {
  const categoryId = req.params.categoryId
  try {
    await Category.destroy({where: {id: categoryId}})
    res.json(categoryId)
  } catch (err) {
    next(err)
  }
})
