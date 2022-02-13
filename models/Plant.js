const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Plant extends Model { }
const moment = require('moment')
class Plant extends Model {}

// Creates the plant table
Plant.init({

    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 100]
        }
    },
    caption: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 200]
        }
    },
    file_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    upVote_counter: {
        type: DataTypes.INTEGER,
        allowNull: true
<<<<<<< HEAD
    }
}, {
=======
    },
    createdAt: {
        type:DataTypes.DATE,
//note here this is the guy that you are looking for                   
      get() {
            return moment(this.getDataValue('createdAt')).format('MM/DD/YYYY');
        }
    },
},{
>>>>>>> e8607d39ae1f68c01fd60d0ddd398a0453b2e837
    sequelize
})

module.exports = Plant;