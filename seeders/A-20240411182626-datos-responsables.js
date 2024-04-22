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
    await queryInterface.bulkInsert('Responsables', [
      {
        numEmpl:613,
        nombre:"Oswaldo Aldo Poron",
        imagen:null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numEmpl:420,
        nombre:"Hectorio Valdez",
        imagen:null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numEmpl:696,
        nombre:"Manuela Malva Mora",
        imagen:null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numEmpl:140,
        nombre:"Prometheo Biblio",
        imagen:null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numEmpl:220,
        nombre:"Variara Velazquez",
        imagen:null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numEmpl:78,
        nombre:"Grimonio Bulubulu",
        imagen:null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Responsables', null, {});
  }
};
