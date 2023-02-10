const router = require('express').Router();
// const userRoutes = require('./userRoutes');
const childRoutes = require('./childRoutes');

// router.use('/user', userRoutes);
router.use('/child', childRoutes);

module.exports = router;
