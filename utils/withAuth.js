// If not logged in, send a notification that the user needs to log in
const withAuth = (req, res, next) => {
  if (!req.session.user) {
    res.status(403).json({ msg: "You need to login to access this" });
  } else {
    next();
  }
};

module.exports = withAuth;
