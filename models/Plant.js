const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Plant extends Model {}

Plant.init({
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
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
    UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: 'User',
            key: 'id'
        }
    }
    // file_name: {  //PHOTO 
    //     type:DataTypes.BLOB("long"),
    //     allowNull: false,
    // },
},{
    sequelize
})

module.exports=Plant;