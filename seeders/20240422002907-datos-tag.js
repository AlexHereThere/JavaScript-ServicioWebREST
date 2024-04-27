'use strict';
const models = require("../models");
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
   await queryInterface.bulkInsert('Tags',[
    {
      nombre: "ParteComputadora",
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      nombre: "Mueble",
      createdAt:new Date(),
      updatedAt:new Date()
    }
   ],{});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tags', null, {});
  }
};
