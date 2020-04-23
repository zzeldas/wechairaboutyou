//middleware isAdmin
const isAdmin = (req, res, next) => {
  if (!req.user.isAdmin) {
    res.status(401).json({error: 'You are not authorized to see this content'})
  }
  next()
}
//middleware isLoggedIn
const isLoggedIn = (req, res, next) => {
  if (!req.session.userId) {
    res.redirect('/login')
  }
  next()
}

module.exports = {
  isAdmin,
  isLoggedIn
}
