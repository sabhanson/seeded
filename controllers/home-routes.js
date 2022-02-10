const router = require('express').Router();


router.get('/', (req, res) =>{
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
}
    res.render('landing')
})


//Get route to sign up for an account

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
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