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
   const resp = await models.Responsable.findAll();
   const ubi = await models.Ubicacion.findAll();
   let tags = await models.Tag.findAll();
   await queryInterface.bulkInsert('Activos',[
    {
      numSerie:5121,
      numInventario:62,
      descripcion:"Una computadora comun de oficina, con una carcasa negra carateristica.",
      imagen:null,
      responsableId: resp[0].id,
      ubicacionId: ubi[0].id,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      numSerie:2612,
      numInventario:50,
      descripcion:"Mouse negro alambrico que sirve, nada especial.",
      imagen:null,
      responsableId: resp[1].id,
      ubicacionId: ubi[1].id,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      numSerie:4202,
      numInventario:90,
      descripcion:"Una unidad central de procesamiento suelto, quien sabe que se hara con el.",
      imagen:null,
      responsableId: resp[2].id,
      ubicacionId: ubi[2].id,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      numSerie:8923,
      numInventario:23,
      descripcion:"monitor negro, esta limpio, probablemente para que se pueda apreciar lo que despliega.",
      imagen:null,
      responsableId: resp[3].id,
      ubicacionId: ubi[3].id,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      numSerie:1010,
      numInventario:12,
      descripcion:"Silla de metal comodo, tiene bien respaldo.",
      imagen:null,
      responsableId: resp[0].id,
      ubicacionId: ubi[0].id,
      createdAt:new Date(),
      updatedAt:new Date()
    }
  ],{});
  const act = await models.Activo.findAll();
  await tags[0].addActivos([act[0],act[1],act[2],act[3]]);
  await tags[1].addActivos(act[4]);
  },
  async down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Activos', null, {});
  }
};


  