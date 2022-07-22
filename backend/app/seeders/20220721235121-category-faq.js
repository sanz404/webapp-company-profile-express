'use strict';

const fs = require('fs')
const json_name = "category_faqs"
const table_name = "categoryfaqs"

let listData = []
let json_data = fs.readFileSync('storages/json/'+json_name+'.json');
let models = JSON.parse(json_data);
models = models.RECORDS
models.forEach(element => {
  listData.push({
    name: element.name,
    description: element.description,
    created_at : new Date(),
    updated_at : new Date()
  });
});

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkDelete(table_name, null, {});
    return queryInterface.bulkInsert(table_name, listData, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete(table_name, null, {});
  }
};
