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
      contrasena:"AlejandroEsChilo",
      createdAt:new Date(),
      updatedAt:new Date()
   },
   {
      nombre:"Fernando Riveras Vivos",
      tipo:"UsuarioAPP",
      contrasena:"AmoBerenjena42",
      createdAt:new Date(),
      updatedAt:new Date()
   }
  ],{})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
