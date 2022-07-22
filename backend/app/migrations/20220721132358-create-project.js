'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Projects', {
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
    .then(() => queryInterface.addIndex('Projects', ['category_id']))
    .then(() => queryInterface.addIndex('Projects', ['name']))
    .then(() => queryInterface.addIndex('Projects', ['is_published']))
    .then(() => queryInterface.addIndex('Projects', ['image']))
    ;
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Projects');
  }
};