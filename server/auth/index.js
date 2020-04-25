const router = require('express').Router()
const User = require('../db/models/user')
const Order = require('../db/models/order')
const {isAdmin, isLoggedIn} = require('../middleware')
module.exports = router

router.post('/login', async (req, res, next) => {
  try {
    const user = await User.findOne({where: {email: req.body.email}})
    if (!user) {
      console.log('No such user found:', req.body.email)
      res.status(401).send('Wrong username and/or password')
    } else if (!user.correctPassword(req.body.password)) {
      console.log('Incorrect password for user:', req.body.email)
      res.status(401).send('Wrong username and/or password')
    } else {
      await Order.findOrCreate({where: {userId: user.id, status: 'pending'}})
      req.login(user, err => (err ? next(err) : res.json(user)))
    }
  } catch (err) {
    next(err)
  }
})

//store logged in user's data in req.session
//merge guest shopping cart to order?

router.put('/login', async (req, res, next) => {
  try {
    console.log('heyyyyyyyy i am here')
    const user = await User.findOne({where: {email: req.body.email}})
    if (user) {
      //check sessionStorage for cart
      //if user has a pending cart
      //if they do merge sessionStorage with pending cart
      //if not, create a pending order
      //and create orderProduct with sessionStorage to assign to order
      //let newCart = Order.create()
      //assign addedProduct's orderId to the if of the newCart
      //res.json(newCart)
      //   } catch (err) {
      //     next(err)
      //   }
      // })
      req.session.userId = user.userId
      res.json(user)
    }
  } catch (err) {
    next(err)
  }
})

router.post('/signup', async (req, res, next) => {
  try {
    const user = await User.create(req.body)
    req.login(user, err => (err ? next(err) : res.json(user)))
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists')
    } else {
      next(err)
    }
  }
})

router.post('/logout', (req, res) => {
  req.logout()
  req.session.destroy()
  res.redirect('/')
})

router.get('/me', (req, res) => {
  res.json(req.user)
})

router.use('/google', require('./google'))
