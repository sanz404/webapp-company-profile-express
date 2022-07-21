'use strict';

const faker = require('faker');
const models = require("../models")
const bcrypt = require('bcryptjs')
const DEFAULT_ADMIN_USERNAME = "admin"
const DEFAULT_ADMIN_EMAIL = "admin@devel.com"
const DEFAULT_PASSWORD = "5ecReT!"

async function createUser(country_id, is_admin){
  return {
      country_id: country_id,
      username:  is_admin === 1 ? DEFAULT_ADMIN_USERNAME : faker.internet.userName().toLowerCase(),
      email:  is_admin === 1 ? DEFAULT_ADMIN_EMAIL : faker.internet.email().toLowerCase(),
      phone: faker.phone.phoneNumber(),
      address1: faker.address.streetAddress(),
      address2: faker.address.streetAddress(),
      city: faker.address.city(),
      zip_code: faker.address.zipCode(),
      password: bcrypt.hashSync(DEFAULT_PASSWORD, 10),
      is_admin: is_admin,
      status: 1,
      created_at : new Date(),
      updated_at : new Date()
  }
}


module.exports = {
  async up (queryInterface, Sequelize) {

    let users = []
    let i
    let max = 100
    for(i = 1; i <= max; i++){
        let findCountry = await models.Country.findOne({ order: models.sequelize.random() });
        let obj = await createUser(findCountry.id, i === 1 ? 1 : 0);
        users.push(obj)
    }

    queryInterface.bulkDelete('users', null, {});
    return queryInterface.bulkInsert('users', users, {});
    
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};