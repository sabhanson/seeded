const Comment = require('./Comment');
const Plant = require('./Plant');
const User = require('./User');
const Upvote = require('./Upvote');

Comment.belongsTo(User);

User.hasMany(Comment,{
    onDelete:"CASCADE"
});

Plant.belongsTo(User);

User.hasMany(Plant,{
    onDelete:"CASCADE"
});

Plant.hasMany(Comment,{
    onDelete:"CASCADE"
});

Plant.hasMany(Upvote,{
    onDelete:"CASCADE"
});

User.hasMany(Upvote,{
    onDelete:"CASCADE"
});

Upvote.belongsTo(User);

Upvote.belongsTo(Plant);


module.exports={
    Comment,
    Plant,
    User,
    Upvote
}