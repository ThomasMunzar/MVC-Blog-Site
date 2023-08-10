const { Comment } = require('../models/Comment');

const commentData = [
    {
        content: "All sounds good! Now im hungry, what should I eat???",
        userId: 1,
        postId: 1,
    },
];

const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;