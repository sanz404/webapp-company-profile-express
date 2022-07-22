'use strict';

const fs = require('fs');

let json_countries = fs.readFileSync('storages/json/countries.json');
let countries = JSON.parse(json_countries);
countries = countries.ref_country_codes

let countryData = []
countries.forEach(element => {
  countryData.push({
    code: element.alpha2,
    name: element.country,
    created_at : new Date(),
    updated_at : new Date()
  });
});

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkDelete('countries', null, {});
    return queryInterface.bulkInsert('countries', countryData, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('countries', null, {});
  }
};
