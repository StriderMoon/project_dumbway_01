'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('blogs', [
      {
        title: "hello world",
        content: "this tester for server",
        image: "image.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('blogs', null, {});
  }
};
