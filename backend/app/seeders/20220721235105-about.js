'use strict';

const fs = require('fs')
const json_name = "abouts"
const table_name = "abouts"

let listData = []
let json_data = fs.readFileSync('storages/json/'+json_name+'.json');
let models = JSON.parse(json_data);
models = models.RECORDS
models.forEach(element => {
  listData.push({
    title: element.title,
    description: element.description,
    is_published: 1,
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
