const router = require('express').Router();

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('signup');
});

router.get('/profile', (req,res) => {
    if (!req.session.loggedIn) {
        res.redirect('/')
    } res.render('profile')
});


module.exports = router;