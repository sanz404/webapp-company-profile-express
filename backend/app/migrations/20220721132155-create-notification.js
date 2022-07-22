'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Notifications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      user_id: {
        type: Sequelize.BIGINT
      },
      subject: {
        type: Sequelize.STRING
      },
      sort_content: {
        type: Sequelize.STRING
      },
      full_content: {
        type: Sequelize.TEXT
      },
      readed_at: {
        type: Sequelize.DATE,
        allowNull: true,
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
    .then(() => queryInterface.addIndex('Notifications', ['user_id']))
    .then(() => queryInterface.addIndex('Notifications', ['subject']))
    .then(() => queryInterface.addIndex('Notifications', ['sort_content']))
    .then(() => queryInterface.addIndex('Notifications', ['readed_at']))
    ;
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Notifications');
  }
};