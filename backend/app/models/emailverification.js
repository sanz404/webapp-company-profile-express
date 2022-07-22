'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EmailVerification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EmailVerification.init({
    user_id: DataTypes.INTEGER,
    code: DataTypes.STRING,
    token: DataTypes.STRING,
    email_confirmed: DataTypes.INTEGER,
    is_expired: DataTypes.INTEGER,
    expired_at: DataTypes.DATE,
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE,
    },
    updatedAt: {
      field: 'updated_at',
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'EmailVerification',
  });
  return EmailVerification;
};