'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      country_id: {
        type: Sequelize.BIGINT,
        allowNull: true,
      },
      username: {
        type: Sequelize.STRING,
        unique: true
      },
      email: {
        type: Sequelize.STRING,
        unique: true
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true
      },
      address1: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      address2: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      zip_code: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      password: {
        type: Sequelize.STRING
      },
      password_reset_token: {
        type: Sequelize.STRING
      },
      is_admin: {
        type: Sequelize.TINYINT,
        defaultValue: 0,
      },
      status: {
        type: Sequelize.TINYINT,
        defaultValue: 0
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
      .then(() => queryInterface.addIndex('Users', ['country_id']))
      .then(() => queryInterface.addIndex('Users', ['username']))
      .then(() => queryInterface.addIndex('Users', ['email']))
      .then(() => queryInterface.addIndex('Users', ['phone']))
      .then(() => queryInterface.addIndex('Users', ['city']))
      .then(() => queryInterface.addIndex('Users', ['zip_code']))
      .then(() => queryInterface.addIndex('Users', ['password']))
      .then(() => queryInterface.addIndex('Users', ['password_reset_token']))
      .then(() => queryInterface.addIndex('Users', ['is_admin']))
      .then(() => queryInterface.addIndex('Users', ['status']))
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};