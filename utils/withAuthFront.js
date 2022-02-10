const withAuthFront = (req, res, next) => {
    if (!req.session.loggedIn) {
      res.redirect('/')
    } else {
      next();
    }
  };
  
  module.exports = withAuthFront;
  