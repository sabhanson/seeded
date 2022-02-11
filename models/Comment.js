const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init({
    content:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            len:[1,300]
        }
    }

},{
    sequelize
})

module.exports=Comment