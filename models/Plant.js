const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const moment = require('moment')
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
    },
    createdAt: {
        type:DataTypes.DATE,
//note here this is the guy that you are looking for                   
      get() {
            return moment(this.getDataValue('createdAt')).format('MM/DD/YYYY');
        }
    },
},{
    sequelize
})

module.exports=Plant;