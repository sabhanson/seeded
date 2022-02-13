const router = require("express").Router();
const apiRoutes = require("./api/");
const homeRoutes = require("./home-routes.js");
const dashboardRoutes = require("./dashboard-routes");
const profileRoutes = require("./profile-routes");

// This defines all of the URL paths for our application
router.use("/", homeRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/api", apiRoutes);
router.use("/profile", profileRoutes);

module.exports = router;
