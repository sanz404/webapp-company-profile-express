'use strict';

const fs = require('fs')
const models = require("../models")
const json_name = "faqs"
const table_name = "faqs"

let listData = []
let json_data = fs.readFileSync('storages/json/'+json_name+'.json');
let json_model = JSON.parse(json_data);
json_model = json_model.RECORDS
json_model.forEach(element => {
  listData.push({
    question: element.question,
    answer: element.answer,
    sort: element.sort,
    is_published: 1,
    created_at : new Date(),
    updated_at : new Date()
  });
});

module.exports = {
  async up (queryInterface, Sequelize) {

    let i = 0
    while(i < listData.length){
      let category = await models.CategoryFaq.findOne({ order: models.sequelize.random() });
      listData[i]["category_id"] = category.id
      i++
    }

    queryInterface.bulkDelete(table_name, null, {});
    return queryInterface.bulkInsert(table_name, listData, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete(table_name, null, {});
  }
};
