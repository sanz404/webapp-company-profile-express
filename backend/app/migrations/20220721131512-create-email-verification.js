'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('EmailVerifications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      user_id: {
        type: Sequelize.BIGINT
      },
      code: {
        type: Sequelize.STRING
      },
      token: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      email_confirmed: {
        type: Sequelize.TINYINT,
        defaultValue: 0,
      },
      is_expired: {
        type: Sequelize.TINYINT,
        defaultValue: 0,
      },
      expired_at: {
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
    .then(() => queryInterface.addIndex('EmailVerifications', ['user_id']))
    .then(() => queryInterface.addIndex('EmailVerifications', ['code']))
    .then(() => queryInterface.addIndex('EmailVerifications', ['token']))
    .then(() => queryInterface.addIndex('EmailVerifications', ['email_confirmed']))
    .then(() => queryInterface.addIndex('EmailVerifications', ['is_expired']))
    .then(() => queryInterface.addIndex('EmailVerifications', ['expired_at']))
    ;
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('EmailVerifications');
  }
};