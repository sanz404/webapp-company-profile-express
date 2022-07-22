'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ArticleCategories', {
      article_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true
      },
      category_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true
      }
    })
    .then(() => queryInterface.addIndex('ArticleCategories', ['article_id']))
    .then(() => queryInterface.addIndex('ArticleCategories', ['category_id']))
    ;
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ArticleCategories');
  }
};