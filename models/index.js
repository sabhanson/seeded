const User = require('./User');
const Plant = require('./Plant');
const Comment = require('./Comment');
const Upvote = require('./Upvote');

User.hasMany(Plant,{
    onDelete:"CASCADE",
});

Plant.belongsTo(User);

User.hasMany(Comment,{
    onDelete:"CASCADE",
});

Comment.belongsTo(User);

Plant.hasMany(Comment,{
    onDelete:"CASCADE",
});

Comment.belongsTo(Plant);

Plant.hasMany(Upvote,{
    onDelete:"CASCADE",
});

User.hasMany(Upvote,{
    onDelete:"CASCADE",
});

Upvote.belongsTo(User);

Upvote.belongsTo(Plant);


module.exports={
    Comment,
    Plant,
    User,
    Upvote
}