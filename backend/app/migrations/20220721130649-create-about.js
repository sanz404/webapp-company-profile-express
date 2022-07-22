'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Abouts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      image: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
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
    .then(() => queryInterface.addIndex('Abouts', ['image']))
    .then(() => queryInterface.addIndex('Abouts', ['title']))
    .then(() => queryInterface.addIndex('Abouts', ['is_published']))
    ;
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Abouts');
  }
};