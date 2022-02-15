const router = require("express").Router();

// If logged in, redirects to dashboard
router.get("/", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }
  res.render("landing",
    {
      layout: "landingp",
    });
});

// Renders the about page and checks if user is logged in, if so, a different layout is used
router.get("/about", (req, res) => {
  if (req.session.loggedIn) {
    res.render("about", {
      layout: "dashboardlayout",
    });
  } else {
    res.render("about");
  }
});

// Get route to sign up for an account
router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }

  res.render("signup");
});

// Route that renders a form to be able to login
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }

  res.render("login");
});

// Route to handle if the user searches another user that does not exist
router.get("/nouser", (req, res) => {
  res.render("nouser",
    {
      layout: "dashboardlayout",
    });
});

module.exports = router;
