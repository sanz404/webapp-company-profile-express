'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Teams', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      image: {
        type: Sequelize.STRING,
        allowNull: true
      },
      name: {
        type: Sequelize.STRING
      },
      position: {
        type: Sequelize.STRING,
        allowNull: true,
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
    .then(() => queryInterface.addIndex('Teams', ['image']))
    .then(() => queryInterface.addIndex('Teams', ['name']))
    .then(() => queryInterface.addIndex('Teams', ['position']))
    .then(() => queryInterface.addIndex('Teams', ['is_published']))
    ;
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Teams');
  }
};