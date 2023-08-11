const router = require('express').Router();
const userRoutes = require('./user_routes');
// const commentRoutes = require('./comment_routes');
// const postRoutes = require('./post_routes');


router.use('/users', userRoutes);
// router.use('/comments', commentRoutes);
// router.use('/posts', postRoutes);

module.exports = router;
