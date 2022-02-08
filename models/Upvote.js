const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Upvote extends Model {}

Upvote.init({
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    isUpvote: {
        type: DataTypes.BOOLEAN,
    },
    PlantId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: 'Plant',
            key: 'id'
        }
    },
    UserId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: 'User',
            key: 'id'
        }
    }
},{
    sequelize
})

module.exports=Upvote