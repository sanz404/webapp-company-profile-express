'use strict';

const fs = require('fs')
const json_name = "messages"
const table_name = "messages"

let listData = []
let json_data = fs.readFileSync('storages/json/'+json_name+'.json');
let models = JSON.parse(json_data);
models = models.RECORDS
models.forEach(element => {
  listData.push({
    full_name: element.full_name,
    email: element.email,
    phone: element.phone,
    message: element.message,
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
