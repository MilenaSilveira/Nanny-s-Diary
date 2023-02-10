const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');


//Create post
router.post('/', withAuth, async (req, res) => {
    try {
      const newPost = await Post.create({
        ...req.body,
        user_id: req.session.user_id,
      })
  
      res.status(200).json(newPost);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  //Update route 
  router.put('/:id', withAuth, async (req, res) => {
    try {
      const updatePost = await Post.update({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(updatePost);
    } catch (err) {
      res.status(400).json(err);
    }
  });


  //Delete post
  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const postData = await Post.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!postData) {
        res.status(404).json({ message: 'Error' });
        return;
      }
  
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });




module.exports = router;