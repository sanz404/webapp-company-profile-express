'use strict';

const models = require("../models")

module.exports = {
  async up (queryInterface, Sequelize) {

    let articles = await models.Article.findAll();
    let listData = []
    let i
    for(i = 0; i < articles.length; i++){
      let category = await models.CategoryArticle.findOne({ order: models.sequelize.random() });
      let data = {
        article_id: articles[i].id,
        category_id: category.id
      }
      listData.push(data)
    }

    queryInterface.bulkDelete('articlecategories', null, {});
    return queryInterface.bulkInsert('articlecategories', listData, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('articlecategories', null, {});
  }
};
