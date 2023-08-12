const { Post } = require('../models') // should it be model/post??

const postData = [
    {
        title: 'Ideas for dinner',
        content: 'Roast Chicken, Congee, grilled steak tacos',
        userId: 1
    },
    {
        title: 'Ideas for dinner',
        content: 'Roast Chicken, Congee, grilled steak tacos',
        userId: 1
    },
    {
        title: 'Ideas for dinner',
        content: 'Roast Chicken, Congee, grilled steak tacos',
        userId: 1
    },
    {
        title: 'Ideas for dinner',
        content: 'Roast Chicken, Congee, grilled steak tacos',
        userId: 1
    },
    {
        title: 'Ideas for dinner',
        content: 'Roast Chicken, Congee, grilled steak tacos',
        userId: 1
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;

