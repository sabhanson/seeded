const router = require("express").Router();
const { Plant, Comment, User } = require("../models");
const withAuthFront = require("../utils/withAuthFront");

//This renders the main feed for the session user. It will include all the plant posts in descending order from the creation date
router.get('/', withAuthFront, async (req, res)=>{
    try {
        const plantData = await Plant.findAll({
            include: [{model:Comment, include: [User]}, User],
            order: [
                ['id', 'DESC'],
            ],
        });
        const plants = plantData.map((plant) => plant.get({ plain: true}));
    console.log(plants)
    res.render("dashboard", {
      layout: "dashboardlayout",
      plants: plants,
    });
  } catch (err) {
    res.status(500).end();
  }
});

module.exports = router;
