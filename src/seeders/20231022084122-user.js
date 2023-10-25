'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
    {
      name: 'John Doe',
      email: "tester@gmail.com",
      password: 'root',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'John Doe',
      email: "tester@gmail.com",
      password: 'root',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
