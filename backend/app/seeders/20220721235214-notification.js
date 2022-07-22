'use strict';

const faker = require('faker');
const models = require("../models");

module.exports = {
  async up (queryInterface, Sequelize) {
    let listNotifications = []
    let i = 0
    let max = 500
    for(i = 0; i< max; i++){
       let user = await models.User.findOne({ order: models.sequelize.random() });
       let data = {
          user_id: user.id,
          subject: faker.vehicle.vehicle(),
          sort_content: faker.address.city(),
          full_content: faker.lorem.paragraph(),
          created_at : new Date(),
          updated_at : new Date()
       };
       listNotifications.push(data)
    }
    queryInterface.bulkDelete('notifications', null, {});
    return queryInterface.bulkInsert('notifications', listNotifications, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('notifications', null, {});
  }
};
