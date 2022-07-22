'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Faqs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      category_id: {
        type: Sequelize.BIGINT
      },
      question: {
        type: Sequelize.STRING
      },
      answer: {
        type: Sequelize.TEXT
      },
      sort: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      is_published: {
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
    .then(() => queryInterface.addIndex('Faqs', ['category_id']))
    .then(() => queryInterface.addIndex('Faqs', ['question']))
    .then(() => queryInterface.addIndex('Faqs', ['sort']))
    .then(() => queryInterface.addIndex('Faqs', ['is_published']))
    ;
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Faqs');
  }
};