// All of these are rendering, not accepting any inputs*****(res.render)
//NEVER should be creating anything in your database


// Route to SIGNUP
// Route for LOGIN
// Route for DASHBOARD
// Route for HOME
// Route for views a single blogpost and the comments for that blogpost
// Route to create a NEW BLOGPOST
// Route to update a blogpost ** this is not the same as viewing a single blogpost

const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;


