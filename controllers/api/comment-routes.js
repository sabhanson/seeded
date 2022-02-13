const router = require("express").Router();
const { Comment } = require("../../models/");

// POST request to post new comment on specified plant
router.post("/", async (req, res) => {
  try {
    const newComment = await Comment.create({
      content: req.body.comment,
      UserId: req.session.userId,
      PlantId: req.body.plantId,
    });
    res.status(200).json(newComment);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// DELETE request to delete a specific comment on a specific plant
router.delete("/:id", async (req, res) => {
  try {
    const affectedComment = Comment.destroy({
      where: {
        id: req.params.id,
        UserId: req.session.userId,
      },
    });

    if (!affectedComment) {
      res.status(404).end();
    } else {
      res.status(200).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
