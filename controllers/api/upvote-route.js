const router = require("express").Router();
const { Plant } = require("../../models/");

// This route adds to the uproot counter on the dashboard and profile
router.post("/:id", async (req, res) => {
  try {
    const plantUp = await Plant.increment(
      { upVote_counter: 1 },
      { where: { id: req.params.id } }
    );
    res.status(200).json(plantUp);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
