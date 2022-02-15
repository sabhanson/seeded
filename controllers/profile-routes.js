const router = require("express").Router();
const { Plant, Comment, User } = require("../models");

// Renders the session user's profile
router.get("/", async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.userId, {
      include: [
        {
          model: Plant,
          include: [{ model: Comment, include: [User] }, User],
        },
      ],
      where: {
        userId: req.session.userId,
      },
    });

    const user = userData.get({ plain: true });
    res.render("profile", {
      layout: "loggedin",
      user: user,
    });
  } catch (err) {
    console.log(err);
    res.redirect("login");
  }
});

// Route for the UI to add a plant
router.get("/newPlant", async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.userId, {
      where: {
        userId: req.session.userId,
      },
    });

    const user = userData.get({ plain: true });
    res.render("newPlant", {
      layout: "dashboardlayout",
      user: user,
    });
  } catch (err) {
    console.log(err);
    res.redirect("login");
  }
});

// Rendering the profile of a user other than the session user
router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      include: [
        {
          model: Plant,
          include: [{ model: Comment, include: [User] }, User],
        },
      ],
      where: {
        userId: req.params.id,
      },
    });

    const user = userData.get({ plain: true });
    res.render("searchprofile", {
      layout: "dashboardlayout",
      user: user,
    });
  } catch (err) {
    res.redirect("login");
  }
});

module.exports = router;
