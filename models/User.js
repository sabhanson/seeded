
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt')

class User extends Model {}

User.init({
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    username:{
        type:DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
            isAlphanumeric: true,
            len: [1,20]
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            len: [8,30]
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    }
},{
    sequelize,
    hooks: {
        beforeCreate:userData=>{
            userData.password = bcrypt.hashSync(userData.password,5)
            return userData
        }
    }
})

module.exports=User