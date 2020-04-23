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
    // res.status(401).json({error: 'You are not logged in'})
    res.redirect('/login')
  }
  next()
}

module.exports = {
  isAdmin,
  isLoggedIn
}
