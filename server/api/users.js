const router = require('express').Router()
const User = require('../db/models/user')
const Order = require('../db/models/order')
const {isAdmin, isLoggedIn} = require('../middleware')
module.exports = router

//get all users route
router.get('/', isLoggedIn, isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'firstName', 'lastName', 'email', 'address', 'isAdmin']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

//get single User route
router.get('/:id', isLoggedIn, async (req, res, next) => {
  try {
    const id = req.params.id

    const foundUser = await User.findByPk(id, {include: [{model: Order}]})
    if (foundUser.dataValues.id === req.user.id || req.user.isAdmin) {
      let user = foundUser.dataValues
      res.json(user)
    }
  } catch (err) {
    next(err)
  }
})

//add single user route
router.post('/', async (req, res, next) => {
  try {
    const {firstName, lastName, email, password, address} = req.body
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password,
      address
    })
    res.json(newUser)
  } catch (err) {
    next(err)
  }
})

//update single user route for admin and login user (may need two routes)

//delete single user route
