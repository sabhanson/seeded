const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Plant extends Model {}

Plant.init({

    title: {
        type:DataTypes.STRING,
        allowNull: false,
        validate:{
            len:[1,100]
        }
    },
    caption: {
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            len:[1,200]
        }
    },
    file_name: { 
        type:DataTypes.STRING,
        allowNull: false,
    },
    upVote_counter:{
        type:DataTypes.INTEGER,
        allowNull: true
    }
},{
    sequelize
})

module.exports=Plant;