'use strict';

const faker = require('faker');
const models = require("../models");

module.exports = {
  async up (queryInterface, Sequelize) {
    let listData = []
    let i = 0
    let max = 100
    for(i = 0; i< max; i++){
       let title = faker.vehicle.vehicle()
       let slug =  title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
       let user = await models.User.findOne({ where: { is_admin: 1 } });
       let data = {
          user_id: user.id,
          slug: slug,
          title: title,
          content: faker.lorem.paragraph(),
          is_published: 1,
          created_at : new Date(),
          updated_at : new Date()
       };
       listData.push(data)
    }
    queryInterface.bulkDelete('articles', null, {});
    return queryInterface.bulkInsert('articles', listData, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('articles', null, {});
  }
};
