'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Faq extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Faq.init({
    category_id: DataTypes.INTEGER,
    question: DataTypes.STRING,
    answer: DataTypes.TEXT,
    sort: DataTypes.INTEGER,
    is_published: DataTypes.INTEGER,
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
    modelName: 'Faq',
  });
  return Faq;
};