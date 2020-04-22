const router = require('express').Router()
const User = require('../db/models/user')
const Order = require('../db/models/order')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: [
        'id',
        'name',
        'email',
        'loginId',
        'address',
        'phoneNum',
        'isAdmin'
      ]
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:userId', async (req, res, next) => {
  try {
    const userId = req.params.userId
    const foundUser = await User.findByPk(userId, {include: [{model: Order}]})
    res.json(foundUser)
  } catch (err) {
    next(err)
  }
})
