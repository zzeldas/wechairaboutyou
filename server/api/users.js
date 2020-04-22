const router = require('express').Router()
const User = require('../db/models/user')
const Order = require('../db/models/order')
module.exports = router

//middleware isAdmin
const isAdmin = (req, res, next) => {
  //check req.user.isAdmin is true
  if (!req.user || !req.user.isAdmin) {
    res.status(401).json({error: 'You are not authorized'})
  }
  next()
}
//middleware isLoggedIn
const isLoggedIn = (req, res, next) => {
  //check req.session.userId is there
  if (!req.session.userId) {
    res.status(401).json({error: 'You are not logged in'})
    //redirect to log in page
  }
  next()
}
//get all users route
router.get('/', isAdmin, async (req, res, next) => {
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
