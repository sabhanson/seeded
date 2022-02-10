const router = require('express').Router();

<<<<<<< HEAD
=======
//Get route to sign up for an account
>>>>>>> fa3183eda9d620f592503e95acc4ef2ea8e21bd1
router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('signup');
});

//Route that renders a form to be able to login
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/dashboard');
      return;
    }
  
    res.render('login');
  });

module.exports = router;