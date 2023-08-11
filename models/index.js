const User = require('../models/User');
const Post = require('../models/Post');
const Comment = require('../models/Comment');

// define relationships between models
// User and Post
User.hasMany(Post, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
});
Post.belongsTo(User, {
    foreignKey: 'userId',
});

// User and Comment

User.hasMany(Comment, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
});
Comment.hasOne(User, {
    foreignKey: 'userId',
});

// Post and Comment

Post.hasMany(Comment, {
    foreignKey: 'postId',
    onDelete: 'CASCADE',
});
Comment.hasOne(Post, {
    foreignKey: 'postId',
});
 
module.exports = {
    User,
    Comment,
    Post,
};