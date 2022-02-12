const User = require("./User");
const Plant = require("./Plant");
const Comment = require("./Comment");

User.hasMany(Plant, {
  onDelete: "CASCADE",
});

Plant.belongsTo(User);

User.hasMany(Comment, {
  onDelete: "CASCADE",
});

Comment.belongsTo(User);

Plant.hasMany(Comment, {
  onDelete: "CASCADE",
});

Comment.belongsTo(Plant);


module.exports = {
  Comment,
  Plant,
  User,
};
