const router = require('express').Router();
const { redirect } = require('express/lib/response');
// const withAuth = require('../utils/withAuth');
const {Plant, Comment, Upvote, User} = require('../models');

//Renders the session user's profile
router.get('/', async(req, res) => {
    try {
        const userData = await User.findByPk(req.session.userId, {
            include: [{model: Plant, include: [{model: Comment, include: [User]} , User, Upvote]}],
            where: {
                userId: req.session.userId,
            },
        });

        const user = userData.get({ plain: true});
        res.render('profile', {
            layout: 'loggedin',
            user: user
    });
    } catch (err) {
        console.log(err)
        res.redirect('login');
    }   
});

router.get('/newPlant', async(req, res) => {
     res.render('newPlant', {
         layout:'loggedin'
     } );
});

//Rendering the profile of a user other than the session user
router.get('/:id', async(req, res) => {
    try {
        const userData = await Plant.findAll({
            include: [Comment, Upvote, User],
            where: {
                userId: req.params.id,
            },
        });

        const plants = userData.map((plant) => plant.get({ plain: true}));
        console.log(plants);
        res.render('searchprofile', {
            layout: 'loggedin',
            plants: plants
    });
    } catch (err) {
        res.redirect('login');
    }   
})



module.exports = router;