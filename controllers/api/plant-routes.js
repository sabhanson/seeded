const router = require('express').Router();
const { Plant } = require('../../models/');

  // POST request to share new plant
  //api/plant/
  router.post('/', async (req, res) => {
       console.log(req.body)
       try {
          // userCheck = await .findByPk  or if ===)
       
      const newPlant = await Plant.create({ 
        title: req.body.title,
        caption: req.body.caption,
        file_name: req.body.file_name,
        UserId: req.session.userId
    });
      res.status(200).json(newPlant);
    } catch (err) { 
      res.status(500).json(err);
    }
  });

  // PUT request to update title and caption, search by id
  router.put('/:id', async (req, res) => {
    try {
      const affectedPlant = await Plant.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
  
      if (affectedPlant > 0) {
        res.status(200).end();
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // DELETE request to delete entire posting
  router.delete('/:id', async (req, res) => {
    try {
      const affectedPlant = Plant.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!affectedPlant) {
        res.status(404).end();
      } else {
        res.status(200).end();
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;