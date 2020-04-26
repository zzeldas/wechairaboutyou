//middleware isAdmin
const isAdmin = (req, res, next) => {
  console.log('req.user ', req.user)
  if (!req.user.dataValues.isAdmin) {
    res.json('You are not authorized to see this content')
  }
  next()
}
//middleware isLoggedIn
const isLoggedIn = (req, res, next) => {
  if (!req.session.passport) {
    console.log('please login', req.session)
    res.json('please log in')
  } else {
    next()
  }
}

module.exports = {
  isAdmin,
  isLoggedIn
}
