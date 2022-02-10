const router = require('express').Router();
const {Plant, Comment, Upvote, User} = require('../models');

//This renders the main feed for the session user. It will include all the plant posts in descending order from the creation date
router.get('/', async (req, res)=>{
    try {
        const plantData = await Plant.findAll({
            include: [Comment, Upvote, User]
        });
        const plants = plantData.map((plant) => plant.get({ plain: true}));
        console.log(plants[0].Upvotes);
        res.render('dashboard', {
            plants: plants
        });
    } catch (err) {
        res.redirect('login');
    }
});

module.exports = router;