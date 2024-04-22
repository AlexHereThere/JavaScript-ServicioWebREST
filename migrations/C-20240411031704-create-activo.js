'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Activos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      numSerie: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
      },
      numInventario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
      },
      descripcion: {
        type: Sequelize.STRING,
        allowNull: false
      },
      imagen: {
        type: Sequelize.BLOB,
        allowNull: true
      },
      responsableId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'responsables',
          key: 'id'
        }
      },
      ubicacionId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'ubicaciones',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Activos');
  }
};