'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      category_id: {
        type: Sequelize.BIGINT
      },
      name: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      price: {
        type: Sequelize.DECIMAL(18,4),
        defaultValue: 0,
      },
      description: {
        type: Sequelize.TEXT
      },
      is_published: {
        type: Sequelize.TINYINT,
        defaultValue: 0,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
    .then(() => queryInterface.addIndex('Products', ['category_id']))
    .then(() => queryInterface.addIndex('Products', ['name']))
    .then(() => queryInterface.addIndex('Products', ['image']))
    .then(() => queryInterface.addIndex('Products', ['price']))
    .then(() => queryInterface.addIndex('Products', ['is_published']))
    ;
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};