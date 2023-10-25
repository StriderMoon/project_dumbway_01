'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('my-projects', [
      {
       project_name: "test project-1",
       start_date: "2023-10-24",
       end_date: "2023-10-24",
       content: "this content fill because we doing test 1",
       image: "image.jpg",
       createdAt: new Date(),
       updatedAt: new Date(),  
       }, {
        project_name: "test project-2",
        start_date: "2023-10-24",
        end_date: "2023-10-24",
        content: "this content fill because we doing test 2",
        image: "image.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),  
        }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('my-projects', null, {});
  }
};
