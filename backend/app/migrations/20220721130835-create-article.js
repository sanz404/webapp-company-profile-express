'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Articles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      user_id: {
        type: Sequelize.BIGINT
      },
      image: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      slug: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.TEXT('long')
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
    .then(() => queryInterface.addIndex('Articles', ['user_id']))
    .then(() => queryInterface.addIndex('Articles', ['slug']))
    .then(() => queryInterface.addIndex('Articles', ['title']))
    .then(() => queryInterface.addIndex('Articles', ['is_published']))
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Articles');
  }
};