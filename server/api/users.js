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
router.get('/:userId', async (req, res, next) => {
  try {
    console.log('hello')
    const userId = req.params.userId
    if (req.user.id === userId || req.user.isAdmin) {
      const foundUser = await User.findByPk(userId, {include: [{model: Order}]})
      res.json(foundUser)
    }
  } catch (err) {
    next(err)
  }
})

//add single user route
//don't think this is in user
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
router.put('/:userId', async (req, res, next) => {
  try {
    if (req.user.id === userId || req.user.isAdmin) {
      const updatedUser = await User.update(req.body, {
        where: {
          id: req.params.id
        }
      })
      res.send(updatedUser)
    }
  } catch (err) {
    next(err)
  }
})
