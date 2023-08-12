const { Post } = require('../models') // should it be model/post??

const postData = [
    {
        title: 'Ideas for dinner',
        content: 'Roast Chicken',
        userId: 1
    },
    {
        title: 'Ideas for dinner',
        content: 'Tacos',
        userId: 1
    },
    {
        title: 'Ideas for dinner',
        content: 'Chow Fun',
        userId: 1
    },
    {
        title: 'Ideas for dinner',
        content: 'Lobster',
        userId: 1
    },
    {
        title: 'Ideas for dinner',
        content: 'Corn',
        userId: 1
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;

