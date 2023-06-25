'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airplanes', [
      {
        modelNumber : 'Overnight Skies',
        capacity : 300,
        createdAt: new Date(),
        updatedAt:new Date()
      },
      {
        modelNumber : 'Aeroflow America',
        capacity : 350,
        createdAt: new Date(),
        updatedAt:new Date()
      },
      {
        modelNumber : 'Republic Airlines',
        capacity : 400,
        createdAt: new Date(),
        updatedAt:new Date()
      },
      {
        modelNumber : 'Blue Line Club',
        capacity : 320,
        createdAt: new Date(),
        updatedAt:new Date()
      },
      {
        modelNumber : 'Overnight Skies',
        capacity : 150,
        createdAt: new Date(),
        updatedAt:new Date()
        
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
