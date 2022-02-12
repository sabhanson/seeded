const router = require('express').Router();
const { redirect } = require('express/lib/response');
// const withAuth = require('../utils/withAuth');
const { Plant, Comment, Upvote, User } = require('../models');

//Renders the session user's profile
router.get('/', async (req, res) => {
    try {

        /* const userData = await Plant.findByPk(req.session.userId, {
            where: {
                UserId: req.session.userId,
            },
            include: [{ model: Comment, include: [User] }, User, Upvote],
            order: [['createdAt', 'DESC']]
        }

        ) */

                const userData = await User.findByPk(req.session.userId, {
                    include: [{
                        model: Plant, 
                        
                        include: [{ model: Comment, include: [User] }, User, Upvote]
                    }],
                    where: {
                        userId: req.session.userId,
                    },
                   order: [['createdAt', 'DESC']],
                });




        console.log(userData)
        const user = userData.get({ plain: true });
        res.render('profile', {
            layout: 'loggedin',
            user: user
        });
    } catch (err) {
        console.log(err)
        res.redirect('login');
    }
});

router.get('/newPlant', async (req, res) => {
    res.render('newPlant', {
        layout: 'loggedin'
    });
});

//Rendering the profile of a user other than the session user
router.get('/:id', async (req, res) => {
    console.log('MEGAN YELLS AT CODE')
    try {
        const userData = await User.findByPk(req.params.id, {
            include: [{
                model: Plant, include: [{ model: Comment, include: [User] }, User, Upvote]
            }],
            where: {
                userId: req.params.id,
            },

        });

        const user = userData.get({ plain: true });
        res.render('searchprofile', {
            layout: 'loggedin',
            user: user
        });
    } catch (err) {
        res.redirect('login');
    }
})



module.exports = router;