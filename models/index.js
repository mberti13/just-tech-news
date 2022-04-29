const User = require('./User');
const Post = require('./Post');
const Vote = require('./Vote');

// ! create associations between User and Post
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User,{
    foreignKey: 'user_id',
});

// ! Create associations between user and post in context with the voting system
User.belongsToMany(Post,{
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
});

Post.belongsToMany(User,{
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id'
});

// ! Individual Associations
Vote.belongsTo(User,{
    foreignKey: 'user_id'
});

Vote.belongsTo(Post,{
    foreignKey: 'post_id'
});

User.hasMany(Vote,{
    foreignKey: 'user_id'
});

Post.hasMany(Vote,{
    foreignKey: 'post_id'
});



module.exports = {
    User,
    Post,
    Vote
};
