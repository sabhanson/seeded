const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Upvote extends Model {}

Upvote.init({
    isUpvote: {
        type: DataTypes.BOOLEAN,
    }
},{
    sequelize
})

module.exports=Upvote