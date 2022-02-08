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

    // file_name: {  //PHOTO 
    //     type:DataTypes.BLOB("long"),
    //     allowNull: false,
    // },
},{
    sequelize
})

module.exports=Plant;