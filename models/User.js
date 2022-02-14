const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

// Creates the user table
class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlphanumeric: true,
        len: [1, 20],
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 30],
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    file_name: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '/assets/default.jpeg',
    },
  },
  {
    sequelize,
    hooks: {
      beforeCreate: (userData) => {
        userData.password = bcrypt.hashSync(userData.password, 5);
        return userData;
      },
    },
  }
);

module.exports = User;
