//middleware isAdmin
const isAdmin = (req, res, next) => {
  if (!req.user.dataValues.isAdmin) {
    res.json({message: 'You are not authorized to see this content'})
  }
  next()
}
//middleware isLoggedIn
const isLoggedIn = (req, res, next) => {
  if (!req.session.passport) {
    res.json({
      message: 'please log in',
      path: '/login'
    })
  } else {
    next()
  }
}

module.exports = {
  isAdmin,
  isLoggedIn
}
