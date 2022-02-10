const router = require('express').Router();
const User = require('../../models/User')

//This is the route for creating a new user profile
router.post('/signup', async(req, res) => {
    try {
        const newUser = await User.create({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email
        });
        
        req.session.save(() => {
            req.session.userId = newUser.id;
            req.session.username = newUser.username;
            req.session.loggedIn = true;

            res.status(200).json(newUser);
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

//This is the route for existing accounts to log in
router.post('/login', async(req, res) => {
    try {
        const user = await User.findOne({
            where: {
                username: req.body.username,
            },
        })
        if (!user) {
            res.status(400).json({ message: "Incorrect username or password" });
            return;
        }
        const passwordCheck = user.checkPassword(req.body.password);
        if (!passwordCheck) {
            res.status(400).json({ message: "Incorrect username or password" });
            return;
        }
        req.session.save(() => {
            req.session.userId = user.id;
            req.session.username = user.username;
            req.session.loggedIn = true;
            console.log("session saved")
            res.status(200).json({ message: "You are now logged in!" });
        })
        console.log(req.session)
    } catch (err) {
        res.status(400).json({ message: "No account found"});
    }
});

//This is the route for users to log out from the application
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

module.exports = router;