// Redirect to landing page if not logged in
const withAuthFront = (req, res, next) => {
  if (!req.session.loggedIn) {
    res.redirect("/");
  } else {
    next();
  }
};

module.exports = withAuthFront;
