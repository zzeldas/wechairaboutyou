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
router.get('/:userId', isLoggedIn, async (req, res, next) => {
  try {
    const userId = req.params.userId
    const foundUser = await User.findByPk(userId, {include: [{model: Order}]})
    res.json(foundUser)
  } catch (err) {
    next(err)
  }
})

//add single user route

//update single user route for admin and login user (may need two routes )

//delete single user route
