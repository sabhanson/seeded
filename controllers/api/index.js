// Router capabilities of express for controllers
const router = require("express").Router();
const userRoutes = require("./user-routes.js");
const plantRoutes = require("./plant-routes.js");
const commentRoutes = require("./comment-routes.js");
const upVoteRoutes = require("./upvote-route.js");

router.use("/user", userRoutes);
router.use("/plant", plantRoutes);
router.use("/comment", commentRoutes);
router.use("/upvote", upVoteRoutes);

module.exports = router;
