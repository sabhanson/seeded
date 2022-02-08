const withAuth = (req, res, next) => {
  if (!req.session.user) {
    res.status(403).json({ msg: "You need to login to access this" });
  } else {
    next();
  }
};

module.exports = withAuth;
