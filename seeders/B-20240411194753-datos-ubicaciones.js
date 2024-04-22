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
    await queryInterface.bulkInsert('Ubicaciones',
    [
      {
        desc:"Cuarto que se utiliza para tomar clases",
        imagen:null,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        desc:"Cuarto lleno de material para llevar a cabo proyectos electronicos",
        imagen:null,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        desc:"Cuarto de trabajo de un docente, se puede estudiar y trabajar bien en el.",
        imagen:null,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        desc:"Cuarto para estudiantes, se utiliza para recreacion o para hacer tarea.",
        imagen:null,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        desc:"Cuarto especial para llevar a cabo proyectos electronicos, se tiene mucho material para lo mismo.",
        imagen:null,
        createdAt:new Date(),
        updatedAt:new Date()
      }
    ],{})
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
