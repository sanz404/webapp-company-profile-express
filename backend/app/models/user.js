'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    country_id: DataTypes.INTEGER,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    address1: DataTypes.TEXT,
    address2: DataTypes.TEXT,
    city: DataTypes.STRING,
    zip_code: DataTypes.STRING,
    password: DataTypes.STRING,
    password_reset_token: DataTypes.STRING,
    is_admin: DataTypes.INTEGER,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};