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
   await queryInterface.bulkInsert('usuarios',[
    {
      nombre:"Alejandro Castro Renteria",
      tipo:"ClienteAPI",
      email:"a1183297@uabc.edu.mx",
      createdAt:new Date(),
      updatedAt:new Date()
   },
   {
      nombre:"Fernando Riveras Vivos",
      tipo:"UsuarioAPP",
      email:"alguienMas@uabc.edu.mx",
      createdAt:new Date(),
      updatedAt:new Date()
   }
  ],{})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
