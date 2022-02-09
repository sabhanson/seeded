const router = require('express').Router();
const { Comment, Plant } = require('../../models/');
const withAuth = require('../../utils/auth');
// POST request to post new comment on specified plant
router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      content:req.body.content,
      UserId: req.session.userId,
    //   PlantId: req.params? - how to specify which plant we want to comment on
    });
    res.json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

// DELETE request to delete a specific comment on a specific plant
router.delete('/:id', withAuth, async (req, res) => {
    try {
      const [affectedComment] = Comment.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (affectedComment > 0) {
        res.status(200).end();
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });