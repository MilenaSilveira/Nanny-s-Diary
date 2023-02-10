const router = require('express').Router();
const homeRoutes = require('./home-routes.js');
// const dashboardroutes = require('./dashboardroutes.js')
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
// router.use('/', dashboardroutes);

module.exports = router;
