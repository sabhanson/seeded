const router = require('express').Router();



router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('signup');
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/dashboard');
      return;
    }
  
    res.render('login');
  });


router.get('/dashboard', (req, res)=>{
    console.log(req.session)
    if (!req.session.loggedIn) {
        res.status(403).json({ msg: "You need to login to access this" });
      } else {
        res.render('dashboard')
      }
})

module.exports = router;