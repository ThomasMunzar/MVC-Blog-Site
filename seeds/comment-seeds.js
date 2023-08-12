const { Comment } = require('../models/Comment');

const commentData = [
    {
        content: "All sounds good! Now im hungry, what should I eat???",
        userId: 1,
        postId: 1,
    },
    {
        content: "Where is my toast??",
        userId: 2,
        postId: 1,
    },
    {
        content: "Where is my mind?",
        userId: 3,
        postId: 1,
    },
    {
        content: "Hi Chew",
        userId: 4,
        postId: 1,
    },
    {
        content: "aoegfhsogihawrogi?",
        userId: 5,
        postId: 1,
    },
    {
        content: "what should I eat???",
        userId: 6,
        postId: 5,
    },
];

const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;