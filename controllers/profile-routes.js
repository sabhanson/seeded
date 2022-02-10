const router = require('express').Router();
const { redirect } = require('express/lib/response');
// const withAuth = require('../utils/withAuth');
const {Plant, Comment, Upvote, User} = require('../models');

//Renders the session user's profile
router.get('/', async(req, res) => {
    try {
        const userData = await Plant.findAll({
            include: [Comment, Upvote, User],
            where: {
                userId: req.session.userId,
            },
        });

        const plants = userData.map((plant) => plant.get({ plain: true}));
        console.log(plants);
        res.render('profile', {
            plants: plants
    });
    } catch (err) {
        res.redirect('login');
    }   
});

router.get('/newPlant', async(req, res) => {
     res.render('newPlant');
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
            plants: plants
    });
    } catch (err) {
        res.redirect('login');
    }   
})

module.exports = router;