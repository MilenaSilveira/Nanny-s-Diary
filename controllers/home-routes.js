const router = require('express').Router();
const { user, child } = require('../models');

router.get('/', async (req, res) => {
    res.render('login');
  });

module.exports = router;
