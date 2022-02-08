const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init({
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    content:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            len:[1,300]
        }
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

module.exports=Comment